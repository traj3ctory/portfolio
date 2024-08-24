import { AppImage } from "@/components";
import { INotSure, portfolioData } from "@/types";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import { Skeleton } from "primereact/skeleton";
import { Key, useState } from "react";

const handleFilter = (e: INotSure) => {
  const selectedFilter = e.target.attributes[1].nodeValue;
  let itemsToHide: NodeListOf<Element> = document.querySelectorAll(
    `#portfolioItem .project:not([data-filter='${selectedFilter}'])`
  );
  let itemsToShow = document.querySelectorAll(
    `#portfolioItem [data-filter='${selectedFilter}']`
  );

  if (selectedFilter === "all") {
    itemsToHide = [] as INotSure;
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
  const [visible, setVisible] = useState<portfolioData | null>(null);
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="section" id="portfolio">
      <div className="card flex justify-content-center">
        <Dialog
          header={visible?.name}
          visible={visible !== null}
          style={{ width: "70rem" }}
          onHide={() => setVisible(null)}
        >
          {visible && (
            <>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <AppImage
                    width={350}
                    src={visible.image}
                    alt={`${visible.name}`}
                    preview={{
                      zIndex: 2000,
                    }}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <h4 className="mb-3">{visible.name}</h4>
                  <small className="mb-2">...{visible.description}</small>
                  <hr />
                  <small className="mb-2">
                    <strong>{visible.role}</strong>
                  </small>
                  <br />
                  <small className="mb-2">{visible.tech}</small>
                  <hr />
                  {visible?.link && visible.link !== "" && (
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
                  )}
                </div>
              </div>
              {visible?.other_img && visible?.other_img?.length > 0 && (
                <div className="row my-3">
                  {visible?.other_img?.map(
                    (el: string | undefined, i: Key | null | undefined) => {
                      return (
                        <div className="col-md-6 col-12 mb-3" key={i}>
                          <AppImage
                            src={el}
                            alt={`${visible.name}-${i}`}
                            className="img-fluid"
                            preview={{
                              zIndex: 2000,
                            }}
                          />
                        </div>
                      );
                    }
                  )}
                </div>
              )}
            </>
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
            data-filter="web"
          >
            Web-Apps
          </button>
          <button
            className="p-button filter p-button-sm mx-1"
            onClick={handleFilter}
            data-filter="hobby"
          >
            Personal
          </button>
        </div>
        <div
          className="p-grid"
          id="portfolioItem"
          style={{ cursor: "pointer" }}
        >
          {portfolio.map((item: portfolioData, i: number) => (
            <div
              key={i}
              className={`p-col-12 p-md-4 project ${item.category}`}
              data-filter={`${item.category}`}
              onClick={() => setVisible(item)}
            >
              {!loaded && <Skeleton width="20rem" height="4rem" />}
              <img
                src={item.image}
                alt={`${item.name}`}
                onLoad={() => setLoaded(true)}
                style={{ display: loaded ? "block" : "none" }}
              />
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
