import React from "react";
import igIcon from "../assets/icon-instagram.png";
import waIcon from "../assets/icon-whatsapp.png";
import ytIcon from "../assets/icon-youtube.png";

function Footer() {
  return (
    <footer className="footer-section mt-4 pt-3 pb-4">
      <div className="container">
        <div className="row justify-content-center text-white">
          <div className="col-11 col-md-6">
            <p className="footer-title mb-1">CONTACTO:305 3915570</p>
            <p className="mb-3 footer-text">
              CORREO: Khaopsy@gmail.com.com
            </p>

          
            <div className="d-flex justify-content-center gap-4 footer-icons">
              <a href="#" className="footer-icon-link">
                <span className="footer-icon-circle">
                  <img src={igIcon} alt="Instagram" className="footer-icon-img" />
                </span>
              </a>

              <a href="#" className="footer-icon-link">
                <span className="footer-icon-circle">
                  <img src={waIcon} alt="WhatsApp" className="footer-icon-img" />
                </span>
              </a>

              <a href="#" className="footer-icon-link">
                <span className="footer-icon-circle">
                  <img src={ytIcon} alt="YouTube" className="footer-icon-img" />
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;