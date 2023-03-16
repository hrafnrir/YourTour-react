import StoryItemElement from "./StoryItemElement.jsx";
import s from "./StoryGroup.module.scss";

const StoryGroup = (props) => {
  const storyItemsElements = props.storyItems.map((item, index) => (
    <StoryItemElement
      key={index.toString()}
      heading={item.heading}
      description={item.description}
      list={item.list}
      socialNetworks={item.socialNetworks}
      link={item.link}
      num={++index}
    />
  ));

  return <div className={s.mainWrapper}>{storyItemsElements}</div>;
};

export default StoryGroup;
