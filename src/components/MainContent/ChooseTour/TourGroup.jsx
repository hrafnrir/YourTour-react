import TourItemElement from "./TourItemElement.jsx";
import styles from "./TourGroup.module.scss";

const TourGroup = (props) => {
  const tourItemsElements = props.tourItems.map((item, index) => (
    <TourItemElement
      key={index.toString()}
      heading={item.heading}
      price={item.price}
      link={item.link}
      num={++index}
    />
  ));

  return <div className={styles.mainWrapper}>{tourItemsElements}</div>;
};

export default TourGroup;
