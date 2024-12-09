import { useEffect, useRef, useState } from "react";
import Body from "./components/Body/Body";
import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/topbar/Topbar";

function App() {
  const navBarRef = useRef(null);
  const topBarRef = useRef(null);
  const [heroHeight, setHeroHeight] = useState("100vh");
  const bodyMargin = 20;

  const adjustHeight = () => {
    if (navBarRef.current) {
      const navbarHeight = navBarRef.current.offsetHeight;
      const topbarHeight = topBarRef.current.offsetHeight;

      const styles = getComputedStyle(navBarRef.current);
      const topStyles = getComputedStyle(topBarRef.current);

      const topBarMarginTop = parseInt(topStyles.marginTop);
      const topBarMarginBottom = parseInt(topStyles.marginBottom);

      const marginTop = parseInt(styles.marginTop);
      const marginBottom = parseInt(styles.marginBottom);

      setHeroHeight(
        `calc(100vh - ${
          navbarHeight + marginTop + marginBottom + topbarHeight + bodyMargin
        }px )`
      );

      console.log(marginTop);
    }
  };

  useEffect(() => {
    adjustHeight();
    window.addEventListener("resize", adjustHeight);

    return () => window.removeEventListener("resize", adjustHeight);
  }, []);

  return (
    <div>
      <Topbar ref={topBarRef} />
      <Navbar ref={navBarRef} />
      <Body heroHeight={heroHeight} />
    </div>
  );
}

export default App;
