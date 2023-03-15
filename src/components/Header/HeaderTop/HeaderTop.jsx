import HeaderLogo from "./HeaderLogo.jsx";
import HeaderMenu from "./HeaderMenu.jsx";
import styles from "./HeaderTop.module.scss";

const HeaderTop = (props) => {
  const tel = props.data.tel;
  const phoneHref = "tel:" + tel;
  const correctPhoneNumber = tel
    .toString()
    .replace(/(8)(\d{3})(\d{3})(\d{2})(\d{2})/g, "+7 $2 $3 $4 $5");

  const headerClass =
    props.headerType === "fixed" ? "fixedHeader" : "unfixedHeader";
  const stickyHeaderClass =
    props.headerType === "fixed"
      ? styles["container_fixedHeader"] +
        " " +
        styles["container_" + (props.sliderDown ? "slideDown" : "slideUp")]
      : "";

  return (
    <div className={stickyHeaderClass}>
      <div className={styles.container}>
        <HeaderLogo headerClass={headerClass} />
        <HeaderMenu
          menuItems={props.data.menuItems}
          headerClass={headerClass}
        />
        <a
          className={styles.phone + " " + styles["phone_" + headerClass]}
          href={phoneHref}
        >
          {correctPhoneNumber}
        </a>
      </div>
    </div>
  );
};

export default HeaderTop;
