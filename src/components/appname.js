import React from 'react'
import Profileheader from './profileheader'
import Communication from './communication'
import { useState ,useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Appname = () => {
   const {unique_id}= useParams()
  const [detailsData, setDetailsData] = useState(null);

  useEffect(() => {
    
  
      axios.get(`https://augmntx.com/api/profile/${unique_id}`).then((res)=>{
        setDetailsData(res.data);
      })
       
       .catch ((error)=> {
        console.error('Error fetching data:', error);
       })
    
  }, [unique_id]);

  // if (!detailsData) {
  //   return <div>Loading...</div>;
  // }

console.log(detailsData)
  return (
    <div>
      
       
    {detailsData&&detailsData.profile_info&&(
      <Profileheader {...detailsData}  key={detailsData.profile_info.id} 
      profile_info={detailsData.profile_info}
      skills={detailsData.skills}
      projects={detailsData.projects}
      certifications={detailsData.certifications}
      education={detailsData.education}
      experience={detailsData.experience}
      profile_industie={detailsData.profile_industie}
  />
    )

    }  
 
        

        <Communication/>
    </div>
  )
}

export default Appname