import cn from "classnames";
import HeaderLogo from "./HeaderLogo.jsx";
import HeaderMenu from "./HeaderMenu.jsx";
import s from "./HeaderTop.module.scss";

const HeaderTop = ({ data: { tel, menuItems }, headerType, sliderDown }) => {
  const phone = tel;
  const phoneHref = `tel:${phone}`;
  const correctPhoneNumber = phone
    .toString()
    .replace(/(8)(\d{3})(\d{3})(\d{2})(\d{2})/g, "+7 $2 $3 $4 $5");

  const isHeaderFixed = headerType === "fixed";
  const stickyHeaderClass = cn({
    [s.container_fixedHeader]: isHeaderFixed,
    [s.container_slideDown]: isHeaderFixed && sliderDown,
    [s.container_slideUp]: isHeaderFixed && !sliderDown,
  });

  const phoneClass = cn(s.phone, {
    [s.phone_fixedHeader]: isHeaderFixed,
    [s.phone_unfixedHeader]: !isHeaderFixed,
  });

  return (
    <div className={stickyHeaderClass}>
      <div className={s.container}>
        <HeaderLogo isHeaderFixed={isHeaderFixed} />
        <HeaderMenu menuItems={menuItems} isHeaderFixed={isHeaderFixed} />
        <a className={phoneClass} href={phoneHref}>
          {correctPhoneNumber}
        </a>
      </div>
    </div>
  );
};

export default HeaderTop;
