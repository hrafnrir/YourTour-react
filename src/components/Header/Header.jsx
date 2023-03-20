import { useState, useEffect } from "react";
import HeaderTop from "./HeaderTop/HeaderTop.jsx";
import HeaderBottom from "./HeaderBottom/HeaderBottom.jsx";
import s from "./Header.module.scss";

const Header = ({ data: { headerTop, headerBottom } }) => {
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
    <header className={s.mainWrapper}>
      {headerFixed && (
        <HeaderTop
          data={headerTop}
          headerType="fixed"
          sliderDown={sliderDown}
        />
      )}
      <HeaderTop data={headerTop} headerType="unfixed" />
      <HeaderBottom data={headerBottom} />
    </header>
  );
};

export default Header;
