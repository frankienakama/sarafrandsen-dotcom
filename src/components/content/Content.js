import React, { Component } from 'react';
import Example from '../example/Example';
import example from '../example/example.json';

class Content extends Component {
    render() {
        const twitter = example.twitter;

        return (
            <Example title={twitter.title} description={twitter.description} url={twitter.url} />
        )
    }
}

export default Content;