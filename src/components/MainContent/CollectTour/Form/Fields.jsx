import cn from "classnames";
import InputMask from "react-input-mask";
import s from "./Fields.module.scss";

const Fields = ({
  options,
  name,
  trip,
  email,
  phone,
  dateFrom,
  dateBefore,
  comment,
  onFieldChange,
}) => {
  const phoneMask = "+ 7 (999) 999 99 99";
  const dateMask = "99.99.9999";

  const optionsElements = options.map((item, index) => (
    <option key={index} className={s.option} value={item.value}>
      {item.name}
    </option>
  ));

  return (
    <div className={s.mainWrapper}>
      <div className={s.container}>
        <label className={s.label} htmlFor="name-field">
          Имя
        </label>
        <input
          className={s.field}
          value={name}
          onChange={(e) => onFieldChange(e.target)}
          type="text"
          name="name"
          id="name-field"
          placeholder="Введите Ваше имя"
          required
        />
      </div>
      <div className={s.container}>
        <label className={s.label} htmlFor="trip-field">
          Направление
        </label>
        <select
          className={cn(s.field, s.select)}
          value={trip}
          onChange={(e) => onFieldChange(e.target)}
          name="trip"
          id="trip-field"
          required
        >
          <option className={s.option} value="" hidden disabled>
            Куда хотите ехать
          </option>
          {optionsElements}
        </select>
      </div>
      <div className={s.container}>
        <label className={s.label} htmlFor="email-field">
          Email
        </label>
        <input
          className={s.field}
          value={email}
          onChange={(e) => onFieldChange(e.target)}
          type="email"
          name="email"
          id="email-field"
          placeholder="example@mail.com"
          required
        />
      </div>
      <div className={s.container}>
        <label className={s.label} htmlFor="phone-field">
          Телефон
        </label>
        <InputMask
          className={s.field}
          value={phone}
          onChange={(e) => onFieldChange(e.target)}
          mask={phoneMask}
          maskChar=""
          type="tel"
          name="phone"
          id="phone-field"
          placeholder="+ 7 ( _ _ _ ) _ _ _  _ _  _ _"
          required
        />
      </div>
      <div className={s.container}>
        <label className={s.label} htmlFor="date-from-field">
          Дата от
        </label>
        <InputMask
          className={cn(s.field, s.date)}
          value={dateFrom}
          onChange={(e) => onFieldChange(e.target)}
          mask={dateMask}
          maskChar=""
          type="text"
          name="dateFrom"
          id="date-from-field"
          placeholder="ДД.ММ.ГГГГ"
          required
        />
      </div>
      <div className={s.container}>
        <label className={s.label} htmlFor="date-before-field">
          Дата до
        </label>
        <InputMask
          className={cn(s.field, s.date)}
          value={dateBefore}
          onChange={(e) => onFieldChange(e.target)}
          mask={dateMask}
          maskChar=""
          type="text"
          name="dateBefore"
          id="date-before-field"
          placeholder="ДД.ММ.ГГГГ"
          required
        />
      </div>
      <div className={cn(s.commentContainer, s.container)}>
        <label className={s.label} htmlFor="comment-field">
          Комментарий
        </label>
        <textarea
          className={cn(s.field, s.comment)}
          value={comment}
          onChange={(e) => onFieldChange(e.target)}
          name="comment"
          id="comment-field"
        ></textarea>
      </div>
    </div>
  );
};

export default Fields;
