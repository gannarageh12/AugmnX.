import React from 'react'
import { Link } from 'react-router-dom'
function Communication() {
  return (
    <div>
        
        <section className="px-10 mb-8 join-sec" style={{marginBottom:"2rem"}}> 
        <div className="row bg-primary py-14 bottom-footer"> 
        <div className="col-lg-6 text-center" id="footer-section-one" style={{borderRight:"2px solid white"}}> 
        <div className="h1 text-light text-center">Hire software <br/> developers today</div>
         <Link href="https://www.augmntx.com/hire">
            <button className="btn btn-light text-dark mt-4" style={{borderRadius:"50px"}}>Connect with us</button></Link>
             </div> 
        <div className="col-lg-6 text-center" id="footer-section-two"> 
        <div className="h1 text-light text-center">Join the<br/>developer network </div> 
        <Link href="https://www.augmntx.com/join">
            <button className="btn btn-light text-dark mt-4" style={{borderRadius:"50px"}}>Join AugmntX</button></Link> </div> </div> 
            
        </section>
      
    </div>
  )
}

export default Communication