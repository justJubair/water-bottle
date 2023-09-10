import React, { useEffect, useState } from 'react'
import Bottle from '../Bottle/Bottle'
const Bottles = () => {
    const [bottles, setBottles] = useState([])
    useEffect(()=>{
        const loadBottles = async ()=>{
            const res = await fetch('bottles.json')
            const data = await res.json();
            setBottles(data)
        }
        loadBottles()
    },[])
  return (
    <div>
      <h2 className='text-4xl mb-12 font-bold'>Memorable water Bottles: {bottles.length}</h2>
      <div className='grid grid-cols-3 gap-8'>
        {bottles.map(bottle=><Bottle key={bottle.id} bottle={bottle}></Bottle>)}
      </div>
    </div>
  )
}

export default Bottles
