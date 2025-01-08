import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AllPages = () => {
  const pages = useSelector((state)=>
    state.page.pages
  );
  console.log(pages)
  const dispatch = useDispatch();
  const [searchValue,setSearchValue]=useState('');
  const filteredData= pages.filter((page)=>page.title.toLowerCase().includes(searchValue.toLowerCase))

  
  return (
    <div>
      
    </div>
  )
}

export default AllPages
