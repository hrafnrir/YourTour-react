import s from "./PhotoItemElement.module.scss";

const PhotoItemElement = (props) => {
  return (
    <figcaption className={s.photo + " " + s["photo_" + props.device]}>
      <img className={s.originalImg} src={props.photo} alt={props.alt} />
    </figcaption>
  );
};

export default PhotoItemElement;
