import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import classNames from 'classnames';
import styles from './IntroNav.css';

class IntroNav extends Component {
  render() {
    const { copyA, copyB, introSection, linkTo } = this.props;

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
        <div className={styles.hover}>
          {copyA}
          <span className={styles.b}>
            <Link to={linkTo}>{copyB}</Link>
          </span>
        </div>
      </section>
    )
  }
}

IntroNav.propTypes = {
  copyA: PropTypes.string.isRequired,
  copyB: PropTypes.string.isRequired,
  introSection: PropTypes.oneOf(["top", "mid", "bottom"]),
  linkTo: PropTypes.string
};

IntroNav.defaultProps = {
    linkTo: "/"
}

export default IntroNav;
