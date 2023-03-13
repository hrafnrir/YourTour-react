import styles from "./CallToAction.module.scss";

const CallToAction = (props) => {
  return (
    <aside className={styles.mainWrapper}>
      <div className={styles.container}>
        <img
          className={styles.img}
          src={props.data.img.photo}
          alt={props.data.img.alt}
        />
        <div>
          <h3 className={styles.heading}>{props.data.heading}</h3>
          <p className={styles.description}>
            {"Напиши на почту и узнай подробности на "}
            <a className={styles.link} href={props.data.email.link}>
              {props.data.email.email}
            </a>
          </p>
        </div>
      </div>
    </aside>
  );
};

export default CallToAction;
