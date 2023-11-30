import React from "react";

const CartProduct = (props) => {
  return (
    <div className="d-flex m-4 mt-5 justify-content-center align-items-center">
      <img
        src={props.thumbnail}
        height={150}
        width={180}
        alt={props.title}
        className="me-10"
      />
      <h5 className="card-title me-4">{props.title}</h5>
      <h6 className="mt-2 me-4">Price: {props.price}</h6>
      <h6 className="mt-2 me-4">Discount: {props.discountPercentage}%</h6>
      <h6 className="mt-2 me-4">Rating: {props.rating}</h6>
      <div className="button-container">
        <button className="cart-button plus" onClick={props.handleIncrement}>
          +
        </button>
        <span className="">Quantity:{props.count} </span>
        <button className="cart-button minus" onClick={props.handleDecrement}>
          -
        </button>
        <button className="remove-from-cart" onClick={props.handleRemove}>
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CartProduct;