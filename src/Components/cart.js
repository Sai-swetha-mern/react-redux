import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "./cartproduct";
import { modifyItem, removeItem } from "../redux/cart";

const CartPage = () => {
  const list = useSelector((state) => state.cart.list);

  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(modifyItem({ ...item, count: item.count + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.count === 1) {
      dispatch(removeItem(item));
    } else {
      dispatch(modifyItem({ ...item, count: item.count - 1 }));
    }
  };
  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const getTotalAmount = () => {
    return list.reduce((total, item) => {
      return total + item.price * item.count;
    }, 0);
  };

  return (
    <>
      <div>
        <h3 className="imagetext">Total Amount : {getTotalAmount()}</h3>
      </div>
      {list.length > 0 ? (
        list.map((item) => (
          <CartProduct
            {...item}
            key={item.id}
            item={item}
            handleIncrement={() => handleIncrement(item)}
            handleDecrement={() => handleDecrement(item)}
            handleRemove={() => handleRemove(item)}
          />
        ))
      ) :
       (
        <>
          <h3>Your Cart is Empty</h3>
          
        </>
      )}
    </>
  );
};

export default CartPage;