import SectionMenu from "./SectionMenu.jsx";
import s from "./SectionHeader.module.scss";

const SectionHeader = (props) => {
  return (
    <header>
      <h2 className={s.heading}>{props.heading}</h2>
      {props.description && (
        <p className={s.description}>{props.description}</p>
      )}
      {props.menu && <SectionMenu menuItems={props.menu} />}
    </header>
  );
};

export default SectionHeader;
