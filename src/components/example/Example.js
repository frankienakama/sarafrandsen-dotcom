import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Example extends Component {
  render() {
    const {
      title,
      description,
      url
    } = this.props;

    return (
      <section>
        <p>
          {title}
        </p>
        <p>
          {description}
        </p>
        <a href={url}>
          {url}
        </a>
      </section>
    )
  }
}

Example.propTypes = {
  title: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string
}

export default Example;