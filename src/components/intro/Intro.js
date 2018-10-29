import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Intro.css';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
    }
  }

  handleMouseEnter = () => {
    this.setState({
      isHovering: true
    });
  };

  handleMouseLeave = () => {
    this.setState({
      isHovering: false
    });
  };

  render() {
    const { copyA, copyB, introSection } = this.props;
    const { isHovering } = this.state;

    const sectionClasses = classNames(
      styles.section,
      {
        [styles.top]: introSection==="top",
        [styles.mid]: introSection==="mid",
        [styles.bottom]: introSection==="bottom",
        [styles.alternate]: isHovering
      }
    );

    const copy = isHovering ? copyB : copyA;

    return (
      <section
        className={sectionClasses}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        introSection={introSection}
      >
        <span>
          {copy}
        </span>
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
