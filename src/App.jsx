

import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import LandingPage from './stores/pages/LandingPage'
import Kitchen from './stores/components/Kitchen'
import MobilePage from './stores/pages/MobilePage'
import CompPage from './stores/pages/CompPage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomanPage'
import FurniturePage from './stores/pages/FurniturePage'
import AcPage from './stores/pages/AcPage'
import KitchenPage from './stores/pages/KitchenPage'
import MobileSingle from './stores/singles/MobileSingle'
import UserCart from './stores/UserCart'
import FridgePage from './stores/pages/FridgePage'
import ComputerSingle from './stores/singles/ComputerSingle'
import FurnitureSingle from './stores/singles/FurnitureSingle'
import KitchenSingle from './stores/singles/KitchenSingle'
import AcSingle from './stores/singles/AcSingle'
import MenSingle from './stores/singles/MenSingle'
import WatchSingle from './stores/singles/WatchSingle'
import WomanSingle from './stores/singles/WomanSingle'
import FridgeSingle from './stores/singles/FridgeSingle'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = { <LandingPage />}/>
        <Route path= '/kitchen' element = {<KitchenPage />} />
        <Route path='/mobiles' element= {<MobilePage />} />
        <Route path='/computers' element= {<CompPage />} />
        <Route path='/watch' element= {<WatchPage />} />
        <Route path='/fridge' element={<FridgePage />} />
        <Route path='/men' element= {<MenPage />} /> 
        <Route path='/woman' element= {<WomanPage />} />             
        <Route path='/furniture' element= {<FurniturePage />} />             
        <Route path='/ac' element= {<AcPage />} />             
           <Route path='/mobiles/:id' element = {<MobileSingle />} />
      <Route path='/cart' element = {<UserCart />} />
      <Route path='/ac/:id' element = {<AcSingle />} />
      <Route path='/computers/:id' element = {<ComputerSingle />} />
      <Route path='/furniture/:id' element = {<FurnitureSingle />} />
      <Route path='/kitchen/:id' element = {<KitchenSingle />} />
      <Route path='/men/:id' element = {<MenSingle />} />
      <Route path='/watch/:id' element = {<WatchSingle />} />
      <Route path='/woman/:id' element = {<WomanSingle />} />
      <Route path='/fridge/:id' element = {<FridgeSingle />} />
      </Routes>
    </div>
  )
}

export default App