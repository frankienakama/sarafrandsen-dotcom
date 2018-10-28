import React, {Component} from 'react';
import Content from './components/content/Content';
import Intro from './components/intro/Intro';
import styles from './App.css';
import intro from './components/intro/intro.json';

class App extends Component {
  render() {
    return (
      <section className={styles}>
        <Intro copyA={intro.top.A} copyB={intro.top.B} />
        <Content />
      </section>
    );
  }
}

export default App;
