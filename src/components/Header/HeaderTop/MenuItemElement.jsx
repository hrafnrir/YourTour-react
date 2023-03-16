import s from "./MenuItemElement.module.scss";

const MenuItemElement = ({ value, link, headerClass }) => {
  return (
    <li className={s.item}>
      <a className={s.link + " " + s["link_" + headerClass]} href={link}>
        {value}
      </a>
    </li>
  );
};

export default MenuItemElement;
