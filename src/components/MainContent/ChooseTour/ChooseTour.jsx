import React from 'react';
import SectionHeader from './../SectionHeader/SectionHeader.jsx';
import TourGroup from './TourGroup.jsx';
import styles from './../SectionWrapper.module.scss';

const ChooseTour = (props) => {
    return (
        <section className={styles.mainWrapper}>
            <div className={styles.container_medium}>
                <SectionHeader heading={props.data.heading} description={false} menu={props.data.menuItems} />
                <TourGroup tourItems={props.data.tourItems}/>
            </div>
        </section>
    )
}

export default ChooseTour;