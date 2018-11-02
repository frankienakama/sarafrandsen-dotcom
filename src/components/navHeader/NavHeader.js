import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import {
    NavLink
} from "react-router-dom";
import styles from "./NavHeader.css";

class NavHeader extends Component {
    render() {
        const {
            copy,
            currentPage,
            linkTo
        } = this.props;

        const classes = classNames(
            styles.navHeader,
            {
                [styles.highlight]: currentPage
            }
        );

        return (
            <NavLink to={linkTo} className={classes}>
                <span>
                    {copy}
                </span>
            </NavLink>
        )
    }
}

NavHeader.propTypes = {
    copy: PropTypes.string,
    currentPage: PropTypes.string,
    linkTo: PropTypes.string
}

export default NavHeader;