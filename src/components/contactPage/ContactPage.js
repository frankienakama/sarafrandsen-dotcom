import React, { Component } from 'react';
import Header from "../header/Header";
import Project from '../project/Project';
import copy from "./contact.json";

class ContactPage extends Component {
    render() {

        return (
            <section>
                <Header currentPage={"contact"} />
                <div>
                    <Project
                         title={copy.email.title}
                         description={copy.email.description}
                         url={copy.email.url}
                         img={copy.email.img}
                         imgAlt={copy.email.imgAlt}
                    />
                </div>
            </section>
        )
    }
}

export default ContactPage;