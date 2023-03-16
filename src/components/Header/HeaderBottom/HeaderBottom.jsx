import s from "./HeaderBottom.module.scss";

const HeaderBottom = (props) => {
  return (
    <div className={s.container}>
      <h1 className={s.heading}>{props.data.heading}</h1>
      <p className={s.description}>{props.data.description}</p>
      <div className={s.containerBtn}>
        <a className={s.btn} href="/#">
          Найти тур
        </a>
      </div>
    </div>
  );
};

export default HeaderBottom;
