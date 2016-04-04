# react-youtube-autocomplete

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