import React, {Component} from 'react';
import {
  Link
} from "react-router-dom";
import IntroNav from '../introNav/IntroNav';
import styles from '../introNav/IntroNav.css';
import intro from './intro.json';

class Intro extends Component {
  render() {
    return (
      <main className={styles.main}>
          <section>
            <div>
              <Link to="/content">
                <IntroNav copyA={intro.top.A} copyB={intro.top.B} introSection={"top"} />
              </Link>

                <IntroNav copyA={intro.mid.A} copyB={intro.mid.B} introSection={"mid"} />


                <IntroNav copyA={intro.bottom.A} copyB={intro.bottom.B} introSection={"bottom"} />

            </div>
          </section>
        <footer className={styles.footer} />
      </main>
    );
  }
}

export default Intro;
