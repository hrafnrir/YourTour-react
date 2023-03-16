import MenuItemElement from "./MenuItemElement.jsx";
import s from "./SectionMenu.module.scss";

const SectionMenu = ({ menuItems }) => {
  const menuItemsElements = menuItems.map((item, index) => (
    <MenuItemElement
      key={index}
      value={item.item}
      link={item.link}
      num={index}
    />
  ));
  return (
    <nav className={s.menu}>
      <ul className={s.list}>{menuItemsElements}</ul>
    </nav>
  );
};

export default SectionMenu;
