import "./clientOpinion.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function ClientOpinion() {
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // afterChange: (index: any) => setCurrentSlide(index),
  };
  const sliderRef = useRef<Slider>(null);

  const slides = [
    {
      imageUrl: "rahul.png",
      content: {
        title: "Rahul",
        position: "ewtfioh",
        imageUrl: "rahul.png",
        description:
          "“Working with D and R Goldenwing has been fantastic for my business. Their import and export services are seamless, and their multilingual team makes communication easy. The office space and staffing solutions are excellent, allowing me to focus on growing my business. I highly recommend their services.”",
      },
    },
    {
      imageUrl: "avatar.jpg",
      content: {
        title: "Fayiz",
        position: "ewtfioh",
        imageUrl: "avatar.jpg",
        description:
          "“D and R Goldenwing has significantly boosted our operations. Their efficient import and export services ensure that our goods always arrive on time. The multilingual team is a huge asset, simplifying communication across borders. Their office space and staffing solutions have been invaluable, letting us concentrate on our core business. Highly recommend their services.”",
      },
    },
    {
      imageUrl: "avatar.jpg",
      content: {
        title: "Gaseer",
        position: "ewtfioh",
        imageUrl: "avatar.jpg",
        description:
          "“Our partnership with D and R Goldenwing has been a game-changer. Their seamless import and export services keep our supply chain running smoothly. The multilingual team is professional and easy to work with, making international communication a breeze. Their office space and staffing solutions are top-notch, enabling us to scale our business effectively. I highly endorse their services.”",
      },
    },
    {
      imageUrl: "avatar.jpg",
      content: {
        title: "Ahsan",
        position: "ewtfioh",
        imageUrl: "avatar.jpg",
        description:
          "“D and R Goldenwing's services have been outstanding for our company. Their efficient import and export operations have streamlined our logistics, and their multilingual team ensures clear and effective communication. The excellent office space and staffing solutions they provide have allowed us to focus on expanding our business. We highly recommend their services.”",
      },
    },
    // Add more objects for additional slides
  ];
  return (
    <div className="client-wrapper">
      <div className="client-main">
        <h2
          className="client-main-head"
          // data-aos="fade-down"
          // data-aos-duration="1500"
        >
          Check Testimonials For Our Satisfied Clients
        </h2>
        <span
          className="client-main-text"
          // data-aos="fade-down"
          // data-aos-duration="1500"
        >
          Read our testimonials to see how our clients have benefited from our
          products and services. Their experiences highlight the quality and
          satisfaction we deliver.
        </span>
      </div>
      <div className=" carousel-section-main">
        <Slider {...settings} ref={sliderRef}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="crsl-image-card card">
                <center>
                  <img
                    src={slide.content.imageUrl}
                    width="100px"
                    height="100px"
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                  <span className="slider-title">{slide.content.title}</span>
                  {/* <p className="slider-position">{slide.content.position}</p> */}
                  <i>
                    <p className="slider-description">
                      {slide.content.description}
                    </p>
                  </i>
                </center>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ClientOpinion;
