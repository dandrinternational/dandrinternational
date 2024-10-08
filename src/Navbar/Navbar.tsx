import AOS from "aos";
import "aos/dist/aos.css";
import "./navbar.scss";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
interface NavbarProps {
  // scrollToAbout: () => void;
  // scrollToServices: () => void;
  scrollToContact: () => void;
  // scrollToBrochure: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ scrollToContact }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const navbarToggler = useRef<HTMLButtonElement>(null);

  const closeNavbar = () => {
    if (navbarToggler.current) {
      navbarToggler.current.click();
    }
  };

  const handleNavClick = (action: () => void) => {
    closeNavbar();
    action();
  };
  return (
    <div className="Navbar-main">
      <div className="container-fluid deskTop-Navbar">
        <div className="row navigation-bar">
          <div className="col-lg-6 col-md-6 nav-left">
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <div
                className="nav-logo-img d-flex"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <img src="logoDN.png" alt="logo" />
                <p className="logo-name">
                  D&R GOLDEN WINGS<br></br> INTERNATIONAL TRADING <br></br>
                  COMPANY LTD.
                </p>
              </div>
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 nav-right">
            <div className="nav-items">
              <div data-aos="fade-down" data-aos-duration="1000">
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  Home
                </Link>
              </div>
              {/* <div data-aos="fade-down" data-aos-duration="1200">
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === "/products" ? "active" : ""
                  }`}
                >
                  Products
                </Link>
              </div> */}
              <div
                data-aos="fade-down"
                data-aos-duration="1500"
                style={{ cursor: "pointer" }}
              >
                <Link
                  to="/about"
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  // onClick={scrollToAbout}
                >
                  About us
                </Link>
              </div>
              <div
                data-aos="fade-down"
                data-aos-duration="1500"
                style={{ cursor: "pointer" }}
              >
                <Link
                  to="/services"
                  className={`nav-link ${
                    location.pathname === "/services" ? "active" : ""
                  }`}
                >
                  Services
                </Link>
              </div>
              <div
                data-aos="fade-down"
                data-aos-duration="1400"
                style={{ cursor: "pointer" }}
              >
                <Link
                  to="/brochure"
                  className={`nav-link ${
                    location.pathname === "/brochure" ? "active" : ""
                  }`}
                >
                  Brochure
                </Link>
              </div>
              <div
                data-aos="fade-down"
                data-aos-duration="1400"
                style={{ cursor: "pointer" }}
              >
                <Link
                  to="/blog"
                  className={`nav-link ${
                    location.pathname === "/blog" ? "active" : ""
                  }`}
                >
                  Blog
                </Link>
              </div>
              <div
                data-aos="fade-down"
                data-aos-duration="1500"
                style={{ cursor: "pointer" }}
              >
                <a
                  className={`nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                  onClick={scrollToContact}
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------mobile-nav--------------- */}
      <nav className="navbar mobile-nav fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            <img src="logoDN.png" className="mobile-nav-logo" alt="" />
            <p className="logo-name-mobile">
              D&R GOLDEN WINGS<br></br> INTERNATIONAL TRADING <br></br>
              COMPANY LTD.
            </p>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav5"
            aria-controls="navbarNav5"
            aria-expanded="false"
            aria-label="Toggle navigation"
            ref={navbarToggler}
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <HiMiniBars3BottomRight color="black" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav5">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link"
                  // onClick={() => handleNavClick(scrollToAbout)}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/brochure"
                  className="nav-link"
                  // onClick={() => handleNavClick(scrollToBrochure)}
                >
                  Brochure
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-link"
                  // onClick={() => handleNavClick(scrollToServices)}
                >
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/blog"
                  className="nav-link"
                  // onClick={() => handleNavClick(scrollToServices)}
                >
                  Blog
                </Link>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => handleNavClick(scrollToContact)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* ------------------------mobile-nav--------------- */}
    </div>
  );
};

export default Navbar;
