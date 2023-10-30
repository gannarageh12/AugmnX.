
import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
    <footer className='footer-section  text-light '>
     <div className="container">
         <div className="row pb-7 footer-items" >
          <div className="col-lg-4 pb-5">
          <img className='footer-logo' src="https://www.augmntx.com/assets/img/augmntxlogo.png" srcset="https://www.augmntx.com/assets/img/augmntxlogo.png"  alt=""/> </div>
           <div className="col-lg-2 pb-5" > 
           <div className="fw-bold footer-title text-light"> Information </div> 
           <div className="mt-2">  <Link className='footer-links' href="https://www.augmntx.com/about-us" >About Us</Link> </div>
            <div className="mt-2"> <Link className='footer-links' href="https://www.augmntx.com/corporate-information" >Corporate Information</Link> </div>
             <div className="mt-2"><Link className='footer-links' href="https://www.augmntx.com/press" >Press</Link> </div> 
             <div className="mt-2"><Link className='footer-links' href="https://www.augmntx.com/careers" >Careers</Link> </div> 
             <div className="mt-2"><Link className='footer-links' href="https://blog.AugmntX.com" >Blog</Link> </div> 
             <div className="mt-2"><Link className='footer-links' href="https://www.augmntx.com/contact-us" >Contact Us</Link> </div>
              </div> <div className="col-lg-2 pb-5" > <div className="fw-bold footer-title text-light"> AugmntX </div> 
              <div className="mt-2"> <Link className='footer-links' href="https://www.augmntx.com/profiles" >View Profiles</Link> </div>
               <div className="mt-2"><Link className='footer-links' href="https://www.augmntx.com/discover" >Discover</Link> </div> 
               <div className="mt-2"><Link className='footer-links' href="https://www.augmntx.com/on-demand-talent" >On Demand Talent</Link> </div>
            <div className="mt-2">   <Link className='footer-links' href="https://www.augmntx.com/pricing" >Pricing</Link> </div> 
                </div> <div className="col-lg-2 pb-5" > <div className="fw-bold footer-title text-light"> Vendor </div>
                <div className="mt-2"> <Link className='footer-links' href="https://www.augmntx.com/join" >Apply As Vendor</Link> </div>
                <div className="mt-2"> <Link className='footer-links' href="https://www.augmntx.com/admin" >Vendor Login</Link> </div> 
                <div className="mt-2"> <Link className='footer-links' href="https://www.augmntx.com/verified" >Get Verified</Link> </div>
                <div className="mt-2"> <Link className='footer-links' href="https://www.augmntx.com/remote-jobs" >Remote Jobs</Link> </div>
                <div className="mt-2"> <Link className='footer-links' href="https://www.augmntx.com/home/resources" >Resources</Link> </div> </div> 
          
           </div>
                    
           <div className="row pt-5"> 
           <div className="col-lg-6 col-sm-12 col-xs-12" id="footer-one"> <span> <script type="text/javascript">
            document.write("&copy 2022 - " + new Date().getFullYear());
          </script>© 2022 - 2023 </span> <span >AugmntX</span>-<span className="px-2">Labor Omnia Vincit</span>⚡ by &nbsp;<Link href="https://superlabs.co" >SuperLabs</Link> </div>
           <div className="col-lg-6 col-sm-12 col-xs-12" id="footer-second"> <span className="px-3 second-items"><Link className='footer-links' href="https://www.augmntx.com/terms-and-conditions">Terms of Use</Link></span> 
           <span className="px-3 second-items"><Link className='footer-links' href="https://www.augmntx.com/privacy-policy">Privacy Policy</Link></span> </div> </div>
         </div>
         </footer>
       </>
  )}

          
