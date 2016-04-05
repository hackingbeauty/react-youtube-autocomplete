import React from 'react'
import {render} from 'react-dom'
import { Dialog } from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin';

import Component from '../../src'

injectTapEventPlugin()

// require('./styles.scss')

let Demo = React.createClass({

  getInitialState() {
    return {
      open: false,
      searchResults : []
    }
  },

  getFormattedResults(searchResults) {
    return searchResults.map(function(result) {
      return <li key={result.id.videoId} className="search-result">
        <a href={`http://youtube.com/watch?v=${result.id.videoId}`}>
          <img src={result.snippet.thumbnails.default.url} alt={result.snippet.title} />
          <span>{result.snippet.title}</span>
        </a>
      </li>
    });
  },

	showResults(searchResults) {
    this.setState({
      open          : true,
      searchResults : searchResults
    })
	},

  handleClose() {
    this.setState({open: false});
  },

  onRequestClose() {
    console.log('Close The Welcome Dialog.');
    this.setState({open: false});
  },

  render() {
    var searchResults = this.state.searchResults;
    var formattedResults;

    if(searchResults) {
      formattedResults = this.getFormattedResults(searchResults);
    }

    return <div className="container">
      <div className="title">
        <div className="youtube-icon"></div>
        <div className="headline">
          <h1>react-youtube-autocomplete</h1>
          <p className="tagline">A React-based auto-suggest search box for Youtube apps</p>
        </div>
        <div className="react-icon"></div>
      </div>
      <br />
      <br />
      <br />
      <em>Demo</em>
      <br />
      <br />
      <div id="main">
        <Component
  				apiKey='AIzaSyAtSE-0lZOKunNlkHt8wDJk9w4GjFL9Fu4'
  				maxResults='20'
  				callback={this.showResults}
          placeHolder='Search Youtube'
          className="my-class-name" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <em>Install</em>
        <br />
        <br />
        <div className="code-snippet">npm install --save react-youtube-autocomplete</div>
        <br />
        <br />
        <br />
        <a href="https://github.com/hackingbeauty/react-youtube-autocomplete">Project & Docs on Github</a>
        <br />
        <br />
      </div>
      <iframe src="https://ghbtns.com/github-btn.html?user=hackingbeauty&repo=react-youtube-autocomplete&type=fork&count=true&size=large" frameBorder="0" scrolling="0" width="114px" height="30px"></iframe>
      <iframe src="https://ghbtns.com/github-btn.html?user=hackingbeauty&repo=react-youtube-autocomplete&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="111px" height="30px"></iframe>
      <Dialog
        title="Search Results from Youtube"
        open={this.state.open}
        onRequestClose={this.onRequestClose}
        autoScrollBodyContent={true}>
        <ul id="search-result-list">
          {formattedResults}
        </ul>
      </Dialog>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
