import ToggleMode from "./ToggleMode";

const Header = () => (
  <nav className="navbar navbar-expand-md navbar-dark header_container">
    <div className="container">
      <a className="navbar-brand" href="#home_page">
        David Z. Benard
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex w-100 justify-content-end">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="#about_page"
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <ToggleMode />
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
