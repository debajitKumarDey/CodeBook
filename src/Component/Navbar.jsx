import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-3  py-2 items-center bg-slate-900 place-content-evenly'>
      <h2 className='font-bold text-2xl font-serif  text-white'>Code Book</h2>
      <div className='flex gap-2'>
        <NavLink to={'/'}>
      <p className='text-lg font-sans text-white mx-2'>Home</p>
      </NavLink>
      <NavLink to={'/pages'}>
      <p className=' text-lg font-sans text-white mx-2'>All Pages</p>
      </NavLink> 
      </div>
    </div>
  )
}

export default Navbar
