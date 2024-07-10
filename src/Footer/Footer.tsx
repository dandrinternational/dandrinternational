import React from "react";
import "./footer.scss";
import { useNavigate } from "react-router-dom";
function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <div className="footer-main">
      <div className="row">
        <div className="col-md-1 "></div>
        <div className="col-md-4 col-sm-4 col-12 footer-sections footer-first-section  mt-5">
          <img
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
            className="footer-logo"
            src="footerLogo.png"
          />
          <br></br>
          <span className="logo-text">
            Goldenwings International
            <div style={{ marginLeft: "4%" }}>Trading Company Ltd</div>
          </span>
        </div>
        <div className="col-12 col-md-3 col-sm-2 col-6 footer-sections ">
          <span className="footer-company-section-head">Services</span>
          <div className="footer-company-section">
            <p> Import & Export</p>
            <p>Logistics</p>
            <p>Tourism</p>
            <p>Business Management</p>
            <p>Education Consultancy</p>
            <p>Event Management</p>
            <p>Tax Consultancy</p>
            <p>Ayurvedic Treatment</p>
          </div>
        </div>{" "}
        <div className="col-12 col-md-3 col-sm-2 col-6 footer-sections">
          <span className="footer-company-section-head">Contact Us</span>
          <div className="footer-location-section">
            <p className="location-head">China</p>
            <span>
              Shop 412, 4th Floor, Chuangjia International Educational City, No.
              4-6, Chuangjia Road, Jinshazhou, Baiyun District, Guangzhou{" "}
              <br></br>Ph: +86 139 2874 4347
            </span>
            <p className="mt-4 location-head">India</p>
            <span>
              B.Paul abroa Road, Near Cemetery Junction, North PO, Cochin-18,
              Kerala, India <br></br> Ph: +91 86065 88000
            </span>
          </div>
        </div>{" "}
        <div className="col-md-1"></div>
      </div>
      <div className="copy-right">
        <p className="copy-right-text">
          Copyright © {currentYear} All rights reserved by D & R Goldenwings
          International
        </p>
      </div>
    </div>
  );
}

export default Footer;
