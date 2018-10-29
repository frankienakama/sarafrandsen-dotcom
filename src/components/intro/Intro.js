import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Intro.css';

class Intro extends Component {
  render() {
    const { copyA, copyB, introSection } = this.props;

    const sectionClasses = classNames(
      styles.section,
      {
        [styles.top]: introSection==="top",
        [styles.mid]: introSection==="mid",
        [styles.bottom]: introSection==="bottom"
      }
    );

    return (
      <section
        className={sectionClasses}
      >
        <span>
          {copyA}
        </span>
        <div className={styles.b}>
          <span className>
            {copyB}
          </span>
        </div>
      </section>
    )
  }
}

Intro.propTypes = {
  copyA: PropTypes.string.isRequired,
  copyB: PropTypes.string.isRequired,
  introSection: PropTypes.oneOf(["top", "mid", "bottom"])
};

export default Intro;
