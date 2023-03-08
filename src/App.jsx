import React, { Fragment } from 'react';
import Header from './components/Header/Header.jsx';
import MainContent from './components/MainContent/MainContent.jsx';
import CallToAction from './components/CallToAction/CallToAction.jsx';
import Footer from './components/Footer/Footer.jsx';
import styles from './App.module.scss';

const App = (props) => {
    return (
        <>
            <Header data={props.data.header}/>
            <MainContent data={props.data.mainContent}/>
            <CallToAction data={props.data.callToAction}/>
            <Footer data={props.data.footer}/>
        </>
    )
}

export default App;