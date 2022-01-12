// import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Shimmer from "../components/Particle";
import Header from "../components/Header";
// import Loader from "../components/Loader";
import Home from "./Home";

function Homepage() {
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
        <Header />
        {/* {loading ? <Loader /> : <Home />} */}
        <Home />
      </section>
    </Fade>
  );
}

export default Homepage;
