import { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Shapes from "../components/Shape";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Home from "./Home";

function Homepage() {
  const [loading, setLoading] = useState(false);

  const timeout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  useEffect(() => {
    timeout();
  }, []);

  return (
    <Fade duration={4000}>
      <section className="home_container">
        <Shapes />
        <Header />
        {loading ? <Loader /> : <Home />}
      </section>
    </Fade>
  );
}

export default Homepage;
