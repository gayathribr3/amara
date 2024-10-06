import React from 'react'
import './Fun.css'
import { item } from '../../../public/assets/assets'
const Fun = () => {
  return (
    <div className='fun'>
        {item.map((cardItems)=>(
           <div  key={cardItems.id}  className="movies">
            <img className="image" src={cardItems.image} alt="" />
            <div className="mov-desc">
                <img src={cardItems.icon} alt="" />
                <p>{cardItems.text}</p>
            </div>
           </div> 
        ))}
 
    </div>

  )
}

export default Fun

