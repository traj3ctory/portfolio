import { Card } from "primereact/card";
import leerix from "../asset/img//leerix.png";
import portfolio from "../asset/img/portfolio.png";
import sys from "../asset/img/sys.jpg";
import uifww from "../asset/img/uifww.png";
import johanan from "../asset/img/jwlblog.png";
import jwl from "../asset/img//jwl.png";
import ebs from "../asset/img/ebs.png";

const handleFilter = (e: any) => {
  const selectedFilter = e.target.attributes[1].nodeValue;
  let itemsToHide: NodeListOf<Element> = document.querySelectorAll(
    `#portfolioItem .project:not([data-filter='${selectedFilter}'])`
  );
  let itemsToShow = document.querySelectorAll(
    `#portfolioItem [data-filter='${selectedFilter}']`
  );

  if (selectedFilter === "all") {
    itemsToHide = [] as any;
    itemsToShow = document.querySelectorAll("#portfolioItem [data-filter]");
  }

  itemsToHide.forEach((el) => {
    el.classList.add("hide");
    el.classList.remove("show");
  });

  itemsToShow.forEach((el) => {
    el.classList.remove("hide");
    el.classList.add("show");
  });
};
function Portfolio() {
  return (
    <section id="portfolio">
      <Card title="Portfolio">
        <section className="portfolio section">
          <div id="filter" className="d-flex justify-content-center">
            <button
              className="p-button mx-1 filter"
              onClick={handleFilter}
              data-filter="all"
            >
              all
            </button>
            <button
              className="p-button mx-1 filter"
              onClick={handleFilter}
              data-filter="react"
            >
              react
            </button>
            <button
              className="p-button mx-1 filter"
              onClick={handleFilter}
              data-filter="web"
            >
              web
            </button>
            <button
              className="p-button mx-1 filter"
              onClick={handleFilter}
              data-filter="wordpress"
            >
              wordpress
            </button>
            <button
              className="p-button mx-1 filter"
              onClick={handleFilter}
              data-filter="opencart"
            >
              opencart
            </button>
          </div>

          <div className="p-grid" id="portfolioItem">
            <div className="p-col-12 p-md-4 project react" data-filter="react">
              <img src={leerix} alt="leerix application" />
              <div className="portfolio-info">
                <h4>Lyrics Finder</h4>
                <div className="icon">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="p-col-12 p-md-4 project web" data-filter="web">
              <img src={portfolio} alt="portfolio site" />
              <div className="portfolio-info">
                <h4>Portfolio</h4>
                <div className="icon">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="p-col-12 p-md-4 project web" data-filter="web">
              <img src={sys} alt="Sysbanker EE" />
              <div className="portfolio-info">
                <h4>Sysanker EE</h4>
                <div className="icon">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div
              className="p-col-12 p-md-4 project wordpress"
              data-filter="wordpress"
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
              className="p-col-12 p-md-4 project wordpress"
              data-filter="wordpress"
            >
              <img src={johanan} alt="Johanan World Blog" />
              <div className="portfolio-info">
                <h4>Johanan World Blog</h4>
                <div className="icon">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div
              className="p-col-12 p-md-4 project opencart"
              data-filter="opencart"
            >
              <img src={jwl} alt="Johanan World" />
              <div className="portfolio-info">
                <h4>Johanan World</h4>
                <div className="icon">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="p-col-12 p-md-4 project web" data-filter="web">
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
