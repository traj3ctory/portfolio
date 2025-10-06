import Main from "@/components/Main";
import data from "@/data/data.json";
import { dataType } from "@/types";
import { Card } from "primereact/card";
import { Key, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

function Home() {
  const [value, setValue] = useState<dataType | undefined>();

  useEffect(() => {
    setValue(data);
  }, []);

  if (!value) return null;

  const {
    school,
    workXp,
    description,
    desc2,
    desc3,
    subtitle,
    title,
    stack,
    detail,
    portfolio,
  } = value;

  return (
    <div className="container content mx-auto">
      <Main />
      <main className="about_content mb-3">
        <Card title="About">
          <div className="mb-3">
            <h4 className="text-lg">{title}</h4>
            {subtitle?.map((el: string, i: Key) => (
              <span className="text-xl text-blue-500/90" key={i}>
                {el}
              </span>
            ))}
          </div>
          <p>{desc2}</p>
          <p className="mb-3">{desc3}</p>
          <Link
            to="/asset/DAVID_BENARD_CV.pdf"
            target="_blank"
            className="p-button p-button-text p-button-small p-button-raised"
            download
          >
            Download CV
            <i className="mx-2 pi pi-check" />
          </Link>
          <a
            href="#contact"
            className="p-button p-button-small p-button-raised mx-2"
          >
            Hire Me
            <i className="mx-2 pi pi-check" />
          </a>
        </Card>
      </main>
      <Portfolio portfolio={portfolio} />
      <About
        school={school}
        workXp={workXp}
        description={description}
        desc2={desc2}
        desc3={desc3}
        subtitle={subtitle}
        title={title}
        stack={stack}
        detail={detail}
      />
      <Contact />
    </div>
  );
}

export default Home;
