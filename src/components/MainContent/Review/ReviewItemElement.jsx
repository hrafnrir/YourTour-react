import styles from "./ReviewItemElement.module.scss";

const ReviewItemElement = (props) => {
  return (
    <article className={styles.item}>
      <p className={styles.text}>{props.review}</p>
      <div>
        <h3 className={styles.name}>{props.name}</h3>
        <span className={styles.tour}>{props.tour}</span>
      </div>
      <img
        className={styles.photo}
        src={props.photo}
        alt="Фото автора отзыва"
      />
    </article>
  );
};

export default ReviewItemElement;
