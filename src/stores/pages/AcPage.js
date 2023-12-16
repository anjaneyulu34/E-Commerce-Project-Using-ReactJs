import React from 'react'
import {acData} from '../data/ac'
import Navbar from '../components/Navbar'

const AcPage = () => {
      return (
        <>
        <div className='proPage'>
         <Navbar/>
         <div className='pageSection'>
           {
            acData.map((item)=>{
                return (
                    <div>
                <div className='pageImg'>
                    <img src={item.image}/>
                </div>
                 <div className='proModel'>
                    {item.brand} {item.model}
                 </div>
                </div>
              
                )
            })
           }
         </div>
</div>
 </>
      )
  
}
export default AcPage
