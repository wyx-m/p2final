import React, { useState } from 'react'
import CartAmountToggle from './CartAmountToggle';

function AddToCart() {

    const [amount,setAmount]=useState(1);
    const setDecrease=()=>{
       amount > 1? setAmount(amount-1):setAmount(1);
    };

    const setIncrease=()=>{
        setAmount(amount+1);
    }
    return (
        <div>
            <CartAmountToggle 
                amount={amount} 
                setDecrease={setDecrease} 
                setIncrease={setIncrease}
              
             />
        </div>
  )
}

export default AddToCart
