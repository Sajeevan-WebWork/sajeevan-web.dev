import React from 'react'
import { motion } from 'motion/react'
import Icon from '/icon.svg'
import { Code, Component, Cpu, Figma } from 'lucide-react'
import { fadeInUp } from '../lib/FramerMotion'
import { useMediaQuery } from 'react-responsive';

const ServicesCompoent = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>

      <motion.div
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={fadeInUp.transition({ isMobile })}
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