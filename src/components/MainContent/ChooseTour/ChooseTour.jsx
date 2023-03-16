import SectionHeader from "./../SectionHeader/SectionHeader.jsx";
import TourGroup from "./TourGroup.jsx";
import s from "./../SectionWrapper.module.scss";

const ChooseTour = ({ data: { heading, menuItems, tourItems } }) => {
  return (
    <section className={s.mainWrapper}>
      <div className={s.container_medium}>
        <SectionHeader heading={heading} description={false} menu={menuItems} />
        <TourGroup tourItems={tourItems} />
      </div>
    </section>
  );
};

export default ChooseTour;
