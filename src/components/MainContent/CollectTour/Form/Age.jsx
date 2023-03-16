import s from "./Age.module.scss";

const Age = (props) => {
  const check = props.age === "yes" ? true : false;

  return (
    <div className={s.container}>
      <div className={s.label}>Вам есть 18 лет?</div>
      <input
        className={s.radio}
        checked={check}
        onChange={(e) => props.onAgeChange(e.target)}
        type="radio"
        name="age"
        value="yes"
        id="radio-yes-field"
        required
      />
      <label className={s.radioLabel} htmlFor="radio-yes-field">
        Да
      </label>
      <input
        className={s.radio}
        checked={!check}
        onChange={(e) => props.onAgeChange(e.target)}
        type="radio"
        name="age"
        value="no"
        id="radio-no-field"
      />
      <label className={s.radioLabel} htmlFor="radio-no-field">
        Нет
      </label>
    </div>
  );
};

export default Age;
