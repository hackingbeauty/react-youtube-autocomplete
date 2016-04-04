import React from 'react'
import {render} from 'react-dom'

import Component from '../../src'

let Demo = React.createClass({

	showResults(results) {
		console.log('the results are: ', results);
	},

  render() {
    return <div>
      <h1>React Youtube Autocomplete</h1>
      <Component
				apiKey='AIzaSyAtSE-0lZOKunNlkHt8wDJk9w4GjFL9Fu4'
				maxResults='20'
				callback={this.showResults}
      />
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
