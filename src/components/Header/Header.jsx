import { useState, useEffect } from "react";
import HeaderTop from "./HeaderTop/HeaderTop.jsx";
import HeaderBottom from "./HeaderBottom/HeaderBottom.jsx";
import styles from "./Header.module.scss";

const Header = (props) => {
  const [header, setHeader] = useState("unfixed");
  const [slider, setSlider] = useState("slideUp");

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 450 && header === "unfixed") {
        setHeader("fixed");
        setSlider("slideDown");
      } else if (scrollY < 450 && header === "fixed") {
        setSlider("slideUp");
        setTimeout(() => setHeader("unfixed"), 600);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [header]);

  return (
    <header className={styles.mainWrapper}>
      {header === "fixed" && (
        <HeaderTop
          data={props.data.headerTop}
          headerType="fixed"
          slider={slider}
        />
      )}
      <HeaderTop data={props.data.headerTop} headerType="unfixed" />
      <HeaderBottom data={props.data.headerBottom} />
    </header>
  );
};

export default Header;
