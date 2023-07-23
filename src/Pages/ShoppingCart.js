import React,{useState} from 'react'
import Nav from '../Components/Nav/Nav'
import Nav2 from '../Components/Nav/Nav2'
import { Divider } from 'antd'
import SwTable from '../Components/Product/SwTable'

function ShoppingCart() {
  const initialProducts = [
    { name: 'D-DAY', quantity: 1, priceCA: '$30.9' },
   
  ];

  const [products, setProducts] = useState(initialProducts);

  const handleRemoveProduct = (productName) => {
    const updatedProducts = products.filter((product) => product.name !== productName);
    setProducts(updatedProducts);
  };
  return (
    <div>
        <div><Nav/></div>
        <div><Nav2/></div>
        <div className='container mt-5'>
          <div className='d-flex justify-content-between align-items-center'>
            <h3 className=''>Shopping Cart</h3>
            <h5 ><a href="/" className='text-muted'>Continue Shopping</a></h5>
          </div>
          <Divider/>
          <div >
                <SwTable products={products} removeProduct={handleRemoveProduct}/>
          </div>
          <div className="d-flex justify-content-end mt-5 mb-4">
            <h6>Subtotoal : $30.9</h6>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-dark">Checkout</button>
          </div>
          
        </div>
        </div>
  )
}

export default ShoppingCart
