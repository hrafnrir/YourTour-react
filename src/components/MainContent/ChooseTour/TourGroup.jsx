import React from 'react';
import TourItemElement from './TourItemElement.jsx';
import styles from './TourGroup.module.scss';

const tourItems = [
    { heading: 'Путешетсвие в горы', price: 'от 80 000 руб.', link: '#' },
    { heading: 'Путешетсвие в горы', price: 'от 80 000 руб.', link: '#' },
    { heading: 'Путешетсвие в горы', price: 'от 80 000 руб.', link: '#' },
    { heading: 'Путешетсвие в горы', price: 'от 80 000 руб.', link: '#' },
    { heading: 'Путешетсвие в горы', price: 'от 80 000 руб.', link: '#' },
    { heading: 'Путешетсвие в горы', price: 'от 80 000 руб.', link: '#' }
];

const TourGroup = () => {
    const tourItemsElements = tourItems.map((item, index) =>
        <TourItemElement key={index.toString()} 
                         heading={item.heading} 
                         price={item.price} 
                         link={item.link} 
                         num={++index} />
    );

    return (
        <div className={styles.mainWrapper}>
            {tourItemsElements}
        </div>
    )
}

export default TourGroup;