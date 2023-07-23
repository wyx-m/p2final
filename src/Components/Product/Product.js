import React from 'react'
import AddToCart from './AddtoCart'
import { Link  } from "react-router-dom";
import "./Reviews.css"



function Product(props) {
  return (
    <div className='container'>
        <div className="row my-5">
          <div className="col-6">
             <div className="bg-transpaernt border me-5" style={{height:"650px"}}>
                <img src="https://lightupk.com/cdn/shop/products/image_1e977da8-b635-4ea4-b0aa-b20a0695a5e4.jpg?v=1680490320" alt="productPic" style={{height:"100%", width:"100%"}}/>
             </div>
          </div>
          <div className="col-6 ps-5">
            <h2 className='fw-bold'>{props.name}</h2>
            <h3>{props.artist}</h3>
            <h5 className='mt-2'>{props.price}</h5>
            <div className='mt-3'>
              <h6>Quantity: </h6>
              <AddToCart/>
            
            </div>

            <div className="d-flex justify-content-start ">
              <button className="btn border-black btn-dark mt-3" style={{width:"60%",height:'45px'}}>
                <Link to="/shoppingcart" style={{textDecoration:"none",color:"white",fontSize:"20px"}}>
                  Add To Cart
                </Link>
              </button>
            </div>
            <div className="d-flex justify-content-start ">
              <button className="btn border-black btn-dark mt-3" style={{width:"60%",height:'45px'}}>
                <Link to="/wishlist" style={{textDecoration:"none",color:"white",fontSize:"20px"}}>
                  Add To Wishlist
                </Link>
              </button>
            </div>

            <div className='mt-5'>
              <h4 className='fw-bold'>INCLUDE: </h4>
              <h5 className='mt-3'>CD</h5>
              <h5 className='mt-3'>Lyrics paper</h5>
              <h5 className='mt-3'>photobook</h5>
              <h5 className='mt-3'>poster</h5>
              <h5 className='mt-3'>Sticker</h5>
              <h5 className='mt-3'>2 potocards</h5>
            </div>

            <div className="mt-5">
              <h4 className='mb-3 fw-bold'>LOOK FOR MORE DETAILS: </h4>
              <a href="https://www.youtube.com/watch?v=iy9qZR_OGa0" style={{color:"black"}}><h5 >Watch MV</h5></a>
              <a href="https://genius.com/Genius-english-translations-agust-d-haegeum-english-translation-lyrics" style={{color:"black"}}> <h5>Lyrics</h5></a>

            </div>
          </div>

          
            
        </div>

        
        <div className='reviews-container'>
            <h3 className='ms-3'>Customer Review</h3>
            <textarea name="customerreview" id="reviews" className='d-flex reviewInput ms-3'></textarea>
            <div className='d-flex justify-content-end me-5 mt-3'><button className="btn btn-dark">Sumbit</button></div>
        </div>
        </div>
    
  )
}

export default Product
