import data from "../data/coding.json";
import DisplayLottie from "./DisplayLottie";

const Loader = () => (
  <div className="w-full max-w-5xl mx-auto px-4">
    <div className="loader_container">
      <div className="loader">
        <DisplayLottie animationData={data} />
      </div>
    </div>
  </div>
);
export default Loader;
