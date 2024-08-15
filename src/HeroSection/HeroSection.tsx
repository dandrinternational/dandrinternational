import "./heroSecion.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
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
          CONNECTING WORLDS, <br></br>CREATING OPPORTUNITIES
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
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="service-slider"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service-slide">
                <div className="service-content">
                  <span className="service-title">{service.title}</span>
                  <p className="service-description">{service.description}</p>
                </div>
                <div className="service-action">
                  <button
                    className="enquire-button"
                    onClick={() => {
                      window.location.href =
                        "mailto:enquiry@dandrinternational.com";
                    }}
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HeroSection;
