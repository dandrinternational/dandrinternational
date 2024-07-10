import { Services } from "./Service";
import "./homeServices.scss";
function HomeServices() {
  return (
    <>
      <span
        className="home-service-head"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {" "}
        - Services -{" "}
      </span>
      <div
        className=""
        data-aos="fade-up"
        data-aos-duration="1000"
        style={{ paddingBottom: "25px" }}
      >
        <p className="home-service-text">
          At D and R Goldenwing International Trading Company Ltd, we are
          committed to delivering excellence through our diverse range of
          services. Our team of multilingual professionals is dedicated to
          providing personalized and comprehensive support to meet all your
          business needs. Contact us today to learn more about how we can assist
          you in achieving your business goals.
        </p>
      </div>

      <section className="features-cards-wrapper">
        <div className="feature-list row">
          {Services.map((feature, index) => (
            <div className=" col-sm-6 col-md-4">
              <div
                key={index}
                className="feature feature-list-card card"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <img
                  src={`${feature.icon}`}
                  alt={`${feature.title} icon`}
                  width="20%"
                />
                <h3 className="feature-list-card-head">{feature.title}</h3>
                {/* <div className="feature-list-card-head-underline"></div> */}

                <p className="feature-list-card-text">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomeServices;
