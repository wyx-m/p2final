import React from 'react'
import Nav from '../Components/Nav/Nav'
import Nav2 from '../Components/Nav/Nav2'
import CardP from '../Components/Cards/CardP'
import PhotoData from '../Components/Cards/PhotoData'
import  '../Components/Nav/Nav.css'
function PhotoProductList() {
  return (
    <div>
        <div><Nav/></div>
        <div><Nav2/></div>
        <div className="titlePage">MAZAGINES</div>
        <div className="row mx-5">
            <CardP imgsrc={PhotoData[0].imgsrc}  name={PhotoData[0].name} artist={PhotoData[0].artist} price= {PhotoData[0].priceCA}/>
            <CardP imgsrc={PhotoData[1].imgsrc}  name={PhotoData[1].name} artist={PhotoData[1].artist} price= {PhotoData[1].priceCA}/>
            <CardP imgsrc={PhotoData[2].imgsrc}  name={PhotoData[2].name} artist={PhotoData[2].artist} price= {PhotoData[2].priceCA}/>
            
        </div>
      
    </div>
  )
}

export default PhotoProductList
