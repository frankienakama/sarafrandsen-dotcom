import React, { Component } from 'react';
import Header from "../header/Header";
import Project from '../project/Project';
import copy from "./cosplay.json";

class CosplayPage extends Component {
    render() {

        return (
            <section>
                <Header currentPage={"cosplay"} />
                <div>
                    <Project
                         title={copy.zelda.title}
                         description={copy.zelda.description}
                         url={copy.zelda.url}
                         img={copy.zelda.img}
                         imgAlt={copy.zelda.imgAlt}
                    />
                </div>
            </section>
        )
    }
}

export default CosplayPage;