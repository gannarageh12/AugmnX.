import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Portfolio from './portfolio';
import SearchBar from '../components/searchbar';
import Sidebar from './sidebar';
import Info from './info';
import { useState ,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
const Profiles = () => {
  
  const [profileData, setProfileData] = useState(null);
  const [postsPerPage] = useState(5);
const [offset, setOffset] = useState(1);
const [posts, setAllPosts] = useState([]);
const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    
  
    axios.get(`https://augmntx.com/api/profile_list`).then((res)=>{
      
    const data = res.data;
      const slice = data.slice(offset - 1 , offset - 1 + postsPerPage)
      const postData = setProfileData(slice)
      setAllPosts(postData)
   setPageCount(Math.ceil(data.length / postsPerPage))
     })
     
     .catch ((error)=> {
      console.error('Error fetching data:', error);
      
     })
  
},[offset ,postsPerPage] );
console.log(posts)

const handlePageClick = (e) => {
  const selectedPage = e.selected;
  setOffset(selectedPage + 1)
};
  


  return (
    <>
    <div className='profile'>
       <Container>
       <Row>
       <Col xs={{ order: 'last' }} sm={{ order: 'last' }} md={{ order: 'first' }} xl={{ order: 'first' }} lg={3} xxl={3}  >
        <Sidebar/>
        </Col>
     <Col xs={{ order: 'first' }} sm={{ order: 'first' }} md={{ order: 'first' }} xl={{ order: 'last' }} lg ={9} xxl={9}>
        <SearchBar/>
        
            <Row >
              
            {profileData&&profileData.map((profile)=>(
               
            
             
             <div className='col-xs-12 col-sm-12 col-md-12 col-xl-6 col-lg-6' key={profile.unique_id}>
              <Link  to={`/details/${profile.unique_id}`}> 
              <Portfolio {...profile} />
              </Link>
              </div>
             
            
            
      ))}
            </Row>
       
  
    
    <ReactPaginate
       previousLabel={"<<" }
       nextLabel={ ">>" }
       breakLabel={ "..." }
       breakClassName={ "break-me" }
       pageCount={ pageCount }
       onPageChange={ handlePageClick }
       containerClassName={ "pagination justify-content-center mt-4" }
       subContainerClassName={ "pages pagination" }
       pageClassName={"page-item"}
       pageLinkClassName={"page-link"}
       previousClassName={"page-item"}
       previousLinkClassName={"page-link"}
       nextClassName={"page-item"}
       nextLinkClassName={"page-link"}
       breakLinkClassName={"page-link"}
       activeClassName={ "active" } />
    
      
     
      
     
            
    </Col>
    
      </Row>
      
       
    
  
      
      
        </Container>
    
      <Row>
        <Info/>
      </Row>
      </div>
    </>
  )
}

export default Profiles