import { useState } from "react";
import Fields from "./Fields.jsx";
import Age from "./Age.jsx";
import Agreement from "./Agreement.jsx";
import s from "./Form.module.scss";

const Form = (props) => {
  const [values, setValues] = useState(props.data.initialState);

  const handleChange = (element) => {
    const name = element.name;

    if (element.type === "checkbox") {
      setValues((prevState) => ({ ...prevState, [name]: element.checked }));
    } else {
      setValues((prevState) => ({ ...prevState, [name]: element.value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleReset = (event) => {
    event.preventDefault();
    setValues(props.data.initialState);
  };

  return (
    <form
      className={s.container}
      onSubmit={handleSubmit}
      onReset={handleReset}
      method="POST"
    >
      <Fields
        options={props.data.selectOptions}
        name={values.name}
        trip={values.trip}
        email={values.email}
        phone={values.phone}
        dateFrom={values.dateFrom}
        dateBefore={values.dateBefore}
        comment={values.comment}
        onFieldChange={handleChange}
      />
      <Age age={values.age} onAgeChange={handleChange} />
      <Agreement
        licenseLink={props.data.licenseAgreementLink}
        agreement={values.agreement}
        onAgreementChange={handleChange}
      />
      <input className={s.btnSubmit} type="submit" value="Найти тур" />
      <input className={s.btnReset} type="reset" value="Сбросить" />
    </form>
  );
};

export default Form;
