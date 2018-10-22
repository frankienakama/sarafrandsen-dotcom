import React, { Component } from 'react';
import Example from '../example/Example';
import copy from '../../text/examples.json';

class Content extends Component {
    render() {
        const twitter = copy.twitter;

        return (
            <Example title={twitter.title} description={twitter.description} url={twitter.url} />
        )
    }
}

export default Content;