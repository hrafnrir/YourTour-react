import React from 'react';
import PhotoItemElement from './PhotoItemElement.jsx';
import * as Images from './Images.js';
import styles from './PhotoGroup.module.scss';

const photoItems = [
    { device: 'phone', photo: Images.img1, alt: 'Летящий пассажирский самолет над морем' },
    { device: 'desktop', photo: Images.img2, alt: 'Вид на кемпинг из палатки' },
    { device: 'tablet', photo: Images.img3, alt: 'Путешественник встречает закат' },
    { device: 'phone', photo: Images.img4, alt: 'Бескрайняя пустая дорога' },
    { device: 'phone', photo: Images.img5, alt: 'Путешественники встречают рассвет на скалах' },
    { device: 'tablet', photo: Images.img6, alt: 'Девушка смотрит бумажную карту в машине' },
    { device: 'desktop', photo: Images.img7, alt: 'Дорога по высокому мосту в лесной местности' },
    { device: 'phone', photo: Images.img8, alt: 'Кемпинг у водоема, путешествие на автомобиле' },
    { device: 'phone', photo: Images.img9, alt: 'Брусчатая дорога в переулке' },
    { device: 'phone', photo: Images.img10, alt: 'Вечерний уютный город' },
    { device: 'phone', photo: Images.img11, alt: 'Путешественник любуется красотой фьорда в солнечный летний день' },
    { device: 'tablet', photo: Images.img12, alt: 'Оживленная вечерняя улица' },
    { device: 'desktop', photo: Images.img13, alt: 'Девушка в купальнике сплавляется по озеру' }
];

const PhotoGroup = () => {
    const photoItemsElements = photoItems.map((item, index) =>
        <PhotoItemElement key={index.toString()} 
                          device={item.device} 
                          photo={item.photo} 
                          alt={item.alt} />
    );

    return (
        <div className={styles.mainWrapper}>
            {photoItemsElements}
        </div>
    )
}

export default PhotoGroup;