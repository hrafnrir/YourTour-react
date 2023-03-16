import s from "./PhotoItemElement.module.scss";

const PhotoItemElement = ({ device, photo, alt }) => {
  return (
    <figcaption className={s.photo + " " + s["photo_" + device]}>
      <img className={s.originalImg} src={photo} alt={alt} />
    </figcaption>
  );
};

export default PhotoItemElement;
