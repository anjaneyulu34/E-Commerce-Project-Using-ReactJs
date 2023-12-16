import React from 'react'
import './App.css';
import LandingPage from './stores/pages/LandingPage';
import { Routes ,Route } from 'react-router-dom';
import ComputerPage from './stores/pages/ComputerPage';
import MobilePage from './stores/pages/MobilePage';
import AcPage from './stores/pages/AcPage';
import MenPage from './stores/pages/MenPage';
import WatchPage from './stores/pages/WatchPage';
import MobileSingle from './singles/MobileSingle';
import UserCart from './stores/UserCart';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <LandingPage/>}/>
        <Route path='/cart' element={<UserCart/>}/>
        <Route path='/computers' element={<ComputerPage/>}/>
         <Route path='/mobiles' element={<MobilePage/>}/>
         <Route path='/ac' element={<AcPage/>}/>
         <Route path='/men' element={<MenPage/>}/>
         <Route path='/watches' element={<WatchPage/>}/>
         <Route path='/mobiles/:id' element={<MobileSingle/>}/>
      </Routes>
    </div>
  )
}

export default App
