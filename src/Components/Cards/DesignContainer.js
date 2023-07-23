import React from 'react'
import { Steps} from 'antd';
import "./DesignContainer.css"

function DesignContainer() {
  const {Step}=Steps;
  const [current, setCurrent] = React.useState(0);
  
  const handleContinue=()=>{
    setCurrent(current+1);
  }

  const handlePrevious=()=>{
    setCurrent(current-1);
  }

  return (
      <div>
        <div  className="container ">
          <h3 className='text-center mb-3 fw-bold'style={{color:""}}>It's Time to Design Your Own Album !</h3>
          <div className="card bg-transparent border rounded-3">
            <div className="card-header p-3 ">
            <Steps current={current} 
              onChange={setCurrent} >
              <Step title="General Information" className='fw-bold ms-5'></Step>
              <Step title="Upload" className='fw-bold'></Step>
              <Step title="Finished" className='fw-bold me-5'></Step>
              
            </Steps>
            </div>
            
            <div className="ms-5 me-5 mt-2">
              {current===0&&
              (<div>
                <GeneralInfo/>
                <div className='d-flex justify-content-end mt-5  mb-2'>
                  <button className='btn btn-dark' type="sumbit" onClick={handleContinue}> Continue</button>
                </div>
              </div>
              )}
              
            
            </div>

            <div className="ms-5 me-5 mt-2">
              {current===1&&
              (<div>
                <Upload/>
                
                <div className='d-flex justify-content-between  mb-2'>
                    <button className='btn btn-dark mt-5' type="sumbit" onClick={handlePrevious}> Previous</button>
                    <button className='btn btn-dark mt-5' type="sumbit" onClick={handleContinue}> Continue</button>
                </div>
                
                
              </div>
              )}   
            </div>


            <div className="ms-5 me-5 mt-2">
              {current===2&&
              (<div>
                <Finished/>
                <div className='d-flex justify-content-between  mb-2'>
                    <button className='btn btn-dark mt-5' type="sumbit" onClick={handlePrevious}> Previous</button>
                    <a href=""><button className='btn btn-dark mt-5' type="sumbit"> Finish</button></a>
                </div>
              </div>
              )}          
          </div>
        
        </div>
      </div>
    </div>
      
  )
}

function GeneralInfo(){
 
  return (
    <form className='mt-2'>
      <div className="row g-4">                                     
         <div className="col-12">
            <label><h6>Name of Album :</h6> </label>
            <input className="form-control" type="text" placeholder='Enter the name here' required/>
          </div>                                      
          <div className="col-12">
            <label className="form-label"><h6>Description :</h6></label>
            <textarea className="form-control" rows="6" 
                    placeholder='Free feel to describe your album. You can talk about your experience, inspirations, and feelings. Everything you want to introduce to your audience!'
                    required>
                  </textarea>
          </div>
          <div className="col-md-6">
            <label className="form-label"><h6>Price :</h6></label>
            <input className="form-control" type="text" placeholder='Enter the price of the album' required/>
          </div>   
          <div className="col-md-6 mb-3">
            <label className="form-label"><h6>Release Date :</h6></label>
            <input className="form-control" type="date" required/>
          </div>   
      </div>              
    </form>
  )

}

function Upload(){
  return (
    <div className="row">  
    <div className="col-12">
      <h6>Upload Photobook Pictures:</h6>                                   
      <div className="text-center justify-content-center align-items-center p-4 p-sm-5 border border-2 border-dashed position-relative rounded-3 mb-4">                                              
        <label>
          <input className="form-control d-flex justify-content-center" type="file" name="book-image" id="imagebook" accept="image/gif, image/jpeg, image/png" />
          <p className='mt-2'>Please upload pictures in JPG, JPEG and PNG</p> 
        </label>
      </div>  
      
      <h6>Upload Photocard Pictures:</h6>                                   
      <div className="text-center justify-content-center align-items-center p-4 p-sm-5 border border-2 border-dashed position-relative rounded-3 mb-4">                                              
        <label>
          <input className="form-control d-flex justify-content-center" type="file" name="card-image" id="imagecard" accept="image/gif, image/jpeg, image/png" /> 
          <p className='mt-2'>Please upload pictures in JPG, JPEG and PNG</p>
        </label>
      </div>

      <h6>Upload Tracks:</h6>                                   
      <div className="text-center justify-content-center align-items-center p-4 p-sm-5 border border-2 border-dashed position-relative rounded-3">                                              
        <label>
          <input className="form-control d-flex justify-content-center" type="file" name="card-image" id="imagecard" accept="audio/*" /> 
          <p className='mt-2'>Looking forward to your excellent music!</p>
        </label>
      </div>         
    </div>
    
    
  </div>        
  )
}

function Finished(){
  return(
    <div className="col-12">
      <div className="d-flex align-items-center justify-content-center">
          <h3>Congratulations!<i class="fa-solid fa-face-laugh-squint ms-3" style={{height:"40px", color:" rgb(227, 131, 220)"}}></i></h3>
          
      </div>

      <div className="d-flex align-items-center justify-content-center mt-2">
          <h3>You have finish your album!</h3>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-2">
          <p>We have received your design. It usually takes 10-15 business day to finish, we will send to you as soon as possible.</p>
      </div>


    </div>
  )
}

export default DesignContainer
