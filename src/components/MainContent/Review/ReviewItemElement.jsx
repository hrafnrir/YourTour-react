import s from "./ReviewItemElement.module.scss";

const ReviewItemElement = (props) => {
  return (
    <article className={s.item}>
      <p className={s.text}>{props.review}</p>
      <div>
        <h3 className={s.name}>{props.name}</h3>
        <span className={s.tour}>{props.tour}</span>
      </div>
      <img className={s.photo} src={props.photo} alt="Фото автора отзыва" />
    </article>
  );
};

export default ReviewItemElement;
