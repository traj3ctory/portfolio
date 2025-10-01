import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Sidebar } from "primereact/sidebar";
import Shimmer from "@/components/Particle";
import Header from "@/components/Header";
// import Loader from "../components/Loader";
import Home from "./sections/Home";

function Homepage() {
  const [visibleRight, setVisibleRight] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggler = () => {
    setVisibleRight(!visibleRight);
  };

  return (
    <Fade duration={4000}>
      <section className="home_container">
        <div className="d-one">
          <Shimmer />
        </div>
        <Header/>
        <Home />
        <Sidebar
          visible={visibleRight}
          position="right"
          onHide={() => setVisibleRight(false)}
        >
          <ul className="sideBar_link">
            <li>
              <a href="#about" onClick={() => setVisibleRight(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={() => setVisibleRight(false)}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setVisibleRight(false)}>
                Contact
              </a>
            </li>
          </ul>
        </Sidebar>
      </section>
    </Fade>
  );
}

export default Homepage;
