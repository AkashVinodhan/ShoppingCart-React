import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const PopularItem = ({ name, rating, price, isInCart, addToCart, id }) => {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Product image--> */}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">{name}</h5>
            {/* <!-- Product reviews--> */}
            <div className="d-flex justify-content-center small text-warning mb-2">
              {Array(rating)
                .fill(0)
                .map(() => {
                  return <BsFillStarFill />;
                })}
            </div>
            {/* <!-- Product price--> */}
            {price}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {isInCart ? (
              <>
                <a className="btn btn-outline-dark mt-auto disabled">
                  Add to Cart
                </a>
                <a
                  className="btn btn-outline-dark mt-auto"
                  onClick={() => addToCart(id)}
                >
                  Remove from Cart
                </a>
              </>
            ) : (
              <a
                className="btn btn-outline-dark mt-auto"
                onClick={() => addToCart(id)}
              >
                Add to Cart
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularItem;
