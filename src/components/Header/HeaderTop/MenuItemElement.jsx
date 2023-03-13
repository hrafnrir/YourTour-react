import styles from "./MenuItemElement.module.scss";

const MenuItemElement = (props) => {
  return (
    <li className={styles.item}>
      <a
        className={styles.link + " " + styles["link_" + props.headerClass]}
        href={props.link}
      >
        {props.value}
      </a>
    </li>
  );
};

export default MenuItemElement;
