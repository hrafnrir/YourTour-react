import React from 'react';
import ReviewItemElement from './ReviewItemElement.jsx';
import * as Images from './Images.js';
import styles from './ReviewGroup.module.scss';

const ReviewGroup = (props) => {
    const reviewItemsElements = props.reviewItems.map((item, index) =>
        <ReviewItemElement key={index.toString()} 
                           name={item.name} 
                           tour={item.tour} 
                           review={item.review} 
                           photo={item.photo} />
    );

    return (
        <div className={styles.mainWrapper}>
            {reviewItemsElements}
        </div>
    )
}

export default ReviewGroup;