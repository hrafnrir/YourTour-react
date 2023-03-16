import HeaderLogo from "./HeaderLogo.jsx";
import HeaderMenu from "./HeaderMenu.jsx";
import s from "./HeaderTop.module.scss";

const HeaderTop = ({ data: { tel, menuItems }, headerType, sliderDown }) => {
  const phone = tel;
  const phoneHref = "tel:" + phone;
  const correctPhoneNumber = phone
    .toString()
    .replace(/(8)(\d{3})(\d{3})(\d{2})(\d{2})/g, "+7 $2 $3 $4 $5");

  const headerClass = headerType === "fixed" ? "fixedHeader" : "unfixedHeader";
  const stickyHeaderClass =
    headerType === "fixed"
      ? s["container_fixedHeader"] +
        " " +
        s["container_" + (sliderDown ? "slideDown" : "slideUp")]
      : "";

  return (
    <div className={stickyHeaderClass}>
      <div className={s.container}>
        <HeaderLogo headerClass={headerClass} />
        <HeaderMenu menuItems={menuItems} headerClass={headerClass} />
        <a
          className={s.phone + " " + s["phone_" + headerClass]}
          href={phoneHref}
        >
          {correctPhoneNumber}
        </a>
      </div>
    </div>
  );
};

export default HeaderTop;
