import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ToggleMode from "./ToggleMode";

const Header = (props: any) => {
  const [url, setUrl] = useState("");
  const currentUrl = useLocation();
  // const currentUrl = window.location.pathname
  useEffect(() => {
    (async () => {
      setUrl(currentUrl.hash);
    })();
    return () => {
      // cleanup
    };
  }, [currentUrl.hash]);

  return (
    <nav className="navbar navbar-expand-md navbar-dark header_container">
      <div className="container">
        <a className="navbar-brand" href="#home_page">
          <img
            src="./asset/me.jpg"
            alt=""
            className="img-fluid rounded-circle"
            width={50}
          />&ensp;
          David Z. Benard
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={props.sidebarToggle}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex w-100 justify-content-end">
            <li className="nav-item">
              <a
                className={`nav-link ${url === "#about" ? "active" : ""}`}
                aria-current="page"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${url === "#portfolio" ? "active" : ""}`}
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${url === "#contact" ? "active" : ""}`}
                href="#contact"
              >
                Contact
              </a>
            </li>
            <li className="nav-item d-none">
              <ToggleMode />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
