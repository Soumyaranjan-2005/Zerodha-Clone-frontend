import React from 'react';

function Education() {
  return ( 
    <div className='container mt-5 mb-4'>
        <div className='row align-items-center'>
          <div className='col-12 col-lg-6 mb-4 mb-lg-0'>
            <img src='\media\images\education.svg' alt="Education illustration" style={{width:"70%"}} className='img-fluid'/>
          </div>
          <div className='col-12 col-lg-6 mt-5'>
            <h1 className='mb-3 fs-2'>Free and open market education</h1>
            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href='/' style={{textDecoration: "none"}}>Varsity<i class="fa fa-arrow-right-long"></i></a>
            <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a href='/' style={{textDecoration: "none"}}>TradingQ&A<i class="fa fa-arrow-right-long"></i></a>
          </div>
        </div>
    </div>
  );
}
export default Education;