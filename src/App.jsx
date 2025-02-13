import React, { Suspense, useEffect, useRef, useState } from "react";
//import Navbar from "./components/Navbar/Navbar";
//import Topbar from "./components/topbar/Topbar";
//import Footer from "./components/bodyItem/Footer";
import { Outlet, useLocation } from "react-router";
import Loading from "./pages/Loading";
import ScrollTop from "./components/scrollTop/ScrollTop";
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const Topbar = React.lazy(() => import("./components/topbar/Topbar"));
const Footer = React.lazy(() => import("./components/bodyItem/Footer"));

function App() {
  const navBarRef = useRef(null);
  const topBarRef = useRef(null);
  const [heroHeight, setHeroHeight] = useState("100vh");
  const bodyMargin = 20;
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [500]);
  }, []);

  console.log(navBarRef.current);

  const adjustHeight = () => {
    if (navBarRef.current) {
      const navbarHeight = navBarRef.current.offsetHeight;
      const topbarHeight = topBarRef.current && topBarRef.current.offsetHeight;

      const styles = getComputedStyle(navBarRef.current);
      const topStyles = topBarRef.current
        ? getComputedStyle(topBarRef.current)
        : 0;

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

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <Suspense fallback={<Loading />}>
        {location.pathname === "/" && <Topbar ref={topBarRef} />}
        <Navbar ref={navBarRef} />
        <ScrollTop />
        <Outlet context={{ heroHeight }} />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
