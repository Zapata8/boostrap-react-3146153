import React from "react";
import SectionHeader from "./SectionHeader.jsx";
import ProductCard from "./ProductCard.jsx";

import hoodieImg from "../assets/product-hoodie.png";
import phoneCaseImg from "../assets/product-phonecase.png";
import maskImg from "../assets/product-mask.png";

function SectionStore() {
  return (
    <section id="tienda" className="mt-4 store-section">
      <SectionHeader title="TIENDA" />

      <div className="container mt-4 pb-4">
        <div className="row justify-content-center g-4">
          {/* Producto 1 */}
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <ProductCard
              title="Buzo KHAPOSY"
              description="Buzo de algodón con el logo oficial de KHAPOSY."
              price="$120.000 COP"
              image={hoodieImg}
            />
          </div>

          {/* Producto 2 */}
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <ProductCard
              title="Estuche celular"
              description="Estuche de policarbonato termoplástico con el logo de KHAPOSY."
              price="$80.000 COP"
              image={phoneCaseImg}
            />
          </div>

          {/* Producto 3 */}
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <ProductCard
              title="Máscara KHAPOSY"
              description="Máscara con el logo de KHAPOSY."
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