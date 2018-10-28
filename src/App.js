import React, { Component } from 'react';
import Content from './components/content/Content';
import Intro from './components/intro/Intro';
import './App.css';

class App extends Component {
  render() {
    return (
      <section>
        <Intro />
        <Content />
      </section>
    );
  }
}

export default App;
