import s from "./MenuItemElement.module.scss";

const MenuItemElement = (props) => {
  return (
    <li className={s.item}>
      <a
        className={s.link + " " + s["link_" + props.headerClass]}
        href={props.link}
      >
        {props.value}
      </a>
    </li>
  );
};

export default MenuItemElement;
