import styles from "./TourItemElement.module.scss";

const TourItemElement = (props) => {
  return (
    <article className={styles.item + " " + styles["item_" + props.num]}>
      <h3 className={styles.heading}>{props.heading}</h3>
      <p className={styles.price}>{props.price}</p>
      <a className={styles.btn} href={props.link}>
        <span className={styles.btnContent}>Подробнее</span>
      </a>
    </article>
  );
};

export default TourItemElement;
