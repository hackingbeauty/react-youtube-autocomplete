# react-youtube-autocomplete
A responsive React-based auto-suggest search box for Youtube apps.

I like to build apps on top of Youtube.  Sometimes you need to let users search for videos on Youtube within your app.
Just drop this component into your Youtube-friendly React.js app and you'll get a fully functional auto-suggest-enabled search box.

## Demo

See this [compenent in action](hackingbeauty.github.io/react-youtube-autocomplete/)

## Installation

`npm install --save react-youtube-autocomplete`

## Features

- Autocomplete text entry
- Search Youtube based on text input
- Retrieve list of results from Youtube
- Display drop-down list of search results
- Optionally limit results to specific category 

## Usage

```js
<YoutubeAutocomplete
  apiKey={string}          // you must get an API key from google if you want video search results returned
  maxResults={string}      // defaults -> 50. Number of video search results you want
  placeHolder={string}     // defaults -> "Search Youtube"
  videoCategoryId={string} // optional. The video category ID to limit the results to if specified
  callback={function}      // callback to execute when search results are retrieved
  className={string}       // defaults -> random string
/>
```

## Example

```js
import YoutubeAutocomplete from 'react-youtube-autocomplete';

class Example extends React.Component {
  render() {
    return (
      <YouTubeAutocomplete
        apiKey="YOUR-API-KEY-THAT-YOUR-REGISTERED-WITH-GOOGLE"
        placeHolder="Search Youtube"
        videoCategoryId="10" //10 = Music, for example
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