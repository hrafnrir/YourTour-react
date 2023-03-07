import React, { Fragment } from 'react';
import Header from './components/Header/Header.jsx';
import MainContent from './components/MainContent/MainContent.jsx';
import CallToAction from './components/CallToAction/CallToAction.jsx';
import Footer from './components/Footer/Footer.jsx';
import data from './storage/dataStore.js';
import styles from './App.module.scss';

const App = () => {
    return (
        <>
            <Header data={data.header}/>
            <MainContent data={data.mainContent}/>
            <CallToAction data={data.callToAction}/>
            <Footer data={data.footer}/>
        </>
    )
}

export default App;