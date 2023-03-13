import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import ReviewGroup from "./ReviewGroup.jsx";
import styles from "./../SectionWrapper.module.scss";

const Review = (props) => {
  return (
    <section className={styles.mainWrapper}>
      <div className={styles.container_medium}>
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
