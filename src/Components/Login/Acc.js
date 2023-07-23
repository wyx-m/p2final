import { Divider } from 'antd'
import React from 'react'

function Account() {
  return (
    <div className='container mt-5'>
      <div className="col-12">
        <h1>Account</h1>
        <Divider/>
      
      <div className="row">
        <div className="col-md-6">
          <h3 className='mb-4'>Account Details</h3>
          <p>Name: WYX</p>
          <p>Address: XXX-XXXX</p>
        </div>

        <div className="col-md-6 ps-2">
          <h3 className='mb-4'>Order History</h3>
          <p>You haven't placed any orders yet.</p>
        </div>
      </div>
    </div>
    <div className='d-flex justify-content-end mt-5 me-5'>
      <a href="/"><button className="btn btn-dark ">Logout</button></a>
    </div>
    
      

    </div>
  )
}

export default Account
