import Main from "@/components/Main";
import data from "@/data/data.json";
import { dataType } from "@/types";
import { useEffect, useState } from "react";
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
      <Portfolio portfolio={portfolio} />
      <Contact />
    </div>
  );
}

export default Home;
