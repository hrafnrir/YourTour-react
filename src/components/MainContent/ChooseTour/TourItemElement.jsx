import s from "./TourItemElement.module.scss";

const TourItemElement = ({ heading, price, link, num }) => {
  return (
    <article className={s.item + " " + s["item_" + num]}>
      <h3 className={s.heading}>{heading}</h3>
      <p className={s.price}>{price}</p>
      <a className={s.btn} href={link}>
        <span className={s.btnContent}>Подробнее</span>
      </a>
    </article>
  );
};

export default TourItemElement;
