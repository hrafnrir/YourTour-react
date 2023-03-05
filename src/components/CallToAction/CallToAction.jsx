import React from 'react';
import * as Images from './Images.js';
import styles from './CallToAction.module.scss';

const img = { photo: Images.img1, alt: 'Живописный вид на зеленые луга, лес, водоем и белеющие в далеке вершины гор' };
const heading = 'Пора в путешествие вместе с нами!';
const email = { name: 'yourtour@gmail.com', link: 'mailto:yourtour@gmail.com' };
const description = 'Напиши на почту и узнай подробности на ';

const CallToAction = () => {
	return (
		<aside className={styles.mainWrapper}>
			<div className={styles.container}>
				<img className={styles.img} src={img.photo} alt={img.alt} />
				<div>
					<h3 className={styles.heading}>{heading}</h3>
					<p className={styles.description}>{description}
						<a className={styles.link} href={email.link}>{email.name}</a>
					</p>
				</div>
			</div>
		</aside>
	)
}

export default CallToAction;