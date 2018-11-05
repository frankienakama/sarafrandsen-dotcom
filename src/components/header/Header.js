import React, { Component } from 'react';
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

        const handleOnMouseEnter = event => {
            event.preventDefault();
            this.setState({
                isActive: true
            });
        }

        const handleOnMouseLeave = event => {
            event.preventDefault();
            this.setState({
                isActive: false
            });
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
                        />
                    </li>
                    <li>
                        <HeaderNav
                            linkTo={"/professional"}
                            copy={copy.professional}
                        />
                    </li>
                    <li>
                        <HeaderNav
                            linkTo={"/personal"}
                            copy={copy.personal}
                        />
                    </li>
                    <li
                        onMouseEnter={handleOnMouseEnter}
                        onMouseLeave={handleOnMouseLeave}
                    >
                        <span>
                            {this.state.isActive ? copy.comingSoon : copy.cosplay}
                        </span>
                        {/* TODO:
                        <HeaderNav
                            linkTo={"/cosplay"}
                            copy={copy.cosplay}
                        /> */}
                    </li>
                    <li>
                        <HeaderNav
                            linkTo={"/contact"}
                            copy={copy.contact}
                        />
                    </li>
                </ul>
            </section>
        )
    }
}

export default Header;