import weblogo from '/logo.svg'
import React from 'react'
import { Link } from 'react-router-dom'

const FooterMenu = () => {
  return (
    <>
      <div className="flex flex-col gap-6 items-center justify-center py-10 my-10">
        <Link>
          <img src={weblogo} alt="logo" loading='lazy' />
        </Link>

        <ul className="flex items-center gap-12 my-6 flex-wrap">
          <Link to={'/'} className='uppercase text-sm text-theme-400 font-normal'>Home</Link>
          <Link to={'/about'} className='uppercase text-sm text-theme-400 font-normal'>About</Link>
          <Link to={'/works'} className='uppercase text-sm text-theme-400 font-normal'>Works</Link>
          <Link to={'/contact'} className='uppercase text-sm text-theme-400 font-normal'>Contact</Link>
        </ul>

        <p className='text-sm text-theme-300'>© All rights reserved by <span className='text-blue-600 '>Sajeevan</span></p>
      </div>
    </>
  )
}

export default FooterMenu
