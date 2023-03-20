import TourItemElement from "./TourItemElement.jsx";
import s from "./TourGroup.module.scss";

const TourGroup = ({ tourItems }) => {
  const tourItemsElements = tourItems.map((item, index) => (
    <TourItemElement
      key={index}
      heading={item.heading}
      price={item.price}
      link={item.link}
      num={++index}
    />
  ));

  return <div className={s.mainWrapper}>{tourItemsElements}</div>;
};

export default TourGroup;
