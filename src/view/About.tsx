import { Card } from "primereact/card";
import { Timeline } from "primereact/timeline";
import { ProgressBar } from "primereact/progressbar";
import { stackData } from "../data/dataType";
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";
// import CV from '../asset/doc/CV';

const customizedMarker = (item: any) => (
  <span
    className="custom-marker p-shadow-2"
    style={{ backgroundColor: "white" }}
  >
    <i className={item.icon} />
  </span>
);

const customizedContent = (item: any) => (
  <Card title={item.title}>
    <small>{item.date}</small>
    <br />
    <h6>{item.name}</h6>
  </Card>
);
const customizedContent2 = (item: any) => (
  <Card title={item.title}>
    <small>{item.date}</small>
    <br />
    <h6>{item.role}</h6>
  </Card>
);

const handleHire = () => {

};

function About({ stack, workXp, school, title, subtitle, description, detail }: any) {
  return (
    <section id="about_page">
      <main className="about_content mb-3">
        <Card title="About">
          <div className="mb-3">
            <h4 className="ml-3">
              {title}
              <span className="mx-2" />
              {subtitle.map((el: string, i: string) => (
                <span className="mx-1 fs-5 text-primary" key={i}>
                  {el}
                </span>
              ))}
            </h4>
          </div>
          <p>{description}</p>
          <Link to="/CV.pdf" target="_blank" className="p-button p-button-text p-button-small p-button-raised" download >DownLoad CV<i className="mx-2 pi pi-check"/></Link>
          <a href="#contact" className="p-button p-button-small p-button-raised mx-2" >Hire Me<i className="mx-2 pi pi-check"/></a>
        </Card>
      </main>
      <main className="about_content">
        <div className="p-grid">
          <div className="p-col">
            <Card>
              <h4>Details</h4>
              <Panel header={Object.keys(detail)[0].toUpperCase()} toggleable>
                    <Link to="/">{ detail.website }</Link>
                </Panel>
                <Panel header={Object.keys(detail)[1].toUpperCase()} toggleable collapsed={true}>
                    <p>{ detail.email }</p>
                    <a href={`mailto:${detail.email}`}>{ detail.email }</a>
                </Panel>
                <Panel header={Object.keys(detail)[2].toUpperCase()} toggleable collapsed={true}>
                    <p>{ detail.degree }</p>
                </Panel>
                <Panel header={Object.keys(detail)[3].toUpperCase()} toggleable collapsed={true}>
                    <a href={`tel:${detail.phone}`}>{ detail.phone }</a>
                </Panel>
                <Panel header={Object.keys(detail)[4].toUpperCase()} toggleable collapsed={true}>
                    <p>{ detail.city }</p>
                </Panel>
                <Panel header={Object.keys(detail)[5].toUpperCase()} toggleable collapsed={true}>
                    <p>{ detail.contract }</p>
                </Panel>
                <Panel header={Object.keys(detail)[6].toUpperCase()} toggleable collapsed={true}>
                    <p>{ detail.freelance }</p>
                </Panel>
                <Panel header={Object.keys(detail)[7].toUpperCase()} toggleable collapsed={true}>
                    <p>{ detail.fulltime }</p>
                </Panel>
                
            </Card>
          </div>
          <div className="p-col">
            <Card>
              <h4>Stack</h4>
              {stack.map((el: stackData, i: string) => (
                <div key={i}><span>{el.name}</span><ProgressBar className="mb-3" value={el.progress} style={{ height: '0.5rem' }} /></div>
              ))}
            </Card>
          </div>
        </div>
      </main>
      <main className="about_content">
        <div className="p-grid">
          <div className="p-col">
            <Card>
              <h4>Education</h4>
              <Timeline
                value={school}
                align="alternate"
                className="customized-timeline"
                marker={customizedMarker}
                content={customizedContent}
              />
            </Card>
          </div>
          <div className="p-col">
            <Card>
              <h4>Experience</h4>
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
