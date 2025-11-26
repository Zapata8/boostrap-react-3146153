import React from "react";
import SectionHeader from "./SectionHeader.jsx";
import ProductCard from "./ProductCard.jsx";

import hoodieImg from "../assets/product-hoodie.png";
import phoneCaseImg from "../assets/product-phonecase.png";
import maskImg from "../assets/product-mask.png";

function SectionStore() {
  return (
    <section id="tienda" className="mt-4 store-section">
      <SectionHeader title="TIENDA KHAROSF" />

      <div className="container mt-2 pb-4">
        <div className="row justify-content-center">
          <div className="col-11 col-md-6">

            <ProductCard
              title="Buzo KHAROSF"
              description="Buzo de algodón con el logo oficial de KHAROSF."
              price="$120.000 COP"
              image={hoodieImg}
            />

            <ProductCard
              title="Forro de celular"
              description="Funda protectora inspirada en el cortometraje."
              price="$50.000 COP"
              image={phoneCaseImg}
            />

            <ProductCard
              title="Máscara KHAROSF"
              description="Accesorio oficial para coleccionistas y fans."
              price="$150.000 COP"
              image={maskImg}
            />

          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionStore;