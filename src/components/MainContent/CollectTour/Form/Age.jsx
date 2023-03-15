import styles from "./Age.module.scss";

const Age = (props) => {
  const check = props.age === "yes" ? true : false;

  return (
    <div className={styles.container}>
      <div className={styles.label}>Вам есть 18 лет?</div>
      <input
        className={styles.radio}
        checked={check}
        onChange={(e) => props.onAgeChange(e.target)}
        type="radio"
        name="age"
        value="yes"
        id="radio-yes-field"
        required
      />
      <label className={styles.radioLabel} htmlFor="radio-yes-field">
        Да
      </label>
      <input
        className={styles.radio}
        checked={!check}
        onChange={(e) => props.onAgeChange(e.target)}
        type="radio"
        name="age"
        value="no"
        id="radio-no-field"
      />
      <label className={styles.radioLabel} htmlFor="radio-no-field">
        Нет
      </label>
    </div>
  );
};

export default Age;
