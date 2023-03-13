import styles from "./Footer.module.scss";

const Footer = (props) => {
  const socialNetworksElements = props.data.socialNetworks.map(
    (item, index) => (
      <a
        className={
          styles.socialNetworks__item +
          " " +
          styles["socialNetworks__item_" + item.class]
        }
        key={index.toString()}
        href={item.link}
      >
        <span className={styles.socialNetworks__name}>{item.name}</span>
      </a>
    )
  );

  return (
    <footer className={styles.mainWrapper}>
      <div className={styles.container}>
        <p className={styles.description}>Наши социальные сети</p>
        <div className={styles.socialNetworks}>{socialNetworksElements}</div>
      </div>
    </footer>
  );
};

export default Footer;
