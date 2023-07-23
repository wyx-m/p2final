import React from 'react'
import Nav from '../Components/Nav/Nav'
import Nav2 from '../Components/Nav/Nav2'
import Homebody from '../Components/Homebody'
import ControlledCarousel from '../Components/Carousels'


function Home() {
  return (
    <div>
        <div><Nav/></div>
        <div><Nav2/></div>
        <ControlledCarousel/>
      
        <Homebody/>   
    </div>
    
  )
}

export default Home
