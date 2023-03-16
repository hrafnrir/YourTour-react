import cn from "classnames";
import s from "./StoryItemElement.module.scss";

const StoryItemElement = ({
  heading,
  description,
  list,
  socialNetworks,
  link,
  num,
}) => {
  return (
    <article className={cn(s.item, s["item_" + num])}>
      <h3 className={s.heading}>{heading}</h3>
      <p className={s.description}>{description}</p>

      {list && (
        <ul className={s.list}>
          {list.map((item, index) => (
            <li key={index.toString()}>{item}</li>
          ))}
        </ul>
      )}

      <a className={s.btn} href={link}>
        <span className={s.btnContent}>Подробнее</span>
      </a>
      <div className={s.socialNetworks}>
        {socialNetworks &&
          socialNetworks.map((item, index) => (
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
