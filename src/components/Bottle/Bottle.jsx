import React from 'react'


const Bottle = ({bottle, handlePurchase}) => {
    const {name, price, img, seller}=bottle
    
  return (
    <div>
        <p className='font-semibold text-xl mb-4'>{name}</p>
        <img className='w-64' src={img} alt="" />
        <p className='font-semibold'>Price: ${price}</p>
        <p className='my-2'>Seller: {seller}</p>
        <button onClick={()=>{handlePurchase(bottle)}} className='bg-pink-200'>Purchase</button>
    </div>
  )
}

export default Bottle
