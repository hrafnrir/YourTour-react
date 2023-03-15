import { useState, useEffect } from "react";
import HeaderTop from "./HeaderTop/HeaderTop.jsx";
import HeaderBottom from "./HeaderBottom/HeaderBottom.jsx";
import styles from "./Header.module.scss";

const Header = (props) => {
  const [headerFixed, setHeaderFixed] = useState(false);
  const [sliderDown, setSliderDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 450 && !headerFixed) {
        setHeaderFixed(true);
        setSliderDown(true);
      } else if (scrollY < 450 && headerFixed) {
        setSliderDown(false);
        setTimeout(() => setHeaderFixed(false), 600);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerFixed]);

  return (
    <header className={styles.mainWrapper}>
      {headerFixed && (
        <HeaderTop
          data={props.data.headerTop}
          headerType="fixed"
          sliderDown={sliderDown}
        />
      )}
      <HeaderTop data={props.data.headerTop} headerType="unfixed" />
      <HeaderBottom data={props.data.headerBottom} />
    </header>
  );
};

export default Header;
