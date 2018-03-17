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
          date="March 3, 2018"
          content="hi i just read the Secret of red gate farm. it was amazing. bess got  bit by a snake.
          Nancy,bess and george got tied up by the black snake colony. if Nancy was alive i would just explode"
        />
         <Post
          date="March 4, 2018"
          content="hi i'm back and if you like nancy Drew i have some request: bad day for ballet,the Secret of red gate farm,the lost locket."
        />

         <Post
          date="March 17, 2018"
          content="i just read a few pages of the Secret of shadow ranch right now there ging on a plane well nancy wants to. But Bess and George can't because they say their uncle Ted says it's too dangerous so they go to a sandwich shop nearby. And Nancy looks astonished."
        />
      </div>
    );
  }
}

export default App;
