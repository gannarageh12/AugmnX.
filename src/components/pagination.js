import React from 'react'
import ReactPaginate from 'react-paginate'
import { useState , useEffect } from 'react'
import axios from 'axios'
const Numberslider = () => {

  const [pageCount, setpageCount] = useState(0);

 




  const handlePageChange = (selectedPage) => {
    
  };    
  return (
    <div>
     <ReactPaginate
     previousLabel={"<<"}
     nextLabel={">>"}
     pageCount={6}
     onPageChange={handlePageChange}
     containerClassName={'pagination justify-content-center'}
     pageClassName={'page-item'}
     pageLinkClassName={'page-link'}
     previousClassName='page-item'
     previousLinkClassName='page-link'
     nextClassName='page-item'
     nextLinkClassName='page-link'
     activeClassName='active'
     />
</div>
 )
}

export default Numberslider