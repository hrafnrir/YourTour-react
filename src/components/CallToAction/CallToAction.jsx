import s from "./CallToAction.module.scss";

const CallToAction = (props) => {
  return (
    <aside className={s.mainWrapper}>
      <div className={s.container}>
        <img
          className={s.img}
          src={props.data.img.photo}
          alt={props.data.img.alt}
        />
        <div>
          <h3 className={s.heading}>{props.data.heading}</h3>
          <p className={s.description}>
            {"Напиши на почту и узнай подробности на "}
            <a className={s.link} href={props.data.email.link}>
              {props.data.email.email}
            </a>
          </p>
        </div>
      </div>
    </aside>
  );
};

export default CallToAction;
