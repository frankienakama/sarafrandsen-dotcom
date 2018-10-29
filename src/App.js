import React, {Component} from 'react';
import {
  Route
} from "react-router-dom";
import Intro from './components/intro/Intro';
import Resume from './components/resume/Resume';

class App extends Component {
  render() {
    return (
      <main>
        <Route exact path="/" component={Intro} />
        <Route path="/content" component={Resume} />
      </main>
    );
  }
}

export default App;
