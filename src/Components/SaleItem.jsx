import React from "react";

const SaleItem = ({ name, oldPrice, newPrice, addToCart, id, isInCart }) => {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Sale badge--> */}
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          Sale
        </div>
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
            {/* <!-- Product price--> */}
            <span className="text-muted text-decoration-line-through">
              {oldPrice}
            </span>
            {newPrice}
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

export default SaleItem;
