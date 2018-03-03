import React, { Component } from 'react';
import Post from './Post';
import nancy from './nancy.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={nancy} className="App-logo" alt="Nancy Drew logo" />
          <h1 className="App-title">The Secrets of Nancy Drew</h1>
        </header>
        <p className="App-intro">
          This is a blog about Nancy Drew!
        </p>
        <Post
          date='March 3, 2018'
          content='This is a blog post!'
        >
        </Post>
      </div>
    );
  }
}

export default App;
