import React, { Component } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import Form from './Form/Form.jsx';
import styles from './../SectionWrapper.module.scss';

const heading = 'Собери свой тур';
const description = 'Идейные соображения высшего порядка, а также рамки и место обучения кадров';

const CollectTour = () => {
    return (
        <section className={styles.mainWrapper}>
            <div className={styles.container_medium}>
                <SectionHeader heading={heading} description={description} menu={false} />
                <Form />
            </div>
        </section>
    )
}

export default CollectTour;