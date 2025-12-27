import { Fade } from "react-awesome-reveal";
import Header from "~/components/Header";
import Shimmer from "~/components/Particle";
// import Loader from "../components/Loader";
import Home from "./sections/Home";

function Homepage() {
  return (
    <>
      <Header />
      <Fade duration={4000}>
        <section className="relative w-full min-h-screen overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Shimmer />
          </div>
          <div className="relative z-10">
            <Home />
          </div>
        </section>
      </Fade>
    </>
  );
}

export default Homepage;
