import PhotoItemElement from "./PhotoItemElement.jsx";
import s from "./PhotoGroup.module.scss";

const PhotoGroup = ({ photoItems }) => {
  const photoItemsElements = photoItems.map((item, index) => (
    <PhotoItemElement
      key={index}
      device={item.device}
      photo={item.photo}
      alt={item.alt}
    />
  ));

  return <div className={s.mainWrapper}>{photoItemsElements}</div>;
};

export default PhotoGroup;
