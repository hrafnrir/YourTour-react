import s from "./CallToAction.module.scss";

const CallToAction = ({
  data: {
    heading,
    img: { photo, alt },
    email: { email, link },
  },
}) => {
  return (
    <aside className={s.mainWrapper}>
      <div className={s.container}>
        <img className={s.img} src={photo} alt={alt} />
        <div>
          <h3 className={s.heading}>{heading}</h3>
          <p className={s.description}>
            {"Напиши на почту и узнай подробности на "}
            <a className={s.link} href={link}>
              {email}
            </a>
          </p>
        </div>
      </div>
    </aside>
  );
};

export default CallToAction;
