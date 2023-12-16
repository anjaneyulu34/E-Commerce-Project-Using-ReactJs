import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const {cartItems} =useCart()
  return (
    <>
    <div>
      <div className='navSection'>
        <div className='title'>
          <h2>E-Mart</h2>
        </div>
        <div className='search'>
          <input type='text' placeholder='search...'/>
        </div>
        
        <div className='users'>
        <div className='user-details'>SignIn/SignUp</div>
         <Link to='/cart'>
          <div className='cart'>Cart
          <span>
            {cartItems.length}
          </span>
          </div>
          </Link>
          
         </div>
      </div>

    <div className='subMenu'>
      
      <ul>
      <Link to='/mobiles'>
        <li>Mobile</li>
        </Link>
        <Link to='/ac'>
        <li>Ac's</li>
        </Link>
        <Link to='/computers'>
        <li>Computers</li>
        </Link>
        <Link to='/watch'>
        <li>Wacthes</li>
        </Link>
        <Link to='/men'>
        <li>Men Shop</li>
        </Link>
        <Link to='/watches'>
        <li>Watch Shop</li>
        </Link>
        
       </ul>
    </div>
    </div>
</>
  )
}

export default Navbar
