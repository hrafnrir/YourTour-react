import React from 'react';
import styles from './MenuItemElement.module.scss';

const MenuItemElement = (props) => {
    const linkClass = !props.num ? styles.link + ' ' + styles.link_selected : styles.link;
    return (
        <li className={styles.item}>
            <a className={linkClass} href={props.link}>{props.value}</a>
        </li>
    )
}

export default MenuItemElement;