import s from "./MenuItemElement.module.scss";

const MenuItemElement = ({ value, link, num }) => {
  const linkClass = !num ? s.link + " " + s.link_selected : s.link;
  return (
    <li className={s.item}>
      <a className={linkClass} href={link}>
        {value}
      </a>
    </li>
  );
};

export default MenuItemElement;
