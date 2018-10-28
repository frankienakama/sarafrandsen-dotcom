import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Intro.css';

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHoveringTop: false,
      // midActive: false,
      // bottomActive: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({
      isHoveringTop: true
      // {midActive: true},
      // {bottomActive: true}
    });
  };

  handleMouseLeave = () => {
    this.setState({
      isHoveringTop: false
    });
  };

  render() {

      const { copyA, copyB } = this.props;
      const { isHoveringTop } = this.state;

      const topClasses = classNames(
        styles.index,
        styles.top,
        {
          [styles.topAlternate]: isHoveringTop
        }
      );

      const copy = isHoveringTop ? copyB : copyA;


      return (
        <section>
          <div>
            <p
              className={topClasses}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            >
              {copy}
            </p>
          </div>
        </section>
      )
  }
}

Intro.propTypes = {
  topCopyA: PropTypes.string.isRequired,
  topCopyB: PropTypes.string.isRequired,
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
