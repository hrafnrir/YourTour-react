import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import StoryGroup from "./StoryGroup.jsx";
import s from "./../SectionWrapper.module.scss";

const Story = ({ data: { heading, description, storyItems } }) => {
  return (
    <section className={s.mainWrapper}>
      <div className={s.container_medium}>
        <SectionHeader
          heading={heading}
          description={description}
          menu={false}
        />
        <StoryGroup storyItems={storyItems} />
      </div>
    </section>
  );
};

export default Story;
