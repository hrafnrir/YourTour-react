import InputMask from "react-input-mask";
import styles from "./Fields.module.scss";

const Fields = (props) => {
  const phoneMask = "+ 7 (999) 999 99 99";
  const dateMask = "99.99.9999";

  const optionsElements = props.options.map((item, index) => (
    <option key={index.toString()} className={styles.option} value={item.value}>
      {item.name}
    </option>
  ));

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="name-field">
          Имя
        </label>
        <input
          className={styles.field}
          value={props.name}
          onChange={(e) => props.onFieldChange(e.target)}
          type="text"
          name="name"
          id="name-field"
          placeholder="Введите Ваше имя"
          required
        />
      </div>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="trip-field">
          Направление
        </label>
        <select
          className={styles.field + " " + styles.select}
          value={props.trip}
          onChange={(e) => props.onFieldChange(e.target)}
          name="trip"
          id="trip-field"
          required
        >
          <option className={styles.option} value="" hidden disabled>
            Куда хотите ехать
          </option>
          {optionsElements}
        </select>
      </div>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="email-field">
          Email
        </label>
        <input
          className={styles.field}
          value={props.email}
          onChange={(e) => props.onFieldChange(e.target)}
          type="email"
          name="email"
          id="email-field"
          placeholder="example@mail.com"
          required
        />
      </div>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="phone-field">
          Телефон
        </label>
        <InputMask
          className={styles.field}
          value={props.phone}
          onChange={(e) => props.onFieldChange(e.target)}
          mask={phoneMask}
          maskChar=""
          type="tel"
          name="phone"
          id="phone-field"
          placeholder="+ 7 ( _ _ _ ) _ _ _  _ _  _ _"
          required
        />
      </div>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="date-from-field">
          Дата от
        </label>
        <InputMask
          className={styles.field + " " + styles.date}
          value={props.dateFrom}
          onChange={(e) => props.onFieldChange(e.target)}
          mask={dateMask}
          maskChar=""
          type="text"
          name="dateFrom"
          id="date-from-field"
          placeholder="ДД.ММ.ГГГГ"
          required
        />
      </div>
      <div className={styles.container}>
        <label className={styles.label} htmlFor="date-before-field">
          Дата до
        </label>
        <InputMask
          className={styles.field + " " + styles.date}
          value={props.dateBefore}
          onChange={(e) => props.onFieldChange(e.target)}
          mask={dateMask}
          maskChar=""
          type="text"
          name="dateBefore"
          id="date-before-field"
          placeholder="ДД.ММ.ГГГГ"
          required
        />
      </div>
      <div className={styles.commentContainer + " " + styles.container}>
        <label className={styles.label} htmlFor="comment-field">
          Комментарий
        </label>
        <textarea
          className={styles.field + " " + styles.comment}
          value={props.comment}
          onChange={(e) => props.onFieldChange(e.target)}
          name="comment"
          id="comment-field"
        ></textarea>
      </div>
    </div>
  );
};

export default Fields;
