import cn from "classnames";
import s from "./MenuItemElement.module.scss";

const MenuItemElement = ({ value, link, isHeaderFixed }) => {
  const linkClass = cn(s.link, {
    [s.link_fixedHeader]: isHeaderFixed,
    [s.link_unfixedHeader]: !isHeaderFixed,
  });

  return (
    <li className={s.item}>
      <a className={linkClass} href={link}>
        {value}
      </a>
    </li>
  );
};

export default MenuItemElement;
