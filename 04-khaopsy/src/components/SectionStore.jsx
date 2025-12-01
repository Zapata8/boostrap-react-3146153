import React from "react";
import SectionHeader from "./SectionHeader.jsx";
import ProductCard from "./ProductCard.jsx";

import hoodieImg from "../assets/product-hoodie.png";
import phoneCaseImg from "../assets/product-phonecase.png";
import maskImg from "../assets/product-mask.png";

function SectionStore() {
  return (
    <section id="tienda" className="mt-4 store-section">
      <SectionHeader title="TIENDA KHAOPSY" />

      <div className="container mt-2 pb-4">
        <div className="row justify-content-center">
          <div className="col-11 col-md-6">

            <ProductCard
              title="Buzo KHAOPSY"
              description="Buzo de algodón con el logo oficial de KHAOPSY."
              price="$120.000 COP"
              image={hoodieImg}
            />

            <ProductCard
              title="Estuche celular"
              description="Estuche celular"
              price="$50.000 COP"
              image={phoneCaseImg}
            />

            <ProductCard
              title="Máscara KHAOPSY"
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