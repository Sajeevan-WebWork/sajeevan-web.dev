import Icon from '/icon.svg'
import Project1 from '/Project.avif'
import { motion } from 'motion/react'
import React from 'react'

const ProjectComponent = () => {
  return (
    <>
      <motion.div
        initial={{
          y: -50,
          scale: .7
        }}
        animate={{
          y: 0,
          scale: 1
        }}

        transition={{ duration: .8, }}
        className="flex flex-col gap-6 bg-custom py-8 px-5">
        <div className="signature">
          <img src={Project1} alt="Project1" className='rounded-lg h-2/3 w-full object-cover' />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <small className='text-xs text-theme-300 uppercase'>ShowCase</small>
            <h5 className='text-2xl font-[600] capitalize'>Projects</h5>
          </div>

          <div className="icon">
            <img src={Icon} alt="" />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default ProjectComponent
