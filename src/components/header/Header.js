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

        return (
            <section className={styles}>
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
                        <HeaderNav
                            linkTo={"/cosplay"}
                            copy={this.state.isActive ? copy.comingSoon : copy.cosplay}
                        />
                    </li>
                    <li
                        className={styles.rightNav}
                    >
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