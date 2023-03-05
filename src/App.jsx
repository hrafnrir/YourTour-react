import React, { Fragment } from 'react';
import Header from './components/Header/Header.jsx';
import MainContent from './components/MainContent/MainContent.jsx';
import CallToAction from './components/CallToAction/CallToAction.jsx';
import Footer from './components/Footer/Footer.jsx';
import styles from './App.module.scss';

const App = () => {
    return (
        <>
            <Header />
            <MainContent />
            <CallToAction />
            <Footer />
        </>
    )
}

export default App;