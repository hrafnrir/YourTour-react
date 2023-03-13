import styles from "./HeaderBottom.module.scss";

const HeaderBottom = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{props.data.heading}</h1>
      <p className={styles.description}>{props.data.description}</p>
      <div className={styles.containerBtn}>
        <a className={styles.btn} href="/#">
          Найти тур
        </a>
      </div>
    </div>
  );
};

export default HeaderBottom;
