import React from 'react'
import { motion } from 'motion/react'
import { fadeInUp } from '../lib/FramerMotion'
import { useMediaQuery } from 'react-responsive';

const EducationComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <motion.div
      initial={fadeInUp.initial}
      animate={fadeInUp.animate}
      transition={fadeInUp.transition({ isMobile })}
      className="bg-custom p-6">
      <h5 className='text-xl font-[600] pb-6'>Education</h5>
      <div className="flex flex-col gap-4">

        <div className="flex flex-col">
          <small className='text-base font-medium text-theme-400'>2018</small>
          <h3 className='text-lg font-[600] pt-5 pb-1 capitalize text-theme-200'>High School</h3>
          <small className='text-sm font-normal text-theme-300'>VMSJ</small>
        </div>

        <div className="flex flex-col">
          <small className='text-base font-medium text-theme-400'>2018 – Present</small>
          <h3 className='text-lg font-[600] pt-5 pb-1 capitalize text-theme-200'>Self-Taught Learner | Driven by Passion, Built by Experience</h3>
          <small className='text-sm font-normal text-theme-300'>Self Made</small>
        </div>
      </div>
    </motion.div>
  )
}

export default EducationComponent
