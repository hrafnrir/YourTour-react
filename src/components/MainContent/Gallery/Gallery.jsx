import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import PhotoGroup from "./PhotoGroup.jsx";
import s from "./../SectionWrapper.module.scss";

const Gallery = ({ data: { heading, description, photoItems } }) => {
  return (
    <section className={s.mainWrapper}>
      <div className={s.container_large}>
        <SectionHeader
          heading={heading}
          description={description}
          menu={false}
        />
        <PhotoGroup photoItems={photoItems} />
      </div>
    </section>
  );
};

export default Gallery;
