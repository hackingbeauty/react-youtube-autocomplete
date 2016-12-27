import React, { PropTypes } from 'react';
import {render} from 'react-dom';
import { Dialog } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Code from 'react-embed-code';

import Component from '../../src';

injectTapEventPlugin();

require('./styles.scss');

const cssDownload = `
  .react-typeahead-options {
    margin: 0;
    padding: 0;
    list-style-type: none;
    border: 1px solid #ccc;
    cursor: default;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 1;
    width: 100%;
  }

  .react-typeahead-options {
    margin-left: -8px;
  }

  .react-typeahead-options li[role="option"] {
    padding: 5px;
    text-align: left;
    cursor: pointer;
  }

  .react-typeahead-options li[role="option"][aria-selected="true"] {
    background: #00bcd4;
    color: white;
    font-weight: bold;
  }

  .react-typeahead-container {
    border: 1px solid #024e6a;
    padding: 5px 8px;
    border-radius: 0px;
    background-color: white;
    margin: 0 auto
  }

  .react-typeahead-input {
    position: relative;
    background: white;
    outline: none;
    width: 100%;
    font-size: 24px;
    line-height: 30px;
    border: none;
  }
`;

const componentEmbed = `
  import YoutubeAutocomplete from 'react-youtube-autocomplete';

  <YoutubeAutocomplete
    apiKey='AIzaSyAtSE-0lZOKunNlkHt8wDJk9w4GjFL9Fu4'
    maxResults='20'
    [videoCategoryId='10'] /* Optional. Limit results to given category */
    placeHolder='Search Youtube'
    callback={yourCallback} />
`;

const Demo = React.createClass({
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
    this.setState({open: false});
  },

  render() {
    var searchResults = this.state.searchResults;
    var formattedResults;

    if(searchResults) {
      formattedResults = this.getFormattedResults(searchResults);
    }

    return <div>
      <div className="container">
        <div id="main">
          <div className="title">
            <div className="youtube-icon"></div>
            <div className="react-icon"></div>
            <div className="headline">
              <h1>react-youtube-autocomplete</h1>
              <p className="tagline">A responsive & React-based auto-suggest search box for Youtube apps</p>
            </div>
            <div id="project-link">
              <a href="https://github.com/hackingbeauty/react-youtube-autocomplete">Project & Docs on Github</a>
              <div id="github-links">
                <iframe src="https://ghbtns.com/github-btn.html?user=hackingbeauty&repo=react-youtube-autocomplete&type=fork&count=true&size=large" frameBorder="0" scrolling="0" width="114px" height="30px"></iframe>
                <iframe src="https://ghbtns.com/github-btn.html?user=hackingbeauty&repo=react-youtube-autocomplete&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="111px" height="30px"></iframe>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <em>Demo</em>
          <br />
          <br />
          <div id="demo-box">
            <Component
              apiKey='AIzaSyAtSE-0lZOKunNlkHt8wDJk9w4GjFL9Fu4'
              maxResults='20'
              callback={this.showResults}
              placeHolder='Search Youtube'
              className="my-class-name" />
          </div>
          <br />
          <br />
          <br />
          <br />
          <em>Step 1 - NPM install</em>
          <br />
          <br />
          <div className="code-snippet">npm install --save react-youtube-autocomplete</div>
          <br />
          <br />
          <em>Step 2 - Embed component</em>
          <br />
          <br />
          <div className="code-snippet text-left">
            <Code embed={componentEmbed} />
          </div>
          <br />
          The <div className="code-snippet-inline">videoCateogoryId</div> parameter is optional. If specified, it will
          limit the results to the category supplied. See the
          <a href="https://developers.google.com/youtube/v3/docs/videoCategories/list">Youtube API</a> for more info on
          the allowable values.
          <br />
          <br />
          <em>Step 3 - Download base styles</em>
          <br />
          <br />
          <div className="code-snippet text-left smaller-text">
            <Code embed={cssDownload} />
          </div>
          <br />
        </div>
      </div>
      <footer>
        &copy; 2016 Hacking Beauty - <a href="http://hackingbeauty.com">www.hackingbeauty.com</a>
      </footer>
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
