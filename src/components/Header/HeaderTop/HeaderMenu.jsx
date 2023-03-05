import React from 'react';
import MenuItemElement from './MenuItemElement.jsx';
import styles from './HeaderMenu.module.scss';

const menuItems = [
    { value: 'Туры', link: '#' },
    { value: 'Создать тур', link: '#' },
    { value: 'Отзывы', link: '#' },
    { value: 'Истории', link: '#' }
];

const HeaderMenu = (props) => {
    const menuItemsElements = menuItems.map((item, index) =>
        <MenuItemElement key={index.toString()} value={item.value} link={item.link} headerClass={props.headerClass}/>
    );

    return (
        <nav className={styles.menu}>
            <ul className={styles.list}>
                {menuItemsElements}
            </ul>
        </nav>
    )
}

export default HeaderMenu;