import logo from './logo.svg';
import './App.css';
import React from 'react';
import NewsBox from './containers/NewsBox';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <NewsBox/>
    </div>
  );
}

export default App;


// 'https://hacker-news.firebaseio.com/v0/beststories.json? print=pretty&orderBy="$key"&limitToFirst=30'