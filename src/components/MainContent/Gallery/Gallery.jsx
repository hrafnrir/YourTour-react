import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import PhotoGroup from "./PhotoGroup.jsx";
import styles from "./../SectionWrapper.module.scss";

const Gallery = (props) => {
  return (
    <section className={styles.mainWrapper}>
      <div className={styles.container_large}>
        <SectionHeader
          heading={props.data.heading}
          description={props.data.description}
          menu={false}
        />
        <PhotoGroup photoItems={props.data.photoItems} />
      </div>
    </section>
  );
};

export default Gallery;
