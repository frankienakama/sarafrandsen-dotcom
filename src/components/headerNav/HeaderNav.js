import React, { Component } from 'react';
import classNames from "classnames";
import PropTypes from 'prop-types';
import {
    NavLink
} from "react-router-dom";
import styles from "./HeaderNav.css";

class HeaderNav extends Component {
    render() {
        const {
            copy,
            linkTo
        } = this.props;

        const classes = classNames(
            {
                [styles.currentPage]: window.location.href.includes(linkTo)
            }
        )

        return (
            <NavLink to={linkTo} className={classes}>
                <span>
                    {copy}
                </span>
            </NavLink>
        )
    }
}

HeaderNav.propTypes = {
    copy: PropTypes.string,
    linkTo: PropTypes.string
}

export default HeaderNav;