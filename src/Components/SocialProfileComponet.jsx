import React from 'react'
import Blog from '/blog-1.jpeg'
import Icon from '/icon.svg'
import { Code, Component, Cpu, Figma } from 'lucide-react'
import { Link } from 'react-router-dom'
import '../app.css'

const SocialProfileComponet = () => {
  return (
    <div className="flex flex-col gap-6 bg-custom px-5 pb-6">
      <div className="social__media flex items-center py-8 px-4 flex-wrap justify-around mt-5 mb-5 bg-custom gap-2">
        <Link className="p-5 transition-all social__media__icon group bg-custom">
          <Code size={34} className='group-hover:text-black transition-all' />
        </Link>
        <Link className="p-5 transition-all social__media__icon group bg-custom">
          <Cpu size={34} className='group-hover:text-black transition-all' />
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <small className='text-xs text-theme-300 uppercase'>Stay with me</small>
          <h5 className='text-2xl font-[600] capitalize'>Profiles</h5>
        </div>

        <div className="icon">
          <img src={Icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SocialProfileComponet