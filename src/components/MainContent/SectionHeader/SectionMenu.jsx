import React from 'react';
import MenuItemElement from './MenuItemElement.jsx';
import styles from './SectionMenu.module.scss';

const SectionMenu = (props) => {
    const menuItemsElements = props.menuItems.map((item, index) => 
        <MenuItemElement key={index.toString()} value={item.value} link={item.link} num={index}/>
    );
        return (
        <nav className={styles.menu}>
            <ul className={styles.list}>
                {menuItemsElements}
            </ul>
        </nav>
    )
}

export default SectionMenu;