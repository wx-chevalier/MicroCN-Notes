'use strict';
const api = require('../../services/nodevoto-gif/api');
const Gif = require('../../services/nodevoto-gif/Gif');

const grpc = require('grpc');

const expect = require('chai').expect;

const wrap = (func) => {
  return (arg) => {
    return new Promise((res, rej) => {
      func(arg, (err, val) => {
        if (err) {
          return rej(err);
        } else {
          return res(val);
        }
      });
    });
  };
};

const wrapArg = (arg) => {
  return { 'request': { 'Shortcode': arg } };
};

describe('api (gif)', () => {
  let impls;

  beforeEach(async() => {
    const server = new grpc.Server();
    const gif = new Gif();

    impls = await api.newGrpcServer(server, gif);
  });

  describe('#newGrpcServer', () => {
    it('should return implemenations of RPC operations', async() => {

      expect(Object.entries(impls).length).equals(2);
      expect(impls.ListAll).not.equal(null);
      expect(impls.FindByShortcode).not.equal(null);
    });

  });

  describe('implementation', () => {

    it('should return all gifs when ListAll is called', async() => {
      let response = await wrap(impls.ListAll)();

      expect(response.list.length).equals(95);

      expect(response.list[5].url).equals('https://media3.giphy.com/media/3o6ozgge4UJklqLgIg/100w.gif');
      expect(response.list[5].shortcode).equals(':findingdory-finding-dory-nemo-3o6ozgge4UJklqLgIg:');
    });

    it('should return gif for valid shortcode', async() => {
      let findByShortcode = wrap(impls.FindByShortcode);
      let found = (await findByShortcode(wrapArg(':gifnewstest-artists-on-tumblr-csaba-klement-xITOFYCXsbQM8:'))).Gif;

      expect(found).not.to.equal(null);
      expect(found.url).equals('https://media3.giphy.com/media/xITOFYCXsbQM8/100w.gif');
      expect(found.shortcode).equals(':gifnewstest-artists-on-tumblr-csaba-klement-xITOFYCXsbQM8:');
    });

    it('should find gifs for all shortcodes', async() => {
      let list = (await wrap(impls.ListAll)()).list;
      let findByShortcode = wrap(impls.FindByShortcode);

      let all = list.map(gif => {
        return findByShortcode(wrapArg(gif.shortcode)).then(found => {
          return found.Gif.url === gif.url
            && found.Gif.shortcode === gif.shortcode;
        });
      });

      let res = (await Promise.all(all)).reduce((prev, curr) => {
        return prev && curr;
      }, true);

      expect(res).equals(true);
    });

    it('should return null if it cannot find shortcode', async() => {
      let findByShortcode = wrap(impls.FindByShortcode);
      let found = await findByShortcode(wrapArg(':not_available:'));

      expect(found.Gif).equals(null);
    });

  });

});
