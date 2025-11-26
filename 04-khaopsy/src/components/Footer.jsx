import React from "react";

function Footer() {
  return (
    <footer className="footer-section mt-4 pt-3 pb-4">
      <div className="container">
        <div className="row justify-content-center text-white">
          <div className="col-11 col-md-6">
            <p className="footer-title mb-1">CONTACTO:</p>
            <p className="mb-3 footer-text">CORREO: ejemplo@correo.com</p>

            <div className="d-flex justify-content-center gap-4 footer-icons">
              <a href="#instagram" className="footer-icon-link">
                <span className="footer-icon-circle">IG</span>
              </a>
              <a href="#whatsapp" className="footer-icon-link">
                <span className="footer-icon-circle">WA</span>
              </a>
              <a href="#youtube" className="footer-icon-link">
                <span className="footer-icon-circle">YT</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;