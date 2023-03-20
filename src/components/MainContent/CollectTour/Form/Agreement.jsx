import s from "./Agreement.module.scss";

const Agreement = ({ licenseLink, agreement, onAgreementChange }) => {
  return (
    <div className={s.container}>
      <input
        className={s.checkbox}
        checked={agreement}
        onChange={(e) => onAgreementChange(e.target)}
        type="checkbox"
        name="agreement"
        id="agreement-field"
        required
      />
      <label className={s.label} htmlFor="agreement-field">
        {""}
      </label>
      <span className={s.terms}>
        {"Нажимая кнопку, я принимаю условия "}
        <a className={s.terms__link} href={licenseLink}>
          Лицензионного договора
        </a>
      </span>
    </div>
  );
};

export default Agreement;
