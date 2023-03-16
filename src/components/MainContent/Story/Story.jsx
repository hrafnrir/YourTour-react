import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import StoryGroup from "./StoryGroup.jsx";
import s from "./../SectionWrapper.module.scss";

const Story = (props) => {
  return (
    <section className={s.mainWrapper}>
      <div className={s.container_medium}>
        <SectionHeader
          heading={props.data.heading}
          description={props.data.description}
          menu={false}
        />
        <StoryGroup storyItems={props.data.storyItems} />
      </div>
    </section>
  );
};

export default Story;
