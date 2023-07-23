import React from 'react'
import Nav from '../Components/Nav/Nav'
import Nav2 from '../Components/Nav/Nav2'
import Product from '../Components/Product/Product'

function ProductEach() {
  return (
    <div>
        <div><Nav/></div>
        <div><Nav2/></div>
        <Product name={"D-DAY"} artist={"AgustD"}/>
        
        
    </div>
  )
}

export default ProductEach
