import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import ReviewGroup from "./ReviewGroup.jsx";
import s from "./../SectionWrapper.module.scss";

const Review = ({ data: { heading, description, reviewItems } }) => {
  return (
    <section className={s.mainWrapper}>
      <div className={s.container_medium}>
        <SectionHeader
          heading={heading}
          description={description}
          menu={false}
        />
        <ReviewGroup reviewItems={reviewItems} />
      </div>
    </section>
  );
};

export default Review;
