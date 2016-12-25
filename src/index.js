import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDL9dBckT_PKKHTPrdq4iScPyz6QZFd2Y8';
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
