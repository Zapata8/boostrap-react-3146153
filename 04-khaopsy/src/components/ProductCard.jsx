import React from "react";

function ProductCard({ title, description, price, image }) {
  return (
    <div className="product-card mb-3">
      <div className="product-image-area d-flex justify-content-center align-items-center">
        <img src={image} alt={title} className="product-image" />
      </div>

      <div className="product-text px-2 py-2 text-center">
        <p className="product-description mb-1">{description}</p>
        <p className="product-price mb-0">{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;