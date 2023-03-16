import SectionHeader from "../SectionHeader/SectionHeader.jsx";
import Form from "./Form/Form.jsx";
import s from "./../SectionWrapper.module.scss";

const CollectTour = ({ data: { heading, description, form } }) => {
  return (
    <section className={s.mainWrapper}>
      <div className={s.container_medium}>
        <SectionHeader
          heading={heading}
          description={description}
          menu={false}
        />
        <Form data={form} />
      </div>
    </section>
  );
};

export default CollectTour;
