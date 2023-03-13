import SectionMenu from "./SectionMenu.jsx";
import styles from "./SectionHeader.module.scss";

const SectionHeader = (props) => {
  return (
    <header>
      <h2 className={styles.heading}>{props.heading}</h2>
      {props.description && (
        <p className={styles.description}>{props.description}</p>
      )}
      {props.menu && <SectionMenu menuItems={props.menu} />}
    </header>
  );
};

export default SectionHeader;
