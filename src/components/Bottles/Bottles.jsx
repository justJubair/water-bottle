import React, { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import { getItemLS, setItemLS } from "../../utils/localStorage";
import Cart from "../Cart/Cart";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadBottles = async () => {
      const res = await fetch("bottles.json");
      const data = await res.json();
      setBottles(data);
    };
    loadBottles();
  }, []);

  useEffect(() => {
    if (bottles.length) {
      const storedCart = getItemLS();
      const savedCart = []  
      for(let id of storedCart){
            const bottle = bottles.find(bottle=>id === bottle.id)
           savedCart.push(bottle)
        }
       setCart(savedCart)
     
    }
  }, [bottles]);


  const handlePurchase = (bottle) => {
    const updatedCart = [...cart, bottle];
    setCart(updatedCart);
    setItemLS(bottle.id);
  };

  return (
    <div>
      <h2 className="text-4xl mb-4 font-bold">
        Memorable water Bottles: {bottles.length}
      </h2>
      <div>
        <Cart cart={cart}/>
        <div>
            {
                
            }
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handlePurchase={handlePurchase}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
