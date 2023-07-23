import { Divider } from 'antd'
import React,{useState}from 'react'
import Nav from '../Components/Nav/Nav'
import Nav2 from '../Components/Nav/Nav2'
import SwTable from '../Components/Product/SwTable'


function Wishlist() {
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
      
      <div className="container mt-5">
       
      <div className='d-flex justify-content-between align-items-center'>
            <h3 className=''>Wishlist</h3>
            <h5 ><a href="/" className='text-muted'>Continue Shopping</a></h5>
          </div>
          <Divider/>
          <SwTable products={products} removeProduct={handleRemoveProduct}/>
      </div>
      
      

      </div>
  
    
    

    
      
     

      
  )
}

export default Wishlist
