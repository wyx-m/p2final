import React from 'react'



function SwTable({products,removeProduct}) {
  return (
      <div className="container table-responsive border-0 ">
        <table className='table'>
        <thead className='table-dark'>
        <tr>
           <th scope="col" className="rounded-start"><h5>Product</h5></th>
           <th scope="col" ><h5>Price</h5></th>
           <th scope="col" ><h5>Quantity</h5></th>
           <th scope="col" className=" rounded-end"><h5>Action</h5></th>
         
      </tr>
      </thead>
       
      
      <tbody >
        {products.map((product) =>(
          <tr key={product.name} >
            <td style={{height:'80px',position:'relative',top:'5px'}}>{product.name}</td>
            <td style={{height:'80px',position:'relative',top:'10px'}}>{product.priceCA}</td>
            <td style={{height:'80px',position:'relative',top:'10px'}}>1</td>
            <td style={{height:'80px',position:'relative',top:'10px'}}>
              <button onClick={() => removeProduct(product.name)} style={{border:'none',backgroundColor:'white'}}>
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      
    </table>
      </div>
      
    
    
  )
}

export default SwTable
