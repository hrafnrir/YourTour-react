import s from "./TourItemElement.module.scss";

const TourItemElement = (props) => {
  return (
    <article className={s.item + " " + s["item_" + props.num]}>
      <h3 className={s.heading}>{props.heading}</h3>
      <p className={s.price}>{props.price}</p>
      <a className={s.btn} href={props.link}>
        <span className={s.btnContent}>Подробнее</span>
      </a>
    </article>
  );
};

export default TourItemElement;
