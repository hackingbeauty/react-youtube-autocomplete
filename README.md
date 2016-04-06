# react-youtube-autocomplete
A responsive React-based auto-suggest search box for Youtube apps

I like to build apps on top of Youtube.  Sometimes you need to let users search for videos on Youtube within your app.
Just drop this component into your Youtube-friendly React.js app and you'll get a fully functional auto-suggest-enabled search box.

## Demo

See this [compenent in action](http://hackingbeauty.com/react-youtube-autocomplete/)

## Installation

`npm install react-youtube-autocomplete --save`

## Features

- Autocomplete text entry
- Search Youtube based on text input
- Retrieve list of results from Youtube
- Display drop-down list of search results

## Usage

```js
<YoutubeAutocomplete
  apiKey={string}        // you must get an API key from google if you want video search results returned
  maxResults={string}    // defaults -> 50. Number of video search results you want
  placeHolder={string}   // defaults -> "Search Youtube"
  callback={function}    // callback to execute when search results are retrieved
  className={string}     // defaults -> random string
/>
```

## Example

```js
import YoutubeAutocomplete from 'react-youtube-autocomplete';

class Example extends React.Component {
  render() {
    return (
      <YouTubeAutocomplete
        apiKey="AIzaSyAtSE-0lZOKunNlkHt8wDJk9w4GjFL9Fu4"
        placeHolder="Search Youtube"
        callback= this._onSearchResultsFound
      />
    );
  }

  _onSearchResultsFound(results) {
    // Results is an array of retreived search results
    // I use flux, so I dispatch results to an action
    flux.actions.showSearchResults(results);
  }
}
```

## License

MIT