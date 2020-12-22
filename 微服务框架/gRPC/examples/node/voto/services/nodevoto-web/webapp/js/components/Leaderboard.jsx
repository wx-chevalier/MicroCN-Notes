import React from 'react';
import _ from 'lodash';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leaderboard: []
    }
  }

  componentDidMount() {
    this.loadFromServer();
  }

  loadFromServer(url) {
    fetch('/api/leaderboard').then(r => {
      r.json().then(urls => {
        this.setState({
          leaderboard: urls
        });
      }).catch(e => this.setState({ error: e }));
    }).catch(e => this.setState({ error: e }));
  }

  renderLeaderboard() {
    return _.map(this.state.leaderboard, (gif, i) => {
      let _url = gif.url.replace("https://media2.giphy.com/media/", "gifs/");
      return (
        <div className="gif" key={`gif-${i}`} title={`${gif.votes} votes`}>
          <div><img src={_url}></img></div>
          { gif.votes > 0 ? <div className="counter">{gif.votes}</div> : null}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="background">
        <div className="page-content container-fluid">
          <div className="row">
            <div className="col-md-12">
              {!this.state.error ? null : <div className="error">Error loading leaderboard.</div>}
              <h1>GIF VOTE LEADERBOARD </h1>
              <Link to="/"><div className="btn btn-blue">Vote on your favorite</div></Link>
              <div className="gif-list">{this.renderLeaderboard()}
                <div className="footer-text">
                  <p className="footer-experiment">A <a href='https://buoyant.io'>Buoyant</a> social experiment</p>
                  <p>© 2018 Buoyant, Inc. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
