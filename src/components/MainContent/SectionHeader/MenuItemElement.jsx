import s from "./MenuItemElement.module.scss";

const MenuItemElement = (props) => {
  const linkClass = !props.num ? s.link + " " + s.link_selected : s.link;
  return (
    <li className={s.item}>
      <a className={linkClass} href={props.link}>
        {props.value}
      </a>
    </li>
  );
};

export default MenuItemElement;
