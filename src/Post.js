import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  render() {
    return (
      <div className="Post">
        <h2>{this.props.date}</h2>
        <p className="Post-intro">
          {this.props.content}
        </p>
      </div>
    );
  }
}

export default Post;
