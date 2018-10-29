import React, {Component} from 'react';
import {
  Route
} from "react-router-dom";
import Intro from './components/intro/Intro';
import Content from './components/content/Content';

class App extends Component {
  render() {
    return (
      <main>
        <Route exact path="/" component={Intro} />
        <Route path="/content" component={Content} />
      </main>
    );
  }
}

export default App;
