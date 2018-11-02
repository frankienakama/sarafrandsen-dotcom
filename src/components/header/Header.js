import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderNav from "../headerNav/HeaderNav";
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
                    <li>
                        <HeaderNav
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