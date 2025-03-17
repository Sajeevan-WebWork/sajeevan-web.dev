import Blog from '/blog-1.jpeg'
import Icon from '/icon.svg'
import { motion } from 'motion/react'
import React from 'react'

const BlogComponent = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 bg-custom py-8 px-5">
        <div className="signature">
          <img src={Blog} alt="Blog" className='rounded-lg h-2/3 object-cover w-full' />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <small className='text-xs text-theme-300 uppercase'>Blog</small>
            <h5 className='text-2xl font-[600] capitalize'>React Js</h5>
          </div>

          <div className="icon">
            <img src={Icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogComponent
