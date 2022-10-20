import React from "react";
import s from "../Styles/OrderButton.module.css";

const OrderButton = ( { children, handleOrder, orderToRender } ) => {
  return (
    <button
      className={`${s.button} ${orderToRender === children.toLowerCase() && s.selected}`}
      onClick={handleOrder}
    >
      {children}
    </button>
  );
};

export default OrderButton;
