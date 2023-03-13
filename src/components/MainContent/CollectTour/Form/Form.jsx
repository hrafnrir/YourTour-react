import { Component } from "react";
import Fields from "./Fields.jsx";
import Age from "./Age.jsx";
import Agreement from "./Agreement.jsx";
import styles from "./Form.module.scss";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      trip: { value: "" },
      email: "",
      phone: "",
      dateFrom: "",
      dateBefore: "",
      comment: "",
      age: "yes",
      agreement: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(element) {
    const name = element.name;

    if (element.dataset.type === "select") {
      this.setState({ [name]: { value: element.value } });
    } else if (element.type === "checkbox") {
      this.setState({ [name]: element.checked });
    } else {
      this.setState({ [name]: element.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleReset(event) {
    event.preventDefault();
    this.setState({
      name: "",
      trip: { value: "" },
      email: "",
      phone: "",
      dateFrom: "",
      dateBefore: "",
      comment: "",
      age: "yes",
      agreement: false,
    });
  }

  render() {
    return (
      <form
        className={styles.container}
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}
        method="POST"
      >
        <Fields
          options={this.props.data.selectOptions}
          name={this.state.name}
          trip={this.state.trip.value}
          email={this.state.email}
          phone={this.state.phone}
          dateFrom={this.state.dateFrom}
          dateBefore={this.state.dateBefore}
          comment={this.state.comment}
          onFieldChange={this.handleChange}
        />
        <Age age={this.state.age} onAgeChange={this.handleChange} />
        <Agreement
          licenseLink={this.props.data.licenseAgreementLink}
          agreement={this.state.agreement}
          onAgreementChange={this.handleChange}
        />
        <input className={styles.btnSubmit} type="submit" value="Найти тур" />
        <input className={styles.btnReset} type="reset" value="Сбросить" />
      </form>
    );
  }
}
