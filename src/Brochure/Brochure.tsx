import React, { useEffect } from "react";
import "./brochure.scss";
import AOS from "aos";
import "aos/dist/aos.css";
function Brochure() {
  useEffect(() => {
    AOS.init();
  }, []);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "D&R Brochure.pdf";
    link.download = "D&R Brochure.pdf";
    link.target = "_blank";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };
  return (
    <div className="brochure-wrapper">
      <div className="row">
        <div
          className="col-md-6"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          {/* <div className="left-section-wrapper"> */}
          <img className="brochure-image" src="brochureImage.png" />
          {/* <div className="image-background">
            </div> */}
          {/* </div> */}
        </div>
        <div className="col-md-6" data-aos="fade-left" data-aos-duration="1500">
          <h1 className="brochure-main-head">Our Commitment to You</h1>
          <h3 className="brochure-main-text">
            Our professional and trustworthy staff are dedicated to providing
            exceptional service. With offices in strategic locations, we offer
            reliable support and comfortable office spaces for our clients,
            complete with accommodation and all necessary amenities<br></br>
            <span className="brochure-main-text-subhead">
              {" "}
              Door Delivery of Bulk Products{" "}
            </span>{" "}
            <br></br>
            We ensure the door delivery of any bulk products you need. Our
            efficient logistics services guarantee timely and secure
            transportation of your goods right to your doorstep.<br></br>
            <span className="brochure-main-text-subhead">
              100% Money Safe Guarantee
            </span>{" "}
            <br></br>
            Your financial security is our top priority. We provide a 100% money
            safe guarantee, ensuring your funds are secure in our hands
            throughout the transaction process.
          </h3>
          <button
            onClick={handleDownload}
            className="brochure-download-button mt-3"
          >
            <img src="DownloadCloud.png" width="20%" /> Brochure
          </button>
        </div>
      </div>
    </div>
  );
}

export default Brochure;
