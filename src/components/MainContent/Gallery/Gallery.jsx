import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader.jsx';
import PhotoGroup from './PhotoGroup.jsx';
import styles from './../SectionWrapper.module.scss';

const heading = 'Фотографии путешествий';
const description = 'Идейные соображения высшего порядка, а также рамки и место обучения кадров';

const Gallery = () => {
    return (
        <section className={styles.mainWrapper}>
            <div className={styles.container_large}>
                <SectionHeader heading={heading} description={description} menu={false} />
                <PhotoGroup />
            </div>
        </section>
    )
}

export default Gallery;