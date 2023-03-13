import MenuItemElement from "./MenuItemElement.jsx";
import styles from "./HeaderMenu.module.scss";

const HeaderMenu = (props) => {
  const menuItemsElements = props.menuItems.map((item, index) => (
    <MenuItemElement
      key={index.toString()}
      value={item.item}
      link={item.link}
      headerClass={props.headerClass}
    />
  ));

  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>{menuItemsElements}</ul>
    </nav>
  );
};

export default HeaderMenu;
