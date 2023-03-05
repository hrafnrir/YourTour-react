import React from 'react';
import SectionHeader from './../SectionHeader/SectionHeader.jsx';
import TourGroup from './TourGroup.jsx';
import styles from './../SectionWrapper.module.scss';

const sectionHeading = 'Выбери свой тур';

const menuItems = [
    { value: 'Популярные', link: '#' },
    { value: 'Авторские', link: '#' },
    { value: 'Походы', link: '#' },
    { value: 'Сплавы', link: '#' },
    { value: 'Велопрогулки', link: '#' },
];

const ChooseTour = () => {
    return (
        <section className={styles.mainWrapper}>
            <div className={styles.container_medium}>
                <SectionHeader heading={sectionHeading} description={false} menu={menuItems} />
                <TourGroup />
            </div>
        </section>
    )
}

export default ChooseTour;