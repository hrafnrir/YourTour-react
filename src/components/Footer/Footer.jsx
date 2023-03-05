import React from 'react';
import styles from './Footer.module.scss';

const socialNetworks = [ 
    { name: 'instagram', link: '#', class: 'ig' },
    { name: 'facebook', link: '#', class: 'fb' },
    { name: 'vkontakte', link: '#', class: 'vk' }
];

const Footer = () => {
    const socialNetworksElements = socialNetworks.map((item, index) => 
        <a className={styles.socialNetworks__item + ' ' + styles['socialNetworks__item_' + item.class]} key={index.toString()} href={item.link}>
            <span className={styles.socialNetworks__name}>{item.name}</span>
        </a>);
    
    return (
        <footer className={styles.mainWrapper}>
    		<div className={styles.container}>
    			<p className={styles.text}>Наши социальные сети</p>
    			<div className={styles.socialNetworks}>
    				{socialNetworksElements}
    			</div>
    		</div>
    	</footer>
    )
}

export default Footer;