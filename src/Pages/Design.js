import React from 'react'
import Nav from '../Components/Nav/Nav'
import Nav2 from '../Components/Nav/Nav2'
import DesignContainer from '../Components/Cards/DesignContainer'

function Design() {
  return (
    <div>
        <div><Nav/></div>
        <div className='mb-4'><Nav2/></div>
        <DesignContainer/>
    </div>
  )
}

export default Design
