import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Project extends Component {
  render() {
    const {
      title,
      description,
      url,
      img,
      imgAlt
    } = this.props;

    return (
      <section>
        <p>
          {title}
        </p>
        <p>
          {description}
        </p>
        <p>
          <a href={url}>
            <img src={img} alt={imgAlt}/>
          </a>
        </p>
      </section>
    )
  }
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string
}

Project.defaultProps = {
  url: "#"
}

export default Project;