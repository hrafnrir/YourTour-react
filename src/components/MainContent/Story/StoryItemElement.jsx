import styles from "./StoryItemElement.module.scss";

const StoryItemElement = (props) => {
  return (
    <article className={styles.item + " " + styles["item_" + props.num]}>
      <h3 className={styles.heading}>{props.heading}</h3>
      <p className={styles.description}>{props.description}</p>

      {props.list && (
        <ul className={styles.list}>
          {props.list.map((item, index) => (
            <li key={index.toString()}>{item}</li>
          ))}
        </ul>
      )}

      <a className={styles.btn} href={props.link}>
        <span className={styles.btnContent}>Подробнее</span>
      </a>
      <div className={styles.socialNetworks}>
        {props.socialNetworks &&
          props.socialNetworks.map((item, index) => (
            <a
              className={styles.socialNetworks__item}
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
