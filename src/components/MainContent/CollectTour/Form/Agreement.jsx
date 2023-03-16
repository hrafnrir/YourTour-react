import s from "./Agreement.module.scss";

const Agreement = (props) => {
  return (
    <div className={s.container}>
      <input
        className={s.checkbox}
        checked={props.agreement}
        onChange={(e) => props.onAgreementChange(e.target)}
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
        <a className={s.terms__link} href={props.licenseLink}>
          Лицензионного договора
        </a>
      </span>
    </div>
  );
};

export default Agreement;
