import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDL9dBckT_PKKHTPrdq4iScPyz6QZFd2Y8';

YTSearch({key:API_KEY, term:'surfboards'}, function(data) {
  console.log(data);
})
// Create a new component. Should produce some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
