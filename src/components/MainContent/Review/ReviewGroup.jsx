import ReviewItemElement from "./ReviewItemElement.jsx";
import s from "./ReviewGroup.module.scss";

const ReviewGroup = ({ reviewItems }) => {
  const reviewItemsElements = reviewItems.map((item, index) => (
    <ReviewItemElement
      key={index.toString()}
      name={item.name}
      tour={item.tour}
      review={item.review}
      photo={item.photo}
    />
  ));

  return <div className={s.mainWrapper}>{reviewItemsElements}</div>;
};

export default ReviewGroup;
