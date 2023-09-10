import React from 'react'


const Bottle = ({bottle}) => {
    const {name, price, img, seller}=bottle
    console.log(bottle)
  return (
    <div>
        <p className='font-semibold text-xl mb-4'>{name}</p>
        <img className='w-64' src={img} alt="" />
        <p className='font-semibold'>Price: ${price}</p>
        <p>Seller: {seller}</p>
    </div>
  )
}

export default Bottle
