import cn from "classnames";
import s from "./Footer.module.scss";

const Footer = ({ data: { socialNetworks } }) => {
  const socialNetworksElements = socialNetworks.map((item, index) => (
    <a
      className={cn(
        s.socialNetworks__item,
        s["socialNetworks__item_" + item.class]
      )}
      key={index.toString()}
      href={item.link}
    >
      <span className={s.socialNetworks__name}>{item.name}</span>
    </a>
  ));

  return (
    <footer className={s.mainWrapper}>
      <div className={s.container}>
        <p className={s.description}>Наши социальные сети</p>
        <div className={s.socialNetworks}>{socialNetworksElements}</div>
      </div>
    </footer>
  );
};

export default Footer;
