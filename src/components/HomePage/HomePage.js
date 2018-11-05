import React, { Component } from 'react';
import Header from "../header/Header";

class HomePage extends Component {
    render() {

        return (
            <section>
                <Header currentPage={"home"} />
                {/* Good place for CV */}
            </section>
        )
    }
}

export default HomePage;