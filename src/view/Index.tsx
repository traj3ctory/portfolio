import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import Shimmer from "../components/Particle";
import Header from "../components/Header";
// import Loader from "../components/Loader";
import Home from "./Home";

function Homepage() {
  const [visibleRight, setVisibleRight] = useState(false);
  const toggler = () => {
    setVisibleRight(!visibleRight);
  };
  // const [loading, setLoading] = useState(false);

  // const timeout = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // };

  // useEffect(() => {
  //   timeout();
  // }, []);

  return (
    <Fade duration={4000}>
      <section className="home_container">
        <div className="d-noe">
          <Shimmer />
        </div>
        <Header sidebarToggle={toggler} />
        {/* {loading ? <Loader /> : <Home />} */}
        <Home />
        <Sidebar
          visible={visibleRight}
          position="right"
          onHide={() => setVisibleRight(false)}
        >
          <ul className="sideBar_link">
            <li>
              <a href="#about" onClick={() => setVisibleRight(false)}>About</a>
            </li>
            <li>
              <a href="#portfolio" onClick={() => setVisibleRight(false)}>Portfolio</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setVisibleRight(false)}>Contact</a>
            </li>
          </ul>
        </Sidebar>
      </section>
    </Fade>
  );
}

export default Homepage;
