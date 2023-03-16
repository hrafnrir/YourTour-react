import s from "./HeaderLogo.module.scss";

const HeaderLogo = (props) => {
  return (
    <div className={s.logo}>
      <a
        className={s.logo__img + " " + s["logo__img_" + props.headerClass]}
        href="/"
      >
        {""}
      </a>
    </div>
  );
};

export default HeaderLogo;
