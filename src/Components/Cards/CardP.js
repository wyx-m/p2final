import React from 'react'
import { Link  } from "react-router-dom";

function CardP(props) {
    const lang=localStorage.getItem('lang');
  return (
    <div className="col-3 my-3"> 
        <div className="card mx-2" style={{border:'none'}}>
            <div className='card-body'style={{height:'300px',width:'320px'}}>
            <Link to="/product"> <img src={props.imgsrc} alt="productPic" className="card-img-top" style={{height:'100%',width:'100%'}}/></Link>
            </div>
            
            <Link to="/product" style={{color:'black', textDecoration:'none'}}> <div className="card-text">
              
                <div className="d-flex justify-content-center">
                    <h5 className="card-title me-2">{props.name}</h5>
                    <h5 className="card-title"> {props.artist}</h5>
                </div>
           

            <div className="d-flex justify-content-center">
                 <h6 className='fw-bold'>{props.price}</h6>
            </div>
            
        </div>
        </Link>
        <div className="d-flex justify-content-center mb-2">
            <Link to="/shoppingcart" className="btn btn-dark" style={{width:"60%"}}>{lang === "en"? "Add To Cart" : "加入购物车"}</Link>
    
        </div>
        
        </div>
    </div>
    
  )
}

export default CardP
