import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import 'whatwg-fetch';

const GifVotoPage = ({headline, contents, containerClass, preHeadline}) => {
  return (
    <div className={containerClass}>
      <div className="page-content container-fluid">
        <div className="row">
          <div className="col-md-12">
            {!preHeadline ? null : preHeadline}
            <h1 className="headline">{headline}</h1>

            {contents}
          </div>
        </div>
      </div>
    </div>
  );
}
export default class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.resetState = this.resetState.bind(this);
    this.state = {
      gifList: [],
      selectedGif: null,
      error: null
    }
  }

  loadFromServer() {
    fetch('/api/list').then(rsp => {
      rsp.json().then(r => {
        this.setState({ gifList: r })
      }).catch(e => {
        this.setState( {error: e.statusText });
      }).catch(e => {
        this.setState( {error: e.statusText });
      });
    });
  }

  componentDidMount() {
    this.loadFromServer();
  }

  vote(gif) {
    fetch(`/api/vote?choice=${gif.shortcode}`).then(rsp => {
      if (rsp.ok) {
        this.setState({ selectedGif: gif, error: null });
      } else {
        throw new Error("Unable to Register Vote");
      }
    }).catch(e => {
        this.setState({ selectedGif: gif, error: e.toString() });
      });
  }

  resetState() {
    this.setState({ selectedGif: null, error: null });
  }

  renderGifList(gifs) {
    return _.map(gifs, (gif, i) => {
      let url = `gifs/${gif.url.substr(gif.url.indexOf(".giphy.com/media/")+17)}`;
      return (
        <div
          className="gif gif-votable"
          key={`gif-${i}`}
          onClick={e => this.vote(gif)}
        >
          <img src={url}></img>
        </div>
      );
    });
  }

  renderLeaderboardLink() {
    return <Link to="/leaderboard"><div className="btn btn-blue">View the leaderboard</div></Link>;
  }

  render() {
    if (this.state.error) {
      let errorMessage = <p>We couldn't process your request.</p>;
      if(this.state.selectedGif.shortcode === ":poop:") {
        errorMessage = (<div>
          <p className="poop-explanation">For the sake of this demo, voting for 💩<br />
            always returns an error.
          </p>
          <p>Get your mind out of the gutter, and <Link to="/" onClick={this.resetState}>pick another</Link>!</p>
        </div>);
      }

      let contents = (
        <div>
          {errorMessage}
          <Link to="/" onClick={this.resetState}><div className="btn btn-blue">Select again</div></Link>
        </div>
      );

      return <GifVotoPage
        preHeadline={<h1 className="title">Uh oh.</h1>}
        headline="🚧"
        contents={contents}
        containerClass="background-500"
      />;
    } else if (!this.state.selectedGif) {
      let gifList = this.state.gifList;
      let contents = (
        <div>
          <h1>GIF VOTE</h1>
          <p>Tap to vote for your favorite gif below</p>
          {this.renderLeaderboardLink()}
          {!_.isEmpty(gifList) ? null : <div>Loading gif...</div>}

          <div className="gif-list">
            {this.renderGifList(gifList)}

            <div className="footer-text">
              <p>A <a href='https://buoyant.io'>Buoyant</a> social experiment</p>
              <p>Check out the <a href='/api-docs'>API docs</a> for REST reference</p>
              <p>© 2018 Buoyant, Inc. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      );

      return <GifVotoPage
        headline="🗳"
        contents={contents}
        containerClass="background"
      />;
    } else {
      let url = `gifs/${this.state.selectedGif.url.substr(this.state.selectedGif.url.indexOf(".giphy.com/media/")+17)}`;
      let contents = (
        <div>
          <p>See how you stack up against others</p>
          {this.renderLeaderboardLink()}
          <Link to="/" onClick={this.resetState}><div className="btn btn-white">Pick another one</div></Link>
        </div>
      );
      let headline = (
          <img src={url}></img>
      );
      return <GifVotoPage
        preHeadline={<h1>You picked:</h1>}
        headline={headline}
        contents={contents}
        containerClass ="background"
      />;
    }
  }
}
