import React from "react";
import SectionHeader from "./SectionHeader";
import teaserImg from "../assets/teaser.jpg";

function TeaserSection() {
  return (
    <section id="teaser">
      <SectionHeader title="TEASER" />

      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-11 col-md-6 text-center">
            <div className="position-relative teaser-image-wrapper">
              <img
                src={teaserImg}
                alt="Teaser"
                className="img-fluid shadow-sm"
              />
              <button className="btn btn-danger btn-sm teaser-overlay-btn">
                VER TRAILER
              </button>
            </div>

            <div className="mt-3">
              <button className="btn btn-secondary w-100 mb-1">
                DISPONIBLE AHORA EN
              </button>
              <button className="btn btn-dark px-4">CINES</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeaserSection;