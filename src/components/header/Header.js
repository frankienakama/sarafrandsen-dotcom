import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import HeaderNav from "../headerNav/HeaderNav";
import copy from "./header.json";
import styles from "./Header.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    render() {
        const {
            currentPage
        } = this.props;

        const handleComingSoonMouseEnter = event => {
            event.preventDefault();
            this.setState({ isActive: true });
        }

        const handleComingSoonMouseLeave = event => {
            event.preventDefault();
            this.setState({ isActive: false });
        }

        const classes = classNames(
            {
                [styles.comingSoon]: this.state.isActive
            }
        )

        return (
            <section className={classes}>
                <ul>
                    <li>
                        <HeaderNav
                            linkTo={"/home"}
                            copy={copy.home}
                            currentPage={currentPage}
                        />
                    </li>
                    <li>
                        <HeaderNav
                            linkTo={"/professional"}
                            copy={copy.professional}
                            currentPage={currentPage}
                        />
                    </li>
                    <li>
                        <HeaderNav
                            linkTo={"/personal"}
                            copy={copy.personal}
                            currentPage={currentPage}
                        />
                    </li>
                    <li
                        onMouseEnter={handleComingSoonMouseEnter}
                        onMouseLeave={handleComingSoonMouseLeave}
                    >
                        <span>
                            {this.state.isActive ? copy.comingSoon : copy.cosplay}
                        </span>
                        {/* TODO:
                        <HeaderNav
                            linkTo={"/cosplay"}
                            copy={copy.cosplay}
                            currentPage={currentPage}
                        /> */}
                    </li>
                </ul>
            </section>
        )
    }
}

Header.propTypes = {
    currentPage: PropTypes.string
}

export default Header;