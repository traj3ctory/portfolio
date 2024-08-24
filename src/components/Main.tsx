import Coding from "@/data/coding.json";
import { Card } from "primereact/card";
import DisplayLottie from "./DisplayLottie";
import SocialMedia from "./Social";

const Main = () => (
  <main className="main_content" id="home_page">
    <div style={{ width: "100vw" }} className="p-grid">
      <div className="p-col-12 p-md-6 p-d-flex p-ai-stretch p-ai-center">
        <Card className="p-d-flex p-ai-center p-jc-center">
          <div style={{ width: "100%" }}>
            <h4>Hello there, I'm</h4>
            <h1>Benard Zibiri David</h1>
            <p className="mb-0">I'm a Software Engineer.</p>
            <small>Very interested in everything JavaScript😍/👀TypeScript...<br />...Lazy😒python[django] developer</small>
            <SocialMedia />
          </div>
        </Card>
      </div>
      <div className="p-col-12 p-md-6">
        <div className="animation_container">
          <div className="animation">
            <DisplayLottie animationData={Coding} />
          </div>
        </div>
      </div>
    </div>
  </main>
);
export default Main;
