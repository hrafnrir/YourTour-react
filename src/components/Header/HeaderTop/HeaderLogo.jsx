import cn from "classnames";
import s from "./HeaderLogo.module.scss";

const HeaderLogo = ({ isHeaderFixed }) => {
  const logoClass = cn(s.logo__img, {
    [s.logo__img_fixedHeader]: isHeaderFixed,
    [s.logo__img_unfixedHeader]: !isHeaderFixed,
  });

  return (
    <div className={s.logo}>
      <a className={logoClass} href="/">
        {""}
      </a>
    </div>
  );
};

export default HeaderLogo;
