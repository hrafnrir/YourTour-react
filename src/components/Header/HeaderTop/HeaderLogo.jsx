import s from "./HeaderLogo.module.scss";

const HeaderLogo = ({ headerClass }) => {
  return (
    <div className={s.logo}>
      <a className={s.logo__img + " " + s["logo__img_" + headerClass]} href="/">
        {""}
      </a>
    </div>
  );
};

export default HeaderLogo;
