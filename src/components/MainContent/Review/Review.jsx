import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import ReviewGroup from './ReviewGroup.jsx';
import styles from './../SectionWrapper.module.scss';

const heading = 'Отзывы наших путешественников';
const description = 'Идейные соображения высшего порядка, а также рамки и место обучения кадров';

const Review = () => {
    return (
        <section className={styles.mainWrapper}>
            <div className={styles.container_medium}>
                <SectionHeader heading={heading} description={description} menu={false} />
                <ReviewGroup />
            </div>
        </section>
    )
}

export default Review;