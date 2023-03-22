import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { portfolioData } from "../data/dataType";

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

// https://wakatime.com/a-look-back-at-2021/93064689-92b4-4ad3-953b-0ec932fdf216/iheypubrrv

type PortfolioProps = {
  portfolio: portfolioData[];
};

const Portfolio: React.FC<PortfolioProps> = ({ portfolio }) => {
  const [visible, setVisible] = useState<portfolioData>(null);
  return (
    <section className="section" id="portfolio">
      <div className="card flex justify-content-center">
        <Dialog
          header={visible?.name}
          visible={visible !== null}
          style={{ width: "50rem" }}
          onHide={() => setVisible(null)}
        >
          {visible && (
            <div className="row">
              <div className="col-md-6 mb-3">
                <img
                  width={300}
                  src={visible.image}
                  alt={`${visible.name}`}
                />
              </div>
              <div className="col-md-6 mb-3">
                <h4 className="mb-3">{visible.name}</h4>
                <small>...{visible.description}</small>
                <hr />
                <Button
                  label=" "
                  iconPos="right"
                  icon="pi pi-external-link"
                  className="shadow"
                >
                  <a
                    href={visible.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {visible.name}
                  </a>
                </Button>
              </div>
            </div>
          )}
        </Dialog>
      </div>
      <Card title="Portfolio">
        <div
          id="filter"
          className="d-flex w-100 justify-content-center btn_container"
        >
          <button
            className="p-button filter p-button-sm mx-1"
            onClick={handleFilter}
            data-filter="all"
          >
            All
          </button>
          <button
            className="p-button filter p-button-sm mx-1"
            onClick={handleFilter}
            data-filter="hobby"
          >
            Hobby
          </button>
          <button
            className="p-button filter p-button-sm mx-1"
            onClick={handleFilter}
            data-filter="web"
          >
            Web-Apps
          </button>
        </div>
        <div className="p-grid" id="portfolioItem" style={{ cursor: "pointer"}}>
          {portfolio.map((item: portfolioData, i: number) => (
            <div
              key={i}
              className={`p-col-12 p-md-4 project ${item.category}`}
              data-filter={`${item.category}`}
              onClick={() => setVisible(item)}
            >
              <img src={item.image} alt={`${item.name}`} />
              <div className="portfolio-info">
                <h4>{item.name}</h4>
                <div className="icon">
                  <i className="fa fa-search" aria-hidden="true" />
                </div>
              </div>
            </div>
          ))}

        </div>
      </Card>
    </section>
  );
};

export default Portfolio;
