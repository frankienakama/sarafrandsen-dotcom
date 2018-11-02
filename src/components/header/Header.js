import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavHeader from "../navHeader/NavHeader";
import copy from "./header.json";

class Header extends Component {
    render() {
        const {
            currentPage
        } = this.props;

        return (
            <section>
                <ul>
                    <li>
                        <NavHeader
                            linkTo={"/home"}
                            copy={copy.home}
                            currentPage={currentPage}
                        />
                    </li>
                    <li>
                        <NavHeader
                            linkTo={"/professional"}
                            copy={copy.professional}
                            currentPage={currentPage}
                        />
                    </li>
                    <li>
                        <NavHeader
                            linkTo={"/personal"}
                            copy={copy.personal}
                            currentPage={currentPage}
                        />
                    </li>
                    <li>
                        <NavHeader
                            linkTo={"/cosplay"}
                            copy={copy.cosplay}
                            currentPage={currentPage}
                        />
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