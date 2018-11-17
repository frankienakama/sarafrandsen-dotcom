import React, { Component } from 'react';
import {
    Route
} from "react-router-dom";
import styles from './App.css';
import classNames from 'classnames';
import Intro from './components/intro/Intro';
import HomePage from './components/homePage/HomePage';
import ProfessionalPage from './components/professionalPage/ProfessionalPage';
import PersonalPage from './components/personalPage/PersonalPage';
import CosplayPage from './components/cosplayPage/CosplayPage';
import ContactPage from './components/contactPage/ContactPage';

class App extends Component {
    render() {
        const classes = classNames(
            styles.pageWidth
        );

        return (
            <main>
                <Route exact path="/" component={Intro} />
                <div className={classes}>
                    <Route path="/home" component={HomePage} />
                    <Route path="/professional" component={ProfessionalPage} />
                    <Route path="/personal" component={PersonalPage} />
                    <Route path="/cosplay" component={CosplayPage} />
                    <Route path="/contact" component={ContactPage} />
                </div>
            </main>
        );
    }
}

export default App;
