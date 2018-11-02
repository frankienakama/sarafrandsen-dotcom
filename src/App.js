import React, { Component } from 'react';
import {
    Route
} from "react-router-dom";
import Intro from './components/intro/Intro';
import ProfessionalPage from './components/professionalPage/ProfessionalPage';

class App extends Component {
    render() {
        return (
            <main>
                <Route exact path="/" component={Intro} />
                <Route path="/professional" component={ProfessionalPage} />
            </main>
        );
    }
}

export default App;
