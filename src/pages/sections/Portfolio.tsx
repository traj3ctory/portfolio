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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <AppImage
                    width={350}
                    src={visible.image}
                    alt={`${visible.name}`}
                    preview={{
                      zIndex: 2000,
                    }}
                  />
                </div>
                <div>
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
                <div className="grid my-3 grid-cols-1 sm:grid-cols-2 gap-4">
                  {visible?.other_img?.map(
                    (el: string | undefined, i: Key | null | undefined) => {
                      return (
                        <div key={i}>
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
          className="w-full flex flex-wrap justify-center gap-2 my-4"
        >
          {[
            { label: "All", value: "all" },
            { label: "Web-Apps", value: "web" },
            { label: "Personal", value: "hobby" },
          ].map((btn) => (
            <button
              key={btn.value}
              className="btn px-3 py-1 h-9 text-base uppercase font-medium bg-primary/90 hover:bg-primary rounded-md"
              onClick={handleFilter}
              data-filter={btn.value}
            >
              {btn.label}
            </button>
          ))}
        </div>
        <div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          id="portfolioItem"
          style={{ cursor: "pointer" }}
        >
          {portfolio.map((item: portfolioData, i: number) => (
            <div
              key={i}
              className={`project ${item.category} group relative rounded-md p-3 shadow-sm hover:shadow-lg transition-all border-b-2 border-gray-700`}
              data-filter={`${item.category}`}
              onClick={() => setVisible(item)}
            >
              {!loaded && <Skeleton width="20rem" height="4rem" />}
              <img
                src={item.image}
                alt={`${item.name}`}
                onLoad={() => setLoaded(true)}
                style={{ display: loaded ? "block" : "none" }}
                className="shadow-lg border px-2 py-1"
              />
              <div className="portfolio-info mt-2">
                <h4 className="text-sm font-semibold">{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default Portfolio;
