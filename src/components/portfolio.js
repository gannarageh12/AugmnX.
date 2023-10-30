import React from 'react'
import {BsDownload} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

const Portfolio = ({
  first_name,
  last_name,
  unique_id,
  primary_title,
  experience,
  skills,
  bio,
  profile_industries,
  userPhoto
}) => {

  return (
    <div>
      
      
      
      <div className="card mb-3">
        <div className="row g-0">
        <div className="col-3 ">
           <img src={userPhoto === "https://augmntx.com/assets/img/noimage.jpg" 
           ? "https://augmntx.com/assets/img/noimage.jpg"
           : `https://augmntx.com/${userPhoto}`}
            className=" card-image  " alt="..."/>
        </div>
        <div className="col-9 ">
        <div className="card-body">
        <div className="mt-2">
          <span className='card-name'>
          {first_name} {last_name}
          </span>
          <small className="text-danger" style={{fontSize:10}} >{unique_id}</small>
        </div>
        <span className="profile-card-title">{primary_title},{experience}</span>
        <div className='pills'>
        {skills && skills.length>0 && skills.slice(0,3).map((index)=>(
          
          <div className="card-pills"> <p className='text-of-card'>{index}</p> </div> 
          
          
          
        ))}
          </div>
       
        
        
        </div>
        </div>
        </div>
        <div className="card-description" ><p className='text-of-card'>{bio}</p></div>
        
        <div className="card-industries" > 
        <b style={{fontWeight:500}}>Industries:</b><u style={{margin:5}}>{profile_industries[0]}</u>, <u >{profile_industries[1]}</u> 
        </div>
         
        <div className="row">
        <div className="col-lg-6 col-6 actions text-center">
          
          <Link href="https://www.augmntx.com/hire"><Icon icon="uil:chat-info" /> Hire DA R</Link>
           </div>
         <div className="col-lg-6 col-6 actions text-center">
           <Link href="https://www.augmntx.com/home/profile2pdf/2419">
            <span><BsDownload/> Download PDF</span></Link> </div> </div>
        </div>
      
      
      
        
    </div>
  )
}


export default Portfolio
