import React from 'react'
import {render} from 'react-dom'

import Component from '../../src'

require('./styles.scss');

let Demo = React.createClass({

	showResults(results) {
		console.log('the results are: ', results);
	},

  render() {
    return <div className="wrapper">
      <h1 className="title">react-youtube-autocomplete</h1>
      <p className="tagline">An auto-suggest search box for Youtube apps built with React</p>
      <Component
				apiKey='AIzaSyAtSE-0lZOKunNlkHt8wDJk9w4GjFL9Fu4'
				maxResults='20'
				callback={this.showResults}
        placeHolder='Search Youtube ok?'
      />
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
