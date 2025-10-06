import { INotSure, stackData } from "@/types";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Panel } from "primereact/panel";
import { ProgressBar } from "primereact/progressbar";
import { Timeline } from "primereact/timeline";
import { Link } from "react-router-dom";

const customizedMarker = (item: INotSure) => (
  <span
    className="custom-marker p-shadow-2"
    style={{ backgroundColor: "white" }}
  >
    <i className={item.icon} />
  </span>
);

const customizedContent = (item: INotSure) => (
  <Card title={item.title}>
    <small>{item.date}</small>
    <br />
    <h6>{item.name}</h6>
    {item.link && (
      <small>
        <a href={`${item.link}`} target="_blank" rel="noopener noreferrer">
          <Button
            label="Verify"
            className="p-button p-button-sm"
            icon="pi pi-angle-double-right"
            iconPos="right"
          />
        </a>
      </small>
    )}
  </Card>
);
const customizedContent2 = (item: INotSure) => (
  <Card title={item.title}>
    <small>{item.date}</small>
    <br />
    <h6>{item.role}</h6>
  </Card>
);

function About({ stack, workXp, school, detail }: INotSure) {
  return (
    <section id="about" className="mb-4">
      <main className="about_content mb-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full px-2">
            <Card className="card_scroll" title="Details">
              <Panel header={Object.keys(detail)[0].toUpperCase()} toggleable>
                <Link to="/">{detail.website}</Link>
              </Panel>
              <Panel
                header={Object.keys(detail)[1].toUpperCase()}
                toggleable
                collapsed={true}
              >
                <a href={`mailto:${detail.email}`}>{detail.email}</a>
              </Panel>
              <Panel
                header={Object.keys(detail)[2].toUpperCase()}
                toggleable
                collapsed={true}
              >
                <p>{detail.degree}</p>
              </Panel>
              <Panel
                header={Object.keys(detail)[3].toUpperCase()}
                toggleable
                collapsed={true}
              >
                <a href={`tel:${detail.phone}`}>{detail.phone}</a>
              </Panel>
              <Panel
                header={Object.keys(detail)[4].toUpperCase()}
                toggleable
                collapsed={true}
              >
                <p>{detail.city}</p>
              </Panel>
              <Panel
                header={Object.keys(detail)[5].toUpperCase()}
                toggleable
                collapsed={true}
              >
                <p>{detail.contract}</p>
              </Panel>
              <Panel
                header={Object.keys(detail)[6].toUpperCase()}
                toggleable
                collapsed={true}
              >
                <p>{detail.freelance}</p>
              </Panel>
              <Panel
                header={Object.keys(detail)[7].toUpperCase()}
                toggleable
                collapsed={true}
              >
                <p>{detail.fulltime}</p>
              </Panel>
              <div className="mt-6">
                <h5 className="text-sm font-semibold mb-2">
                  7 days Coding Activity (WakaTime)
                </h5>
                <object
                  data="https://wakatime.com/share/@davebenard/e056372a-98c1-46b2-9395-2679d9143448.svg"
                  type="image/svg+xml"
                  className="w-full h-auto"
                  aria-label="WakaTime coding activity chart"
                >
                  <img
                    src="https://wakatime.com/share/@davebenard/e056372a-98c1-46b2-9395-2679d9143448.svg"
                    alt="WakaTime coding activity"
                    className="w-full h-auto"
                  />
                </object>
              </div>
            </Card>
          </div>
          <div className="w-full">
            <Card className="card_scroll" title="Stack">
              {stack.map((el: stackData, i: string) => (
                <div key={i}>
                  <span>{el.name}</span>
                  <ProgressBar
                    className="mb-3"
                    value={el.progress}
                    style={{ height: ".7rem" }}
                  />
                </div>
              ))}
              <div className="flex flex-wrap">
                <img
                  src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                  alt="bz david"
                  className="mt-3"
                />
                <img
                  src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                  alt="bz david"
                  className="mt-3"
                />
                <img
                  src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                  alt="bz david"
                  className="mt-3"
                />
                <img
                  src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                  alt="bz david"
                  className="mt-3"
                />
                <img
                  src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D"
                  alt="bz david"
                  className="mt-3"
                />
                <img
                  src="https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react&logoColor=white"
                  alt="bz david"
                  className="mt-3"
                />
                <img
                  src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
                  alt="bz david"
                  className="mt-3"
                />
                <img
                  src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white"
                  alt="bz david"
                  className="mt-3"
                />
                <img
                  src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
                  alt="bz david"
                  className="mt-3"
                />
                <img
                  src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white"
                  alt="bz david"
                  className="mt-3"
                />
              </div>
              <div className="mt-6">
                <h5 className="text-sm font-semibold mb-2">
                  Coding Activity for the Year (WakaTime)
                </h5>
                <object
                  data="https://wakatime.com/share/@davebenard/1131a30c-1e80-43f1-8da4-22b4822a6c73.svg"
                  type="image/svg+xml"
                  className="w-full h-auto"
                  aria-label="WakaTime coding activity chart"
                >
                  <img
                    src="https://wakatime.com/share/@davebenard/1131a30c-1e80-43f1-8da4-22b4822a6c73.svg"
                    alt="WakaTime coding activity"
                    className="w-full h-auto"
                  />
                </object>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <main className="about_content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <Card className="card_scroll" title="Education">
              <Timeline
                value={school}
                align="alternate"
                className="customized-timeline"
                marker={customizedMarker}
                content={customizedContent}
              />
            </Card>
          </div>
          <div className="w-full px-2">
            <Card className="card_scroll" title="Experience">
              <Timeline
                value={workXp}
                align="alternate"
                className="customized-timeline"
                marker={customizedMarker}
                content={customizedContent2}
              />
            </Card>
          </div>
        </div>
      </main>
    </section>
  );
}

export default About;
