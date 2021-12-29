import data from "../data/coding2.json";
import DisplayLottie from "./DisplayLottie";

const Loader = () => (
    <div className="container">
      <div className="loader_container">
        <div className="loader">
          <DisplayLottie animationData={data} />
        </div>
      </div>
    </div>
);
export default Loader;
