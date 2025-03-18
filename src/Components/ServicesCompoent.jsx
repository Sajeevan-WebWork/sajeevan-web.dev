import React from 'react'
import Blog from '/blog-1.jpeg'
import { motion } from 'motion/react'
import Icon from '/icon.svg'
import { Code, Component, Cpu, Figma } from 'lucide-react'

const ServicesCompoent = () => {
  return (
    <>

      <motion.div
        initial={{
          y: -50,
          scale: .7,
          opacity: 0
        }}
        animate={{
          y: 0,
          scale: 1,
          opacity: 2
        }}

        transition={{ duration: .8, }}
        className="flex flex-col gap-6 bg-custom py-8 px-5">
        <div className="services_list flex items-center justify-around md:mt-14 md:mb-10 my-6">
          <Code size={34} />
          <Figma size={34} />
          <Component size={34} />
          <Cpu size={34} />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <small className='text-xs text-theme-300 uppercase'>Specialization</small>
            <h5 className='text-2xl font-[600] capitalize'>Services offering</h5>
          </div>

          <div className="icon">
            <img src={Icon} alt="icon" loading='lazy' />
          </div>
        </div>
      </motion.div>

    </>
  )
}

export default ServicesCompoent