import React from 'react'
import {computerData} from '../data/computers'

const Computers = () => {
 
     const fiveComputers=computerData.slice(0,5);
    return (
        
    <>
    <div className='proTitle'>
    <h2>Computers</h2>
    </div>
    
    
    <div className='proSection'>
    {
        fiveComputers.map((item)=>{
            return(
                <div className='imgBox'>
                    <img  className="proImage"  src={item.image}/>
                </div>
            )
        })
    }
</div>



</>
  )
}

export default Computers
