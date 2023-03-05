import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import styles from './Fields.module.scss';

const options = [ 
    { value: 'mountains-trip', name: 'Путешествие в горы' }, 
    { value: 'bike-trip', name: 'Велопрогулка' },
    { value: 'rafting-trip', name: 'Сплав' }
]

const phoneMask = '+ 7 (999) 999 99 99';
const dateMask = '99.99.9999';

export default class Fields extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFieldChange(event.target);
    }

    render() {
        const optionsElements = options.map((item, index) => 
            <option key={index.toString()} 
                    className={styles.option} 
                    value={item.value}>{item.name}</option>);

        return (
            <div className={styles.mainWrapper}>
                <div className={styles.container}>
                    <label className={styles.label} htmlFor='name-field'>Имя</label>
                    <input className={styles.field} 
                           value={this.props.name} 
                           onChange={this.handleChange} 
                           type='text' 
                           name='name' 
                           id='name-field' 
                           placeholder='Введите Ваше имя' 
                           required />
                </div>
                <div className={styles.container}>
                    <label className={styles.label} htmlFor='trip-field'>Направление</label>
                    <select className={styles.field + ' ' + styles.select}
                            value={this.props.trip} 
                            onChange={this.handleChange} 
                            data-type='select' 
                            name='trip' 
                            id='trip-field' 
                            required >
                        <option className={styles.option} value='' hidden disabled>Куда хотите ехать</option>
                        {optionsElements}
                    </select>
                </div>
                <div className={styles.container}>
                    <label className={styles.label} htmlFor='email-field'>Email</label>
                    <input className={styles.field} 
                           value={this.props.email} 
                           onChange={this.handleChange} 
                           type='email' 
                           name='email' 
                           id='email-field' 
                           placeholder='example@mail.com' 
                           required />
                </div>
                <div className={styles.container}>
                    <label className={styles.label} htmlFor='phone-field'>Телефон</label>
                    <InputMask className={styles.field} 
                           value={this.props.phone} 
                           onChange={this.handleChange} 
                           mask={phoneMask}
                           maskChar=''
                           type='tel' 
                           name='phone' 
                           id='phone-field' 
                           placeholder='+ 7 ( _ _ _ ) _ _ _  _ _  _ _' 
                           required />
                </div>
                <div className={styles.container}>
                    <label className={styles.label} htmlFor='date-from-field'>Дата от</label>
                    <InputMask className={styles.field + ' ' + styles.date} 
                           value={this.props.dateFrom} 
                           onChange={this.handleChange}
                           mask={dateMask}
                           maskChar=''
                           type='text' 
                           name='dateFrom' 
                           id='date-from-field' 
                           placeholder='ДД.ММ.ГГГГ' 
                           required />
                </div>
                <div className={styles.container}>
                    <label className={styles.label} htmlFor='date-before-field'>Дата до</label>
                    <InputMask className={styles.field + ' ' + styles.date} 
                           value={this.props.dateBefore} 
                           onChange={this.handleChange}
                           mask={dateMask}
                           maskChar=''
                           type='text' 
                           name='dateBefore' 
                           id='date-before-field' 
                           placeholder='ДД.ММ.ГГГГ' 
                           required />
                </div>
                <div className={styles.commentContainer + ' ' + styles.container}>
                    <label className={styles.label} htmlFor='comment-field'>Комментарий</label>
                    <textarea className={styles.field + ' ' + styles.comment} 
                              value={this.props.comment} 
                              onChange={this.handleChange} 
                              name='comment' 
                              id='comment-field'>
                    </textarea>
                </div>
            </div>
        )
    }
}