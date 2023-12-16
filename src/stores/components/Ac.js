import React from 'react'
import { acData } from '../data/ac'
const Ac = () => {
  const fiveAcData=acData.slice(0,5);
 
    return (
    
    <>
    <div className='proTitle'>
    <h2>Ac's</h2>
    </div>
    <div className='proSection'>
     
     {
     fiveAcData.map((item)=>{
        return(
            <div className='imgBox'>
                <img  className="proImage" src={item.image} />
            </div>
        )
     })
     }  
    </div>
    
    
    </>
    
    
    
    
  )
}

export default Ac
