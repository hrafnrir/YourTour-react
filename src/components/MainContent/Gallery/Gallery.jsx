import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import PhotoGroup from "./PhotoGroup.jsx";
import s from "./../SectionWrapper.module.scss";

const Gallery = (props) => {
  return (
    <section className={s.mainWrapper}>
      <div className={s.container_large}>
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
