import styles from "./PhotoItemElement.module.scss";

const PhotoItemElement = (props) => {
  return (
    <figcaption
      className={styles.photo + " " + styles["photo_" + props.device]}
    >
      <img className={styles.originalImg} src={props.photo} alt={props.alt} />
    </figcaption>
  );
};

export default PhotoItemElement;
