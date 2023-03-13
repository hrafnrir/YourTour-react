import { Component } from "react";
import styles from "./Age.module.scss";

export default class Age extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onAgeChange(event.target);
  }

  render() {
    const check = this.props.age === "yes" ? true : false;

    return (
      <div className={styles.container}>
        <div className={styles.label}>Вам есть 18 лет?</div>
        <input
          className={styles.radio}
          checked={check}
          onChange={this.handleChange}
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
          onChange={this.handleChange}
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
  }
}
