import React from 'react';

function Hero() {
  return ( 
    <div className='container p-5 mb-5'>
        <div className='row text-center'>
           <img src='media/images/homeHero.png' alt="Investing illustration" className='mb-5 img-fluid'/>
           <h1 className='mt-5'>Investing in everything</h1>
           <p>Online platform for investing in stocks, derivatives, mutual funds, and more</p>
<<<<<<< HEAD
           <button className='p-2 btn btn-primary fs-5 mb-5 w-75 w-md-50 w-lg-25' style={{margin: "0 auto",}}>Signup Now</button>
=======
           <button className='p-2 btn btn-primary fs-5 mb-5' style={{width: "80%", maxWidth: "250px", margin: "0 auto",}}>Signup Now</button>
>>>>>>> def57996 (Make frontend and dashboard mobile responsive)
        </div>
    </div>
    
  );
}
export default Hero;