import React from 'react'
import {watchData} from '../data/watch'


const Watches = () => {
  
   const fiveWatchData=watchData.slice(0,5)
  
    return (
    <>
     <div className='proTitle'>
    <h2>Wathes</h2>
    </div>
    <div className='proSection'>
       {
         fiveWatchData.map((item)=>{
         return(
            <div className='imgBox'>
                <img className='proImage' src={item.image}/>
            </div>
         )
         })
       }
      
    </div>
    
    
    
    
    
    </>   

    
  )
}

export default Watches
