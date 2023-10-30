import React from 'react'
import { useState } from 'react'



export default function SearchBar (){
  const [searchQuery, setSearchQuery] = useState('');

const handleInputChange = (event) => {
  setSearchQuery(event.target.value);}

  return (
    <div>
       <div className='Container'>
       <form >
          <input className='input-field'
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search for skills"
          />
          </form>
        </div>
    </div>
  )
}


