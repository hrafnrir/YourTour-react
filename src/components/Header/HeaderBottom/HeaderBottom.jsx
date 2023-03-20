import s from "./HeaderBottom.module.scss";

const HeaderBottom = ({ data: { heading, description } }) => {
  return (
    <div className={s.container}>
      <h1 className={s.heading}>{heading}</h1>
      <p className={s.description}>{description}</p>
      <div className={s.containerBtn}>
        <a className={s.btn} href="/#">
          Найти тур
        </a>
      </div>
    </div>
  );
};

export default HeaderBottom;
