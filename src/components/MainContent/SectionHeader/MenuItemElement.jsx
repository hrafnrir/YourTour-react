import cn from "classnames";
import s from "./MenuItemElement.module.scss";

const MenuItemElement = ({ value, link, num }) => {
  const linkClass = cn(s.link, { [s.link_selected]: !num });
  return (
    <li className={s.item}>
      <a className={linkClass} href={link}>
        {value}
      </a>
    </li>
  );
};

export default MenuItemElement;
