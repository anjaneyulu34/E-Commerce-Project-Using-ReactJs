import React from 'react'
import {watchData} from '../data/watch'

const WatchPage = () => {
  return (
    <div>
       <>
     <div className='proTitle'>
    <h2>Wathes</h2>
    </div>
    <div className='proSection'>
       {
         watchData.map((item)=>{
         return(
            <div>
            <div className='imgBox'>
                <img className='proImage' src={item.image}/>
            </div>
            <div className='proModel'>
                  {item.company} {item.model}
                </div>
            </div>
         )
         })
       }
      
    </div>
</>   
    </div>
  )
}

export default WatchPage
