import React, { Component } from 'react';
import Header from "../header/Header";
import Project from '../project/Project';
import copy from "./personal.json";

class PersonalPage extends Component {
    render() {

        return (
            <section>
                <Header currentPage={"personal"} />
                <div>
                    <Project
                         title={copy.portfolio.title}
                         description={copy.portfolio.description}
                         url={copy.portfolio.url}
                         img={copy.portfolio.img}
                         imgAlt={copy.portfolio.imgAlt}
                    />
                </div>
            </section>
        )
    }
}

export default PersonalPage;