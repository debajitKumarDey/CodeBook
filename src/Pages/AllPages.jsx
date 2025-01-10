import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AllPages = () => {
  const Pages = useSelector((state)=>
    state.page.pages
  );
  
  const dispatch = useDispatch();
  const [searchValue,setSearchValue]=useState('');
  const filteredData = Pages.filter((page)=> page.title.toLowerCase().includes(searchValue.toLowerCase()))

  console.log()
  return ( 
    <div className='flex flex-col justify-center min-w-[400px] items-center'>
      <input type="text"
      className='bg-gray-100 my-5 px-16 py-2 text-xl border-none shadow-md rounded-md'
      placeholder='Enter the Title'
      value={searchValue}
      onChange={(e)=>setSearchValue(e.target.value)} 
       />
      
      <div>
        {filteredData.length > 0 && filteredData.map((data)=>{
          return (
            <div 
            className='border min-w-[385px] p-2 my-3 bg-gray-50 rounded-sm shadow-sm'
            key={data.id}>
              <p className='font-bold text-xl'>{data.title}</p>
              <p className=''>{data.content}</p>
              </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default AllPages
