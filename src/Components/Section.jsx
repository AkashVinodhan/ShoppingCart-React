import React from "react";
import FancyProduct from "./FancyProduct";
import PopularItem from "./PopularItem";
import SaleItem from "./SaleItem";
import SpecialItem from "./SpecialItem";

const Section = ({ products, addToCart }) => {
  const createProduct = (product) => {
    switch (product.name) {
      case "Fancy Product":
        return (
          <FancyProduct key={product.id} {...product} addToCart={addToCart} />
        );
        break;
      case "Special Item":
        return (
          <SpecialItem key={product.id} {...product} addToCart={addToCart} />
        );
        break;
      case "Popular Item":
        return (
          <PopularItem key={product.id} {...product} addToCart={addToCart} />
        );
        break;
      case "Sale Item":
        return <SaleItem key={product.id} {...product} addToCart={addToCart} />;
        break;
    }
  };

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product) => {
            return createProduct(product);
          })}
        </div>
      </div>
    </section>
  );
};

export default Section;
