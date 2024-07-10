import "./heroSecion.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
function HeroSection() {
  useEffect(() => {
    AOS.init();
  }, []);
  const services = [
    {
      title: "Import and Export",
      description:
        "We ensure the smooth and timely import and export of quality products.",
    },
    {
      title: "Logistics",
      description:
        "Efficient logistics solutions for the transportation and delivery of goods.",
    },
    {
      title: "Tourism",
      description:
        "Comprehensive tourism services: travel, accommodation, lodging, tours, and Ayurveda.",
    },
  ];
  return (
    <div className="carousel-section">
      <img className="hero-image" src="BG.png" alt="Background" />
      <div className="container-fluid card-container">
        <span className="Hero-image-head">
          CONNECTING WORLDS, CREATING OPPORTUNITIES
        </span>
        <span className="Hero-image-sub-head">
          Your Global Partner in International Trade
        </span>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          className="service-slider"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="card hero-card">
                <span className="card-head">{service.title}</span>
                <p className="card-text">{service.description}</p>
                <button
                  className="card-button"
                  onClick={() => {
                    window.location.href =
                      "mailto:enquiry@dandrinternational.com";
                  }}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Enquire
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="row">
          <div className="col-12 col-sm-4">
            <div className="card hero-card">
              <span className="card-head">Import and Export</span>
              <p className="card-text">
                We ensure the smooth and timely import and export of quality
                products.
              </p>
              <button className="card-button">Enquire</button>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="card hero-card">
              <span className="card-head">Logistics</span>
              <p className="card-text">
                Efficient logistics solutions for the transportation and
                delivery of goods.
              </p>
              <button className=" card-button">Enquire</button>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="card hero-card">
              <span className="card-head">Tourism</span>
              <p className="card-text">
                Comprehensive tourism services: travel,accommodation, lodging,
                tours, and Ayurveda.
              </p>
              <button className="card-button">Enquire</button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default HeroSection;
