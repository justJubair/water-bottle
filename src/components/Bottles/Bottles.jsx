import React, { useEffect, useState } from 'react'
import Bottle from '../Bottle/Bottle'
const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        const loadBottles = async ()=>{
            const res = await fetch('bottles.json')
            const data = await res.json();
            setBottles(data)
        }
        loadBottles()
    },[])
    const handlePurchase = (bottle)=>{
        const updatedCart = [...cart, bottle]
        setCart(updatedCart)
    };
  return (
    <div>
      <h2 className='text-4xl mb-4 font-bold'>Memorable water Bottles: {bottles.length}</h2>
      <div>
        <h3 className='my-2 font-semibold'>Shopping Cart: <span className='text-red-600'>{cart.length}</span></h3>
      </div>
      <div className='grid grid-cols-3 gap-8'>
        {bottles.map(bottle=><Bottle key={bottle.id} bottle={bottle} handlePurchase={handlePurchase}></Bottle>)}
      </div>
    </div>
  )
}

export default Bottles
