import SectionMenu from "./SectionMenu.jsx";
import s from "./SectionHeader.module.scss";

const SectionHeader = ({ heading, description, menu }) => {
  return (
    <header>
      <h2 className={s.heading}>{heading}</h2>
      {description && <p className={s.description}>{description}</p>}
      {menu && <SectionMenu menuItems={menu} />}
    </header>
  );
};

export default SectionHeader;
