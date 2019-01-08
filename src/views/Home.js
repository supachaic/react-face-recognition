import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>BNK48 Facial Recognition App</h2>
        <li>
          <a href="/photo">Photo Input</a>
        </li>
        <li>
          <a href="/camera">Video Camera</a>
        </li>
      </div>
    );
  }
}
