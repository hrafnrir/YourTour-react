import MenuItemElement from "./MenuItemElement.jsx";
import s from "./HeaderMenu.module.scss";

const HeaderMenu = ({ menuItems, headerClass }) => {
  const menuItemsElements = menuItems.map((item, index) => (
    <MenuItemElement
      key={index.toString()}
      value={item.item}
      link={item.link}
      headerClass={headerClass}
    />
  ));

  return (
    <nav className={s.menu}>
      <ul className={s.list}>{menuItemsElements}</ul>
    </nav>
  );
};

export default HeaderMenu;
