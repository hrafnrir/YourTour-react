import React from 'react';
import HeaderLogo from './HeaderLogo.jsx';
import HeaderMenu from './HeaderMenu.jsx';
import styles from './HeaderTop.module.scss';

const phoneNumber = 89999999999;

const HeaderTop = (props) => {
    const phoneHref = 'tel:' + phoneNumber;
    const correctPhoneNumber = phoneNumber.toString().replace(/(8)(\d{3})(\d{3})(\d{2})(\d{2})/g, '+7 $2 $3 $4 $5');

    const headerClass = props.headerType === 'fixed' ? 'fixedHeader' : 'unfixedHeader';
    const stickyHeaderClass = props.headerType === 'fixed' ? styles['container_fixedHeader'] + ' ' + styles['container_' + props.slider] : '';

    return (
        <div className={stickyHeaderClass}>
            <div className={styles.container}>
                <HeaderLogo headerClass={headerClass}/>
                <HeaderMenu headerClass={headerClass}/>
                <a className={styles.phone + ' ' + styles['phone_' + headerClass]} 
                   href={phoneHref}>{correctPhoneNumber}</a>
            </div>
        </div>
    )
}

export default HeaderTop;