import React from 'react'
import {render} from 'react-dom'

import Component from '../../src'

require('./styles.scss');

let Demo = React.createClass({

	showResults(results) {
		console.log('the results are: ', results);
	},

  render() {
    return <div className="container">
      <div className="title">
        <div className="youtube-icon"></div>
        <h1>react-youtube-autocomplete</h1>
        <div className="react-icon"></div>
      </div>
      <p className="tagline">An auto-suggest search box for Youtube apps built with React</p>
      <br />
      <br />
      <em>Demo</em>
      <br />
      <br />
      <Component
				apiKey='AIzaSyAtSE-0lZOKunNlkHt8wDJk9w4GjFL9Fu4'
				maxResults='20'
				callback={this.showResults}
        placeHolder='Search Youtube'
        className="yada-yada"
      />
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
