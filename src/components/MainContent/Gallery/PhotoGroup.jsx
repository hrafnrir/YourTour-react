import PhotoItemElement from "./PhotoItemElement.jsx";
import styles from "./PhotoGroup.module.scss";

const PhotoGroup = (props) => {
  const photoItemsElements = props.photoItems.map((item, index) => (
    <PhotoItemElement
      key={index.toString()}
      device={item.device}
      photo={item.photo}
      alt={item.alt}
    />
  ));

  return <div className={styles.mainWrapper}>{photoItemsElements}</div>;
};

export default PhotoGroup;
