import s from "./ReviewItemElement.module.scss";

const ReviewItemElement = ({ name, tour, review, photo }) => {
  return (
    <article className={s.item}>
      <p className={s.text}>{review}</p>
      <div>
        <h3 className={s.name}>{name}</h3>
        <span className={s.tour}>{tour}</span>
      </div>
      <img className={s.photo} src={photo} alt="Фото автора отзыва" />
    </article>
  );
};

export default ReviewItemElement;
