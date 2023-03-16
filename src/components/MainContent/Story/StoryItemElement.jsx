import s from "./StoryItemElement.module.scss";

const StoryItemElement = (props) => {
  return (
    <article className={s.item + " " + s["item_" + props.num]}>
      <h3 className={s.heading}>{props.heading}</h3>
      <p className={s.description}>{props.description}</p>

      {props.list && (
        <ul className={s.list}>
          {props.list.map((item, index) => (
            <li key={index.toString()}>{item}</li>
          ))}
        </ul>
      )}

      <a className={s.btn} href={props.link}>
        <span className={s.btnContent}>Подробнее</span>
      </a>
      <div className={s.socialNetworks}>
        {props.socialNetworks &&
          props.socialNetworks.map((item, index) => (
            <a
              className={s.socialNetworks__item}
              key={index.toString()}
              href={item.link}
            >
              {item.name}
            </a>
          ))}
      </div>
    </article>
  );
};

export default StoryItemElement;
