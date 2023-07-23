import React from 'react'
import LightData from '../Components/Cards/LightData'
import Nav from '../Components/Nav/Nav'
import Nav2 from '../Components/Nav/Nav2'
import CardP from '../Components/Cards/CardP'
import  '../Components/Nav/Nav.css'
function LightStickProductList() {
  return (
    <div>
       <div><Nav/></div>
       <div><Nav2/></div>
       <div className="titlePage">LIGHTSTICKS</div>
       <div className="row mx-5">
            <CardP imgsrc={LightData[0].imgsrc}  name={LightData[0].name} price= {LightData[0].priceCA}/>
            <CardP imgsrc={LightData[1].imgsrc}  name={LightData[1].name} price= {LightData[1].priceCA}/>
            <CardP imgsrc={LightData[2].imgsrc}  name={LightData[2].name} price= {LightData[2].priceCA}/>
            <CardP imgsrc={LightData[3].imgsrc}  name={LightData[3].name} price= {LightData[3].priceCA}/>
        </div>
        <div className="row mx-5">
            <CardP imgsrc={LightData[4].imgsrc}  name={LightData[4].name} price= {LightData[4].priceCA}/>
            <CardP imgsrc={LightData[5].imgsrc}  name={LightData[5].name} price= {LightData[5].priceCA}/>
            <CardP imgsrc={LightData[6].imgsrc}  name={LightData[6].name} price= {LightData[6].priceCA}/>
            <CardP imgsrc={LightData[7].imgsrc}  name={LightData[7].name} price= {LightData[7].priceCA}/>
        </div>
    </div>
  )
}

export default LightStickProductList
