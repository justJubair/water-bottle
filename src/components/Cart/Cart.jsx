import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h3 className="my-2 font-semibold">
        Shopping Cart: <span className="text-red-600">{cart.length}</span>
      </h3>
      <div className="flex justify-center gap-4 my-4">
        {cart.map((bottle, index) => (
          <div key={index}>
            <img className="w-24" src={bottle.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
