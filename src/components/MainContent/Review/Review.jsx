import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import ReviewGroup from "./ReviewGroup.jsx";
import s from "./../SectionWrapper.module.scss";

const Review = (props) => {
  return (
    <section className={s.mainWrapper}>
      <div className={s.container_medium}>
        <SectionHeader
          heading={props.data.heading}
          description={props.data.description}
          menu={false}
        />
        <ReviewGroup reviewItems={props.data.reviewItems} />
      </div>
    </section>
  );
};

export default Review;
