import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import StoryGroup from './StoryGroup.jsx';
import styles from './../SectionWrapper.module.scss';

const heading = 'Истории путешествий';
const description = 'Идейные соображения высшего порядка, а также рамки и место обучения кадров';

const Story = () => {
    return (
        <section className={styles.mainWrapper}>
            <div className={styles.container_medium}>
                <SectionHeader heading={heading} description={description} menu={false} />
                <StoryGroup />
            </div>
        </section>
    )
}

export default Story;