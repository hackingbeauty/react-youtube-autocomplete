import React, {Component} from 'react';
import Typeahead from 'react-typeahead-component2';
import JSONP from 'jsonp';
import OptionsTemplate from './OptionsTemplate';
import YoutubeFinder from 'youtube-finder';

const googleAutoSuggestURL = '//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=';

class YoutubeAutocomplete extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  handleChange(event) {
    var self = this,
        query = event.target.value,
        url = googleAutoSuggestURL + query;

    this.setState({
      inputValue: query
    });

    JSONP(url, function(error, data){
      if (error) {
        console.log(error);
      } else {
        var searchResults = data[1];
        self.setState({
          options: searchResults
        });
      }
    });
	}

  onClick(event, optionData) {
    var searchTerm = optionData[0];
    this.setState({
      inputValue: searchTerm
    });
  }

  onOptionChange(event, optionData, index) {
    var self = this;
    var searchTerm  = optionData[0];
    var apiKey      = this.props.apiKey;
    var maxResults  = this.props.maxResults ? this.props.maxResults : '50';

    this.setState({
      inputValue: searchTerm
    });
  }

  onDropDownClose(event) {
    var self          = this;
    var searchTerm    = this.state.inputValue;
    var maxResults    = this.props.maxResults <= 50 ? this.props.maxResults : '50';
    var YoutubeClient = YoutubeFinder.createClient({ key: this.props.apiKey });
    var params        = {
      part        : 'id,snippet',
      type        : 'video',
      q           : searchTerm,
      maxResults  : maxResults
    }

    YoutubeClient.search(params, function(error,results){
      if(error) return console.log(error);
      self.props.callback(results.items);
    });

  }

  render() {
    // React components using ES6 classes no longer autobind this to non React methods. In your constructor, add:
    // this.onChange = this.onChange.bind(this)
    // this is why you have to do onChange={this.handleChange.bind(this)}
    return <div>
      <Typeahead
      	inputValue={this.state.inputValue}
      	placeholder={this.props.placeHolder}
        className={this.props.className}
      	onChange={this.handleChange.bind(this)}
        optionTemplate={OptionsTemplate}
        options={this.state.options}
        onOptionClick={this.onClick.bind(this)}
        onOptionChange={this.onOptionChange.bind(this)}
        onDropdownClose={this.onDropDownClose.bind(this)}
      />
    </div>
  }
}

export default YoutubeAutocomplete;
