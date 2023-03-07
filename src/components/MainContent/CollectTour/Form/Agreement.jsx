import React, { Component } from 'react';
import styles from './Agreement.module.scss';

export default class Agreement extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onAgreementChange(event.target);
    }

    render() {
        return (
            <div className={styles.container}>
                <input className={styles.checkbox} 
                       checked={this.props.agreement} 
                       onChange={this.handleChange} 
                       type='checkbox' 
                       name='agreement' 
                       id='agreement-field' 
                       required />
                <label className={styles.label} htmlFor='agreement-field'></label>
                <span className={styles.terms}>{'Нажимая кнопку, я принимаю условия '}
                    <a className={styles.terms__link} href={this.props.licenseLink}>Лицензионного договора</a>
                </span>
            </div>
        )
    }
}