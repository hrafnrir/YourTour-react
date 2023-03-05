import React from 'react';
import ReviewItemElement from './ReviewItemElement.jsx';
import * as Images from './Images.js';
import styles from './ReviewGroup.module.scss';

const reviewItems = [
    { name: 'Мария', tour: 'Тур: Вдали от дома', review: 'Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития.', photo: Images.img1 },
    { name: 'Павел', tour: 'Тур: Путешествие в горы', review: 'Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития.', photo: Images.img2 }
];

const ReviewGroup = () => {
    const reviewItemsElements = reviewItems.map((item, index) =>
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