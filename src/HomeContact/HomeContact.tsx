import "./homeContact.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function HomeContact() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="home-contact-main" data-aos="fade-up">
      <div className="home-contact-section">
        <div className="row m-2">
          <div className="col-4 contact-col">
            <a
              href="mailto:enquiry@dandrinternational.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img className="home-contact-icon" src="Gmail.png" />
              <span
                className="home-contact-icon-name"
                style={{ marginLeft: "2px" }}
              >
                Email
              </span>
              <p className="home-contact-icon-value email-text">
                enquiry@dandrinternational.com
              </p>
            </a>
          </div>
          <div
            className="col-4 contact-col"
            onClick={() =>
              window.open("https://wa.me/+91 86065 88000", "_blank")
            }
            style={{ cursor: "pointer" }}
          >
            <img className="home-contact-icon sec" src="Chats.png" />
            <span className="home-contact-icon-name">Live Chat 24/7</span>
            <p className="home-contact-icon-value ">Replay Time: Instantly</p>
          </div>

          <div className="col-4 contact-col">
            <a
              href="tel:+9061278671"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img className="home-contact-icon" src="RingerVolume.png" />
              <span className="home-contact-icon-name">Phone</span>
              <p className="home-contact-icon-value">+86 199 2746 1254</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContact;
