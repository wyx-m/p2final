import React from 'react'
import Nav from '../Components/Nav/Nav'
import Nav2 from '../Components/Nav/Nav2'
import AlbumData from '../Components/Cards/AblumData'
import CardP from '../Components/Cards/CardP'
import  '../Components/Nav/Nav.css'

function AlbumProductList() {
  const lang=localStorage.getItem('lang')
  return (
    <div>
      <div><Nav/></div>
      <div><Nav2/></div>
      <div className="titlePage">ALBUMS</div>
    
        <div className="row mx-5">
            <CardP imgsrc={AlbumData[0].imgsrc} name={ AlbumData[0].name} artist={AlbumData[0].artist} price={lang === "en"?  AlbumData[0].priceCA :AlbumData[0].priceCN}/>
            <CardP imgsrc={AlbumData[1].imgsrc}  name={AlbumData[1].name} artist={AlbumData[1].artist} price={lang === "en"?  AlbumData[1].priceCA :AlbumData[1].priceCN}/>
            <CardP imgsrc={AlbumData[2].imgsrc} name={AlbumData[2].name} artist={AlbumData[2].artist} price={lang === "en"?  AlbumData[2].priceCA :AlbumData[2].priceCN}/>
            <CardP imgsrc={AlbumData[3].imgsrc} name={AlbumData[3].name} artist={AlbumData[3].artist} price={lang === "en"?  AlbumData[3].priceCA :AlbumData[0].priceCN}/>
        </div>
        <div className="row mx-5">
          
            <CardP imgsrc={AlbumData[4].imgsrc} name={AlbumData[4].name} artist={AlbumData[4].artist} price={lang === "en"?  AlbumData[4].priceCA :AlbumData[4].priceCN}/>
            <CardP imgsrc={AlbumData[5].imgsrc} name={AlbumData[5].name} artist={AlbumData[5].artist} price={lang === "en"?  AlbumData[4].priceCA :AlbumData[5].priceCN}/>
            <CardP imgsrc={AlbumData[6].imgsrc} name={AlbumData[6].name} artist={AlbumData[6].artist} price={lang === "en"?  AlbumData[6].priceCA :AlbumData[6].priceCN}/>
            <CardP imgsrc={AlbumData[7].imgsrc} name={AlbumData[7].name} artist={AlbumData[7].artist} price={lang === "en"?  AlbumData[7].priceCA :AlbumData[7].priceCN}/>
        
        </div>
        <div className="row mx-5">
          
            <CardP imgsrc={AlbumData[8].imgsrc} name={AlbumData[8].name} artist={AlbumData[8].artist} price={lang === "en"?  AlbumData[8].priceCA :AlbumData[8].priceCN}/>
            <CardP imgsrc={AlbumData[9].imgsrc} name={AlbumData[9].name} artist={AlbumData[9].artist} price={lang === "en"?  AlbumData[9].priceCA :AlbumData[9].priceCN}/>
            <CardP imgsrc={AlbumData[10].imgsrc} name={AlbumData[10].name} artist={AlbumData[10].artist} price={lang === "en"?  AlbumData[10].priceCA :AlbumData[10].priceCN}/>
            <CardP imgsrc={AlbumData[11].imgsrc} name={AlbumData[11].name} artist={AlbumData[11].artist} price={lang === "en"?  AlbumData[11].priceCA :AlbumData[11].priceCN}/>
        </div>
      
    </div>
  )
}

export default AlbumProductList
