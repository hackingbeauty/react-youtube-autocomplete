import React from 'react'
import {render} from 'react-dom'

import Component from '../../src'

// require('./styles.scss');

let Demo = React.createClass({

	showResults(results) {
		console.log('the results are: ', results);
	},

  render() {
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
      <em>Demo</em>
      <br />
      <br />
      <div id="main">
        <Component
  				apiKey='AIzaSyAtSE-0lZOKunNlkHt8wDJk9w4GjFL9Fu4'
  				maxResults='20'
  				callback={this.showResults}
          placeHolder='Search Youtube'
          className="my-class-name"
        />
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
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
