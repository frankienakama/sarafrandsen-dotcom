import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Example.css'

class Example extends Component {
  render() {
    const {
      title,
      description,
      url
    } = this.props;

    return (
      <section />
    )
  }
}

Example.PropTypes = {
  title: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string
}

export default Example;