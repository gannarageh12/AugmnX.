import React from 'react'


const Sidebar = () => {
  return (
    <div>
       
        <div className='sidebar widget '>
            <h5 className='widget-title mb-3'>
            Hiring resources
            </h5>
            <ul className="nav  sidebar-items "> 
            <li className=" nav-item"> 
            <a href="https://blog.AugmntX.com/how-to-hire-ios-developers/"  className="sidebar-link" aria-expanded="true">
            Guide to Hiring devs
            <span class="fs-sm text-muted ms-1">(-&gt;)</span>
            </a>
            </li>
            <li className=" nav-item"> 
            <a href="https://blog.AugmntX.com/ios-job-template/"  className="sidebar-link" aria-expanded="true">
            Job Template
            <span class="fs-sm text-muted ms-1">(-&gt;)</span>
            </a>
            </li>
            <li className=" nav-item"> 
            <a href="https://blog.AugmntX.com/common-interview-questions-for-ios/"  className="sidebar-link" aria-expanded="true">
            Interview Questions
            <span class="fs-sm text-muted ms-1">(-&gt;)</span>
            </a>
            </li>
            <li className="nav-item"> 
            <a href="https://blog.AugmntX.com/resource-outsourcing-mistakes/"  className="sidebar-link" aria-expanded="true">
            Common Mistakes
            <span class="fs-sm text-muted ms-1">(-&gt;)</span>
            </a>
            </li>
            </ul>
            <br/>
            <h5 className='widget-title mb-3'>
            Need help?
            
            </h5>
            <ul className="nav   sidebar-items"> 
            <li className="nav-item"> 
            <a href="https://blog.AugmntX.com/how-to-hire-ios-developers/"  className="sidebar-link" aria-expanded="true">
            Book a meeting
            <span class="fs-sm text-muted ms-1">(-&gt;)</span>
            </a>
            </li>
            <li className=" nav-item"> 
            <a href="https://blog.AugmntX.com/ios-job-template/"  className="sidebar-link " aria-expanded="true">
            Chat with an expert 
            <span class="fs-sm text-muted ms-1">(-&gt;)</span>
            </a>
            </li>
           
            </ul>
        </div>
        

    </div>
  )
}

export default Sidebar