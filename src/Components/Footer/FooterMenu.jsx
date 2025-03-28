
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const FooterMenu = () => {
  return (
    <>
      <div className="flex flex-col gap-6 items-center justify-center py-10 my-10">
        <Link>
          {/* <img src={weblogo} alt="logo" loading='lazy' /> */}
          <h3 className='font-custom text-xl font-bold '>sajeevan</h3>
        </Link>

        <ul className="flex items-center gap-12 my-6 flex-wrap">
          <NavLink to={'/'}
            className={({ isActive }) => `${isActive ? "text-slate-50" : "text-theme-400"} uppercase text-sm hover:text-white transition-all font-normal`}
          >Home</NavLink>
          <NavLink to={'/about'}
            className={({ isActive }) => `${isActive ? "text-slate-50" : "text-theme-400"} uppercase text-sm hover:text-white transition-all font-normal`}
          >About</NavLink>
          <NavLink to={'/works'}
            className={({ isActive }) => `${isActive ? "text-slate-50" : "text-theme-400"} uppercase text-sm hover:text-white transition-all font-normal`}
          >Works</NavLink>
          <NavLink to={'/contact'}
            className={({ isActive }) => `${isActive ? "text-slate-50" : "text-theme-400"} uppercase text-sm hover:text-white transition-all font-normal`}
          >Contact</NavLink>
        </ul>

        <p className='text-sm text-theme-300'>© All rights reserved by <span className='text-blue-600 '>Sajeevan</span></p>
      </div>
    </>
  )
}

export default FooterMenu
