import React from 'react'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'
const ComputerPage = () => {
  return (
    <div>
       <>
        <div className='proPage'>
         <Navbar/>
         <div className='pageSection'>
           {
            computerData.map((item)=>{
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
    </div>
  )
}

export default ComputerPage
