import React, { Component } from 'react';
import Header from "../header/Header";
import Project from '../project/Project';
import copy from "./professional.json";

class ProfessionalPage extends Component {
    render() {

        return (
            <section>
                <Header />
                <div>
                    <Project
                         title={copy.giftFinder.title}
                         description={copy.giftFinder.description}
                         url={copy.giftFinder.url}
                         img={copy.giftFinder.img}
                         imgAlt={copy.giftFinder.imgAlt}
                    />
                </div>
            </section>
        )
    }
}

export default ProfessionalPage;