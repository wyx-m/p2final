import React from 'react'
import {FaMinus, FaPlus} from "react-icons/fa"
import "./Quantity.css"

const CartAmountToggle=({amount,setDecrease,setIncrease})=> {
  return (
    <div className='cart-button'>
        <div className="amount-toggle">
            <button onClick={()=>setDecrease()} style={{border:"none",backgroundColor:"white"}}>
                <FaMinus/>
            </button>
            <div className="amount-style text-black">{amount}</div>
            <button onClick={()=>setIncrease()} style={{border:"none",backgroundColor:"white"}}>
                <FaPlus/>
            </button>
        </div>
    </div>
  )
}

export default CartAmountToggle
