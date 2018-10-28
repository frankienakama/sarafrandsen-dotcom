import React, {Component} from 'react';
import Content from './components/content/Content';
import Intro from './components/intro/Intro';
import styles from './App.css';
import intro from './components/intro/intro.json';

class App extends Component {
  render() {
    return (
      <section className={styles}>
        <Intro copyA={intro.top.A} copyB={intro.top.B} section={"top"} />
        <Intro copyA={intro.mid.A} copyB={intro.mid.B} />
        <Intro copyA={intro.bottom.A} copyB={intro.bottom.B} />
        <Content />
      </section>
    );
  }
}

export default App;
