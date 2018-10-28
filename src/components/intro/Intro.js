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
    const { copyA, copyB, section } = this.props;
    const { isHovering } = this.state;

    const classes = classNames(
      styles.index,
      {
        [styles.top]: this.section="top",
        [styles.mid]: this.section="mid",
        [styles.topAlternate]: [isHovering, this.section="top"],
        [styles.midAlternate]: [isHovering, this.section="mid"]
      }
    );

    const copy = isHovering ? copyB : copyA;

    return (
      <section>
        <div>
          <p
            className={classes}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            section
          >
            {copy}
          </p>
        </div>
      </section>
    )
  }
}

Intro.propTypes = {
  copyA: PropTypes.string.isRequired,
  copyB: PropTypes.string.isRequired,
  section: PropTypes.oneOf(["top", "mid", "bottom"])
};

export default Intro;


// <body>
//   <!-- MAIN ----------------------->
//   <!-- I'M  ----------------------->
//   <main class="berkshire-font index">
//     <a class="full" href="portfolio.html">
//       <div class="flex-display p1 div-height">
//         <p class="full-width center-text">
//           i'm
//         </p>
//         <div class="overlay pos-abs full-width">
//           <div class="text pos-abs">
//             portfolio
//           </div>
//         </div>
//       </div>
//     </a>
//     <!-- SARA ----------------------->
//     <a class="full-width" href="code-journal.html">
//       <div class="flex-display p2 div-height">
//         <p class="full-width center-text div">
//           sara
//         </p>
//         <div class="overlay pos-abs full-width">
//           <div class="text pos-abs">
//             diary
//           </div>
//         </div>
//       </div>
//     </a>
//     <!-- EFF  ----------------------->
//     <a class="full-width" href="about.html">
//       <div class="flex-display p3 div-height">
//         <p class="full-width center-text">
//           eff
//         </p>
//         <div class="overlay pos-abs full-width">
//           <div class="text pos-abs">
//             about
//           </div>
//         </div>
//       </div>
//     </a>
//   </main>
//   <!-- FOOTER --------------------->
//   <footer class="comfortaa-font center-text">
//     <p class="full-width">
//       &copy;2017 Sara Frandsen | Creative Commons License
//     </p>
//     <p class="full-width">
//       Feel free to <a href="about.html">contact me</a> with any questions about this webpage, specialty coffee, puppies, or bad haircuts
//     </p>
//   </footer>
// </body>
// </html>
