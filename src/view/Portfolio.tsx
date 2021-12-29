import { useEffect } from "react";
import { Card } from "primereact/card";
import leerix from "../asset/img//leerix.png";
import portfolio from "../asset/img/portfolio.png";
import sys from "../asset/img/sys.jpg";
import uifww from "../asset/img/uifww.png";
import johanan from "../asset/img/jwlblog.png";
import jwl from "../asset/img//jwl.png";
import ebs from "../asset/img/ebs.png";

// filterSelection("all");
function filterSelection(item?: any) {
  let c = item !== "" ? item.target.outerText : "all";
  let i;
  let x = document.getElementsByClassName("p-col-12");
  // if (c === "all") c = "";
  for (i = 0; i < x.length; i++) {
    if (x[i].className.includes(c)) {
      w3AddClass(x[i], "d-block");
      w3RemoveClass(x[i], "d-none");
    } else {
      w3AddClass(x[i], "d-none");
      w3RemoveClass(x[i], "d-block");
    }
  }
}

// Show filtered elements
function w3AddClass(element: Element, name: string) {
  let i;
  let arr1;
  let arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      element.className += ` ${arr2[i]}`;
    }
  }
}

// // Hide elements that are not selected
function w3RemoveClass(element: Element, name: string) {
  let i;
  let arr1;
  let arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.includes(arr2[i])) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

function Portfolio() {
  // useEffect(() => {
  //   // filterSelection();
  // }, []);

  return (
    <section id="portfolio">
      <Card title="Portfolio">
        <section className="portfolio section" id="portfolio">
          <div id="myBtnContainer">
            <button className="p-button mx-1" onClick={filterSelection}>
              all
            </button>
            <button className="p-button mx-1" onClick={filterSelection}>
              react
            </button>
            <button className="p-button mx-1" onClick={filterSelection}>
              web
            </button>
            <button className="p-button mx-1" onClick={filterSelection}>
              wordpress
            </button>
            <button className="p-button mx-1" onClick={filterSelection}>
              opencart
            </button>
          </div>

          <div className="p-grid" id="portfolioItem">
            <div className="p-col-12 p-md-4 react" data-category="react">
              <img src={leerix} alt="leerix application" />
              <div className="portfolio-info">
                <h4>Lyrics Finder</h4>
                <div className="icon">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="p-col-12 p-md-4 web" data-category="web">
              <img src={portfolio} alt="portfolio site" />
              <div className="portfolio-info">
                <h4>Portfolio</h4>
                <div className="icon">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="p-col-12 p-md-4 web" data-category="web">
              <img src={sys} alt="Sysbanker EE" />
              <div className="portfolio-info">
                <h4>Sysanker EE</h4>
                <div className="icon">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div
              className="p-col-12 p-md-4 wordpress"
              data-category="wordpress"
            >
              <img src={uifww} alt="Utali Igbo" />
              <div className="portfolio-info">
                <h4>Utali Igbo</h4>
                <div className="icon">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div
              className="p-col-12 p-md-4 wordpress"
              data-category="wordpress"
            >
              <img src={johanan} alt="Johanan World Blog" />
              <div className="portfolio-info">
                <h4>Johanan World Blog</h4>
                <div className="icon">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="p-col-12 p-md-4 opencart" data-category="opencart">
              <img src={jwl} alt="Johanan World" />
              <div className="portfolio-info">
                <h4>Johanan World</h4>
                <div className="icon">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="p-col-12 p-md-4 web" data-category="web">
              <img src={ebs} alt="Accsiss eBs" />
              <div className="portfolio-info">
                <h4>Accsiss eBs</h4>
                <div className="icon">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Card>
    </section>
  );
}

export default Portfolio;
