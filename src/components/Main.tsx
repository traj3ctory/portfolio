import DisplayLottie from "./DisplayLottie";
import Coding from "../data/coding.json";
import SocialMedia from "./Social";
import { Card } from "primereact/card";

const Main = () => (
  <main className="main_content" id="home_page">
    <div style={{ width: "100%" }} className="p-grid">
      <div className="p-col-6 p-d-flex p-ai-stretch p-ai-center">
        <Card className="p-d-flex p-ai-center p-jc-center">
          <div style={{ width: "100%" }}>
            <h4>Hello there. I'm</h4>
            <h1>Benard Z David</h1>
            <p>I'm a Frontend Web Developer.</p>
            <SocialMedia />
          </div>
        </Card>
      </div>
      <div className="p-col-6">
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
