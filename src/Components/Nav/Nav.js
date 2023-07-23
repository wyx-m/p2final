import React from 'react';
import "./Nav.css"
import { Link  } from "react-router-dom";


function Nav() {
   const handleLan=(option)=>{
    localStorage.setItem("lang",option.target.value);
    window.location.reload();
   }

   const lang=localStorage.getItem("lang")||"en"

  return (

        <div className='navbar'>
          <Link to ='/search' className='search'><i class="fa-solid fa-bars"></i></Link>
            
            <a href="/" style={{textDecoration:"none",color:"rgb(238, 237, 178)",}}><h1> Seesaw Music</h1></a>
            <div className="navbar-container">
                <select className="custom-select mt-2 rounded-3 ps-2 pt-1 pb-1" style={{width:"100px",border:"none"}} onChange={handleLan} value={lang}>
                    <option value="en">English</option>
                    <option value="cn">中文</option>
                </select>
                <ul className='nav-basic'>
                    <li className='nav-item'>
                        <Link to='/profile' className='nav-links'>
                            <i class="fa-solid fa-user"></i>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/shoppingcart' className='nav-links'>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/wishlist' className='nav-links'>
                            <i class="fa-solid fa-heart"/> 
                        </Link>
                    </li>
                    
                </ul>
                
            </div>
        </div>
       
   
  )
}

export default Nav
