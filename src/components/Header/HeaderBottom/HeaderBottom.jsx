import React from 'react';
import styles from './HeaderBottom.module.scss';

const heading = 'Идеальные путешествия существуют';
const description = 'Идейные соображения высшего порядка, а также рамки и место обучения кадров';
const headerButton = { value: 'Найти тур', link: '#' };

const HeaderBottom = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>{heading}</h1>
            <p className={styles.description}>{description}</p>
            <div className={styles.containerBtn}>
                <a className={styles.btn} href={headerButton.link}>{headerButton.value}</a>
            </div>
        </div>
    )
}

export default HeaderBottom;