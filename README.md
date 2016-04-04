# react-youtube-autocomplete
An auto-suggest search box for React apps built on top of Youtube.

I like to build apps on top of Youtube.  Sometimes you need to let users search for videos on Youtube within your app.
Just drop this component into your Youtube-friendly React.js app and you'll get a full functional auto-suggest-enabled search box.

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
	id={string}            // defaults -> #youtubeSearchBox
	placeHolder={string}   // defaults -> "Search Youtube"
	className={string}     // defaults -> random string
	callback={function}    // callback to execute when search result is selected
/>
```

## Example

```js
import YoutubeAutocomplete from 'react-youtube-autocomplete';

class Example extends React.Component {
  render() {
    return (
      <YouTubeAutocomplete
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