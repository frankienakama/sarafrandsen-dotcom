import React, {Component} from 'react';
import Content from './components/content/Content';
import Intro from './components/intro/Intro';
import styles from './App.css';
import intro from './components/intro/intro.json';

class App extends Component {
  render() {
    return (
      <div>
        <main className={styles.main}>
          <section>
            <Intro copyA={intro.top.A} copyB={intro.top.B} introSection={"top"} />
            <Intro copyA={intro.mid.A} copyB={intro.mid.B} introSection={"mid"} />
            <Intro copyA={intro.bottom.A} copyB={intro.bottom.B} introSection={"bottom"} />
          </section>
          {/* <section>
            <Content />
          </section> */}
        </main>
        <footer className={styles.footer} />
      </div>
    );
  }
}

export default App;
