import React, { Component } from 'react';
import {
    NavLink
} from "react-router-dom";
import Project from '../project/Project';
import project from '../project/Project.json';

class Resume extends Component {
    render() {
        const twitter = project.twitter;

        return (<div>
            <NavLink to="/">
            "this is a header"
            </NavLink>
            <Project title={twitter.title} description={twitter.description} url={twitter.url} />
            </div>
        )
    }
}

export default Resume;