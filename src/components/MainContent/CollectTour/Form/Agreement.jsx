import styles from "./Agreement.module.scss";

const Agreement = (props) => {
  const handleChange = (event) => {
    props.onAgreementChange(event.target);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        checked={props.agreement}
        onChange={handleChange}
        type="checkbox"
        name="agreement"
        id="agreement-field"
        required
      />
      <label className={styles.label} htmlFor="agreement-field">
        {""}
      </label>
      <span className={styles.terms}>
        {"Нажимая кнопку, я принимаю условия "}
        <a className={styles.terms__link} href={props.licenseLink}>
          Лицензионного договора
        </a>
      </span>
    </div>
  );
};

export default Agreement;
