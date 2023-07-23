import React from 'react'
import "./Nav.css"
import { Link  } from "react-router-dom";

function Nav2() {
    const lang=localStorage.getItem("lang")
  return (
    <div className=' container-fluid navbar2'>
    <div className="nav2-items">
        <Link to='/albumProducts' className='nav-links'> {lang === "en"? "ALBUMS" : "专辑"}</Link>
    </div>
    
    <div className="nav2-items">
        <Link to='/lightProducts' className='nav-links'>{lang === "en"? "LIGHTSTICKS" : "应援棒"}</Link>
    </div>
    <div className="nav2-items">
        <Link to='/photoProducts' className='nav-links'>{lang === "en"? "MAGAZINES" : "杂志"}</Link>
    </div>
    
  
    
    <div className="nav2-items">
        <Link to='/design' className='nav-links'>{lang === "en"? "DESIGN" : "设计"}</Link>
    </div>
    <div className="nav2-items">
        <Link to='/aboutus' className='nav-links'>{lang === "en"? "ABOUTUS" : "关于我们"}</Link>
    </div>

    
    
    
</div>
  )
}

export default Nav2
