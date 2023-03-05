import React from 'react';
import styles from './HeaderLogo.module.scss';

const logoLink = '#';

const HeaderLogo = (props) => {
    return (
        <div className={styles.logo}>
            <a className={styles.logo__img + ' ' + styles['logo__img_' + props.headerClass]} href={logoLink}></a>
        </div>
    )
}

export default HeaderLogo;