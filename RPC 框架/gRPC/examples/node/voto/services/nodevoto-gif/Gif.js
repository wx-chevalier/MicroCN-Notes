'use strict';

const logger = require('../../lib/logger');
const gifCodeMap = require('../../lib/gif_codemap.json');

class Gif {
  constructor() {
    this.topGif = [':cartoon-halloween-ghost-aTf4PONtSYB1e:',
      ':thengb-baby-ngb-the-7uHeCjfeMPkZ2:',
      ':love-oh-these-ucV80fdRMixZC:',
      ':sesame-street-sonia-sotomayor-3r1PtiMB199zW:',
      ':giphycam-LEttrVn3fFH7q:',
      ':findingdory-finding-dory-nemo-3o6ozgge4UJklqLgIg:',
      ':reaction-90s-fpzYhFGJZ9xPW:',
      ':the-simpsons-mr-burns-mSmF4o8LT36ec:',
      ':animated-vintage-comics-cg87kkTQZvCGA:',
      ':hug-adventure-time-feel-better-VogNJM2e5i4Pm:',
      ':sleepy-while-also-6NRH8IXqSNgL6:',
      ':kim-kardashian-qeHYeRn87wJj2:',
      ':mash-up-beyonce-JQqUUhTbAVsxW:',
      ':new-girl-my-little-pony-uni-qd4SuHfwtooGA:',
      ':happy-applause-CkE3ge4PJofcI:',
      ':disney-puppy-puppies-national-day-UTuy9luZStALS:',
      ':batman-sad-rain-rR29jBsTB3lZe:',
      ':steve-carrell-leslie-mann-the-40-year-old-virgin-3oEdv9YYw5fNl4RIaI:',
      ':cat-hamilton-hipstercat-3xz2BHFXxvFDYwnA9W:',
      ':flowers-pastel-pale-6kqtoA6DHgHLy:',
      ':30s-1934-silly-symphonies-PRI5giiYFS3W8:',
      ':1987-the-chipmunk-adventure-SnxJmrMxTFlle:',
      ':jasonclarke-loop-yolo-art-13JAvS2OyKJDry:',
      ':eyes-uXYmFBpG4INEI:',
      ':thumbs-up-daft-punk-nrb-RpVZL0sy3vrri:',
      ':forums-spring-hummingbird-EGauSkKQZuXxS:',
      ':food-hungry-adventure-time-I6sFcn3VXL1Uk:',
      ':cookie-monster-atari-2600-lMcMve6tL1AM8:',
      ':the-simpsons-tired-homer-simpson-29psbxDByiFlm:',
      ':sxsw-2016-barks-and-baristas-l2JJts44KFYyMez6M:',
      ':dance-feeling-it-ZaOWGY4zFrXYQ:',
      ':90s-commercials-11o3buMsBCQsPm:',
      ':happy-spongebob-squarepants-uL3sow5gYurao:',
      ':disneyzootopia-xT9DPxggC8w6kCWVY4:',
      ':disneypixar-disney-pixar-dIjGxPOeIAvHW:',
      ':disney-the-jungle-book-mowgli-baloo-WfMTAZcqJjCc8:',
      ':challenger-bobs-burgers-louise-belcher-dfIQG68floQuY:',
      ':television-futurama-Fexvhiy38lijC:',
      ':my-little-pony-mlp-g1-2zck3lIkKD15u:',
      ':rihanna-vs-victorias-secret-l0O9zAv2JAijohgru:',
      ':sad-crying-tears-G7vf3lJP0oeK4:',
      ':dudebropartymassacre3-5sf-R84T38nfZgoLe:',
      ':valentines-valentines-day-valentine-nicolette-groome-yoJC2ztxk09qjRkY36:',
      ':love-stupid-finn-CdLyDurMXXN2E:',
      ':warnerarchive-justice-league-unlimited-3o6UBonPo5FhstgLfi:',
      ':tired-sleeping-the-simpsons-YgWttApA5Uk9O:',
      ':animation-reaction-delete-8bTmYiGgMGias:',
      ':cute-naruto-psKReJOWm4cfK:',
      ':monster-arena-project-q7dp7xY7sHGCs:',
      ':zooey-deschanel-new-girl-my-2-10cGA3fc2z12r6:',
      ':angry-computer-spongebob-squarepants-XIS4ARkxVah4A:',
      ':confused-surprised-alice-in-wonderland-XWEL9AQ529wKA:',
      ':animated-trippy-psychedelic-dlwB35ZltpqXC:',
      ':gifnewstest-artists-on-tumblr-csaba-klement-xITOFYCXsbQM8:',
      ':cat-trippy-space-GyJ8p0Um850ic:',
      ':rabbit-bored-sigh-O9IvntBQsqSB2:',
      ':candle-kwanzaa-proud-family-3rgXBChdAGE0WF3MRO:',
      ':okkultmotionpictures-animation-christmas-open-knowledge-Z0rwIBc5oI1RC:',
      ':snow-winter-christmas-dUWHOAKFSNtdK:',
      ':black-and-white-cute-christmas-jdjGqxdRJx44g:',
      ':animation-love-disney-e51lcDmXXeLPa:',
      ':christmas-cute-cartoon-e9dIewetYdQZO:',
      ':warnerarchive-hanna-barbera-flintstones-a-flintstone-christmas-d2YTUFW4o8UiQoSc:',
      ':cat-j1QQj6To9Pbxu:',
      ':80s-cereal-strawberry-shortcake-sgXZwQrefu6J2:',
      ':zayn-malik-naughty-boy-tUQqF6Ct1u7EQ:',
      ':christmas-snow-hhE34K46p8i4M:',
      ':haydiroket-pixel-cheeseburger-animated-nIJca2o6axtMk:',
      ':poldark-spoilers-yq1YQCQoaEny8:',
      ':wizard-of-oz-the-wiz-live-hZTauiFiq2q4g:',
      ':pokemon-high-five-gQ8qWas3GxlPq:',
      ':internet-win-Qn7IK0NSb1BCg:',
      ':funny-cute-OJkSloXZvxuDe:',
      ':kylestrope-animation-illustration-kyle-strope-10M8Yr4WKJK63e:',
      ':adventure-time-advice-jake-the-dog-vSr0Lgose4rhS:',
      ':80s-cartoons-she-ra-it8307a0XxlVS:',
      ':full-house-michelle-tanner-mary-kate-olsen-12ZQVkkbvvM3vy:',
      ':dancing-the-simpsons-smithers-6VKrjh04YGhOM:',
      ':reply-neanda-watches-fresh-precure-askoutcasts-cIScSqNCXbSyk:',
      ':gross-pocahontas-raccoon-3oEdvc4JCV2HJa7UQ0:',
      ':will-reasons-fine-V4X14bU1vlHfa:',
      ':will-via-available-TRl4eNrNjDuXC:',
      ':minions-illumination-trailer-2-Nn73VXklzXEpq:',
      ':emperors-new-groove-eU8dlmCwQXtja:',
      ':90s-nickelodeon-rugrats-144b158M2GhmV2:',
      ':cartoon-rugrats-5UeRwJmIiUuYw:',
      ':south-park-cute-smile-Z6m2HqMOpSaxW:',
      ':confused-alice-in-wonderland-disney-x8gioMGGfpykU:',
      ':charlie-brown-crosspost-xWcTtMwGlD8Bi:',
      ':adventure-time-eating-jake-the-dog-KiQTBiI77Dpy8:',
      ':art-illustration-6LdOAmYhcOEOQ:',
      ':cats-photos-thechive-11bV8o4fJ3vpOE:',
      ':hair-flip-whatever-hey-arnold-m8QWzr7YNO2rK:',
      ':movie-film-animation-pcPs6v6fhE7Ru:',
      ':filmedit-coming-to-america-movieedit-jHPwSl9PMGZB6:'];

    this.inMemAllGif = this.topGif.map(_em => {
      return {
        url: gifCodeMap[_em].src,
        shortcode: _em
      };
    });
  }

  getByShortcode(shortcode) {
    let found = this.inMemAllGif.filter(_em => {
      return _em.shortcode === shortcode;
    });
    logger.info(`Retrieved gif for shortcode [${shortcode}], which yielded [${found.length}] match(es).`);
    return found.length > 0 ? found[0] : null;
  }

  getList() {
    logger.info(`Returning results with [${this.inMemAllGif.length}] total entries.`);
    return this.inMemAllGif;
  }
}

module.exports = Gif;
