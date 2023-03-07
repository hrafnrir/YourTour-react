import React, { Component } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import Form from './Form/Form.jsx';
import styles from './../SectionWrapper.module.scss';

const CollectTour = (props) => {
    return (
        <section className={styles.mainWrapper}>
            <div className={styles.container_medium}>
                <SectionHeader heading={props.data.heading} description={props.data.description} menu={false} />
                <Form data={props.data.form}/>
            </div>
        </section>
    )
}

export default CollectTour;