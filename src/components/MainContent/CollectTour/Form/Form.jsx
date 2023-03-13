import { useState } from "react";
import Fields from "./Fields.jsx";
import Age from "./Age.jsx";
import Agreement from "./Agreement.jsx";
import styles from "./Form.module.scss";

const Form = (props) => {
  const [name, setName] = useState("");
  const [trip, setTrip] = useState({ value: "" });
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateBefore, setDateBefore] = useState("");
  const [comment, setComment] = useState("");
  const [age, setAge] = useState("yes");
  const [agreement, setAgreement] = useState(false);

  const handleChange = (element) => {
    const name = element.name;

    switch (name) {
      case "name":
        setName(element.value);
        break;
      case "trip":
        setTrip({ value: element.value });
        break;
      case "email":
        setEmail(element.value);
        break;
      case "phone":
        setPhone(element.value);
        break;
      case "dateFrom":
        setDateFrom(element.value);
        break;
      case "dateBefore":
        setDateBefore(element.value);
        break;
      case "comment":
        setComment(element.value);
        break;
      case "age":
        setAge(element.value);
        break;
      case "agreement":
        setAgreement(element.checked);
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleReset = (event) => {
    event.preventDefault();
    setName("");
    setTrip({ value: "" });
    setEmail("");
    setPhone("");
    setDateFrom("");
    setDateBefore("");
    setComment("");
    setAge("yes");
    setAgreement(false);
  };

  return (
    <form
      className={styles.container}
      onSubmit={handleSubmit}
      onReset={handleReset}
      method="POST"
    >
      <Fields
        options={props.data.selectOptions}
        name={name}
        trip={trip.value}
        email={email}
        phone={phone}
        dateFrom={dateFrom}
        dateBefore={dateBefore}
        comment={comment}
        onFieldChange={handleChange}
      />
      <Age age={age} onAgeChange={handleChange} />
      <Agreement
        licenseLink={props.data.licenseAgreementLink}
        agreement={agreement}
        onAgreementChange={handleChange}
      />
      <input className={styles.btnSubmit} type="submit" value="Найти тур" />
      <input className={styles.btnReset} type="reset" value="Сбросить" />
    </form>
  );
};

export default Form;
