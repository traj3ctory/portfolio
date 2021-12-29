import { useState, useEffect } from "react";
import Main from "../components/Main";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import data from "../data/data.json";
import { dataType } from "../data/dataType";

function Home() {
  const [value, setValue] = useState<dataType | undefined>(undefined);

  useEffect(() => {
    (async () => {
      setValue(data);
    })();
  }, []);
  return (
    <div className="container content">
   {
    value && (
    <><Main /><About school={value.school} workXp={value.workXp} description={value.description} subtitle={value.subtitle} title={value.title} stack={value.stack} detail={value.detail} /><Portfolio /><Contact /></>
    )
   }
   </div>
  );
}

export default Home;
