import AOS from "aos";
import "aos/dist/aos.css";
import "./abouthome.scss";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
function HomeAbout() {
  useEffect(() => {
    AOS.init();
  }, []);
  //   const navigate = useNavigate();

  //   const handleReadMoreClick = () => {
  //     navigate("/about");
  //   };
  return (
    <div className="home-about-container">
      <span
        className="home-about-head"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {" "}
        - ABOUT US -{" "}
      </span>
      <div
        className=""
        data-aos="fade-up"
        data-aos-duration="1000"
        style={{ paddingBottom: "25px" }}
      >
        <p className="home-about-text">
          D and R Goldenwings International Trading Company Ltd is a global
          leader in the import and export of construction field products,
          including tiles and furniture. With branches in China and India, we
          are dedicated to providing exceptional services across a diverse range
          of industries. Our multi-talented staff are proficient in Chinese,
          English, Hindi, Malayalam, Tamil, and Arabic, ensuring seamless
          communication and support for our clients worldwide. We pride
          ourselves on our comprehensive offerings that cater to various
          business needs. From company registration to tax consultation, and
          from setting up movie shooting locations to educational consultancy,
          our expertise is vast and varied. Additionally, our unique services
          include traditional Chinese Ayurveda treatment packages and Chinese
          driving license services. Our office spaces are equipped with rooms to
          accommodate clients who visit China for purchasing purposes. We
          provide an all-inclusive experience with stay, food, travel, and
          dedicated staff support to make your business journey smooth and
          hassle-free.
        </p>
      </div>
    </div>
  );
}

export default HomeAbout;
