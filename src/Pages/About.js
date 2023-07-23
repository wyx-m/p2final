import React from 'react'
import Nav from '../Components/Nav/Nav'
import Nav2 from '../Components/Nav/Nav2'
function About() {
  return (
    <div>
        <div><Nav/></div>
        <div><Nav2/></div>
         <div className="container">
            <div className="d-flex justify-content-center">
                <h3 className="fw-bold mt-3">ABOUT US</h3>
            </div>
            <div className="mt-2" style={{width:'80%',marginLeft:'10%'}}>
                <h5 className='mx-3'> Thanks for visiting Seesaw Music. Seesaw Music was founded in 2013 
                and we are pleased to serve tens of thousands of users interested in Kpop. Music brings us together,
                we hope you find products you like and enjoy journeys of designing your own albums! Contact us if you have any questions.</h5>    
                
               

            </div>
            
            <div className='mt-5'style={{position:'absolute',left:'40%'}}>
                <h5 className='me-3'>Email: <a href = "mailto: seesawmusic@gmail.com">seesawmusic@gmail.com</a></h5>
            </div>
            <div className='mt-2'style={{position:'absolute',left:'40%'}}>
                <h5 className='me-3'>Tel: 309-218-0309 </h5>
            </div>
            
        
         </div>
    </div>
  )
}

export default About
