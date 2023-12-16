import React from 'react'
import {menData} from '../data/men'


const Men = () => {
 
    const fiveMenData=menData.slice(0,5);
 
    return (
   <>
    <div className='proTitle'>
    <h2>Men's Cloths</h2>
    </div>
   <div className='proSection'>{
       fiveMenData.map((item)=>{
          return <div className='imgBox'>
            <img  className="proImage" src={item.image}></img>
          </div>
       })
   }
    </div>
   
   
   
   </>
  )
}

export default Men
