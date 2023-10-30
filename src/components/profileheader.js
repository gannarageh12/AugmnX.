import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
const Profileheader = (detailsData) => {
 return (
 
    <div>
     
        
        <section>
            <div className='container'>
         <div className="row mt-4"> 
         <div className="row"> 
         <div className="text-muted col-lg-6 col-md-6" >
             <i className="uil uil-arrow-left">
             <Icon icon="uil:arrow-left" />
                </i> 
             <Link href="https://www.augmntx.com/home" style={{fontSize:18 , padding:5}}>Home</Link> / 
             <Link href="https://www.augmntx.com/profiles" style={{fontSize:18 , padding:5}}>Developers</Link> <span style={{color:"#aab0bc"}}>/{detailsData.profile_info.unique_id} </span> </div> </div>
         <div className="col-lg-4" id="profile-image-container">
         <img 
         src={detailsData.profile_info.userPhoto=== "uploads/"
               ?"https://augmntx.com/assets/img/noimage.jpg"
               : `https://augmntx.com/${detailsData.profile_info.userPhoto}`} 
         className="img-fluid mt-4" id="profile-image"  alt="profile" title="profile image"/> </div> 
         <div className="col-lg-8"> 
         <div className="mt-3"> 
         <div className="h5 text-muted" id="profile-title">{detailsData.profile_info.first_name} {detailsData.profile_info.last_name}
         <span className="uid" > {detailsData.profile_info.unique_id} </span> 
         <span> <span className="text-green">{detailsData.profile_info.active}</span> </span>
          </div> <div className="h5 text-dark"> {detailsData.profile_info.primary_title} </div> 
         <div className="mt-2" id="profile-bio">{detailsData.profile_info.bio}</div> </div> </div>
         <div className="skill-container mt-5"> 
        { detailsData.skills && detailsData.skills.length>0 && detailsData.skills.slice(0,3).map((skill)=>(


         <div className="skill-pill"> 
            <span  key={skill.id} className="text-dark"> {skill.name} </span>
         </div>
            ))} 
      
        </div> </div> 
            
        <section>
        <div className="subsection mt-3">
         <div className="subsection-items px-2 py-2">
          <span className="h5 text-dark">Industries : </span> 
           {detailsData.projects && detailsData.projects.map(indus=>(
            <u key={indus.id} style={{color:"#636466"}}>{indus.industry} </u>
           ))}
              
          </div> 
          </div>
        </section>
        
        <section> 
            
        <div className="subsection-2 mt-2 mb-2"> 
        <div className="subsection-items px-2 py-2 actions-container"> 
        <div className="btn btn-light text-dark" >
            <i className="uil uil-share"><Icon icon="uil:share" /></i> Share </div> <Link href=""> 
        <div className="btn btn-light text-dark">
            <i className="uil uil-chat-info"><Icon icon="uil:chat-info" /></i> Hire DA R </div> </Link>
             <Link href="https://www.augmntx.com/home/profile2pdf/2679"> 
        <div className="btn btn-light text-dark"><i className="uil uil-download-alt"><Icon icon="uil:download-alt" /></i> Download PDF</div> </Link> 
        </div> 
        </div>
         </section>
         <section className="px-3 border-bottom">
             <div className="row py-3 mt-1"> 
             <div className="col-7 col-lg-4"> 
             <div className="h5"> <div className="row"> 
             <div className="col-lg-2"></div> <div className="col-lg-8"> 
             <i className="bi bi-calendar-check"><Icon icon="bi:calendar-check" /></i> 
             <span style={{position:"relative",top:"2px",left:"5px"}}>Availability</span> </div>
             <div className="col-lg-2"></div> </div> </div> </div>
             
             <div className="col-5 col-lg-7 sction-content" id="profile-bio">  {detailsData.profile_info.comittment}</div> 

            
             </div>
         </section>

         <section className="px-3 border-bottom"> 
    <div className="row py-3 mt-1"> 
    <div className="col-7 col-lg-4"> 
    <div className="h5"> 
    <div className="row"> 
    <div className="col-lg-2"></div> 
    <div className="col-lg-8"> 
    <i className="bi bi-hourglass"><Icon icon="bi:hourglass" /></i>
     <span style={{position:"relative",top:"2px",left:"5px"}}>Total experience</span> </div>
    <div className="col-lg-2"></div> </div> </div> </div>
    <div className="col-5 col-lg-6 sction-content" id="profile-bio">{detailsData.profile_info.experience}  years </div> </div>
    </section>

    <section className="px-3 border-bottom">
         <div className="row py-3 mt-1">
         <div className="col-lg-4"> 
         <div className="h5"> 
         <div className="row"> 
         <div className="col-lg-2"></div> 
         <div className="col-lg-8"> <i className="bi bi-code-slash"><Icon icon="bi:code-slash" /></i> 
         <span style={{position:"relative",top:"2px",left:"5px"}}>Technical skills</span> </div>
        <div className="col-lg-2"></div> </div> </div> </div> 
        <div className="col-lg-7"> <div className="row section-content"> 
            <div className='row'>
        
        { detailsData.skills && detailsData.skills.length>0 && detailsData.skills.slice(0,3).map((skill)=>(
            <div className='row'>
        <div className="col-lg-4 col-6 py-1" id="profile-bio" key={skill.id}> {skill.name} </div>
       <div className="col-lg-8 col-6 py-1" id="profile-bio" key={skill.id}> {skill.year} Years </div>
        </div>
        ))}
         
        </div>
         </div> 
       
      
        
      
         
         </div> </div>
         </section>

        <section className="px-3 border-bottom"> 
        <div className="row py-3 mt-1"> 
        <div className="col-lg-4"> 
        <div className="h5"> 
        <div className="row"> 
        <div className="col-lg-2"></div> 
        <div className="col-lg-8"> 
        <i className="bi bi-gear"><Icon icon="bi:gear" /></i> 
        <span style={{position:"relative",top:"2px",left:"5px"}}>Projects</span> </div> 
        <div className="col-lg-2"></div> </div> </div> </div> 
        <div className="col-lg-7 section-content-1"> 
        <div className="mb-3"> 
        <div className="h5" id="project-title"> 
        <span id="project-title-text"> CLEARAGO </span> </div> 
        <div className="px-4 mb-2 text-muted"> </div> 
        {detailsData.projects && detailsData.projects.map((project)=>(
        <div id="project-details" key={project.id}> 
        <div className="fw-bold">Description</div>   
        <div className="mb-2" id="profile-bio" > {project.description}</div> 
        <div className="fw-bold">Roles and Responsibilites</div> 
        <div className="mb-2" id="profile-bio">{project.responsibilities} </div> 
        <div className="fw-bold mb-2">Technologies:
        <span style={{fontWeight:"normal"}} id="profile-bio" >{project.responsibilities}  </span>
       </div> 
        <div className="fw-bold mb-2">Industry:
         <span style={{fontWeight:"normal"}} id="profile-bio"> {project.industry} </span>
         </div> 
         </div>
        ))}
          </div>
           </div> 
           </div> 
         </section>
         <section className="px-3 border-bottom">
             <div className="row py-3 mt-1"> 
             <div className="col-lg-4"> 
             <div className="h5"> 
             <div className="row"> 
             <div className="col-lg-2"></div> 
             <div className="col-lg-8"> <i className="bi bi-briefcase"><Icon icon="bi:briefcase" /></i> 
             <span style={{position:"relative",top:"2px",left:"5px"}}>Work history</span> </div> 
             <div className="col-lg-2"></div> </div> </div> </div> 
             <div className="col-lg-7 section-content">
             <div className="mb-2"> <div class="text-dark"id="profile-bio"> {detailsData.profile_info.job_status} / {detailsData.profile_info.primary_title} <div class="mb-2"> </div> </div> </div> </div> </div>
             </section>
        <section class="px-3 border-bottom">
            <div class="row py-3 mt-1"> 
            <div class="col-lg-4"> 
            <div class="h5"> 
            <div class="row"> 
            <div class="col-lg-2"></div> 
            <div class="col-lg-8"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16"> <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"></path> <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"></path> </svg> 
            <span style={{position:"relative",top:"2px",left:"5px"}} >Education</span> </div>
             <div class="col-lg-2"></div> </div> </div> </div>
             {detailsData.education && detailsData.education.map((edu)=>(
                <div class="col-lg-7 section-content" key={edu.id}>
                <div class="mb-2">
                <div class="text-dark" id="profile-bio"> {edu.degree} in {edu.major}  </div> 
                <div class="text-muted" style={{fontSize:"16px"}} id="profile-bio"> {edu.univ} </div> 
                <div class="text-muted" id="profile-bio"> {edu.edu_start} to {edu.edu_end} </div> 
                </div>
                 </div>
                 ))} 
             
               </div>
         </section>
         <section class="px-3 border-bottom"> 
         <div class="row py-3 mt-1">
         <div class="col-lg-4"> 
         <div class="h5"> 
         <div class="row"> 
         <div class="col-lg-2"></div> 
         <div class="col-lg-8"> 
         <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"> 
         <path d="m475 976 181-480h82l186 480h-87l-41-126H604l-47 126h-82Zm151-196h142l-70-194h-2l-70 194Zm-466 76-55-55 204-204q-38-44-67.5-88.5T190 416h87q17 33 37.5 62.5T361 539q45-47 75-97.5T487 336H40v-80h280v-80h80v80h280v80H567q-22 69-58.5 135.5T419 598l98 99-30 81-127-122-200 200Z"></path> </svg> 
         <span style={{position:"relative",top:"2px",left:"5px"}}>Language</span> </div> 
         <div class="col-lg-2"></div> </div> </div> </div> 
         <div class="col-lg-7 sction-content"id="profile-bio">English - {detailsData.profile_info.english}</div> </div> 
         </section>

         <section> 
           <div className="subsection-2 mt-2 mb-2"> 
            <div className="subsection-items px-2 py-2 actions-container"> 
            <div className="btn btn-light text-dark" >
                <i className="uil uil-share"><Icon icon="uil:share" /></i> Share </div> <Link href=""> 
            <div className="btn btn-light text-dark">
                <i className="uil uil-chat-info"><Icon icon="uil:chat-info" /></i> Hire DA R </div> </Link>
                 <Link href="https://www.augmntx.com/home/profile2pdf/2419"> 
            <div className="btn btn-light text-dark"><i className="uil uil-download-alt"><Icon icon="uil:download-alt" /></i> Download PDF</div> </Link> 
            </div> 
            </div>
             </section>

    </div>
    </section>     
    </div>
  )
}

export default Profileheader