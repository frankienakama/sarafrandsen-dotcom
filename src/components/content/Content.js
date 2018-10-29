import React, { Component } from 'react';
import {
    NavLink
} from "react-router-dom";
import Example from '../example/Example';
import example from '../example/example.json';

class Content extends Component {
    render() {
        const twitter = example.twitter;

        return (<div>
            <NavLink to="/">
            "this is a header"
            </NavLink>
            <Example title={twitter.title} description={twitter.description} url={twitter.url} />
            </div>
        )
    }
}

export default Content;