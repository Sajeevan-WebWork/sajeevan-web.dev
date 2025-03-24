import React from 'react'
import Icon from '/icon.svg'
import { Github, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import '../app.css'
import { fadeInUp } from '../lib/FramerMotion'
import { useMediaQuery } from 'react-responsive';

const SocialProfileComponet = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <motion.div
      initial={fadeInUp.initial}
      animate={fadeInUp.animate}
      transition={fadeInUp.transition({ isMobile })}
      className="flex flex-col gap-6 bg-custom px-5 pb-6">
      <div className="social__media flex items-center py-8 px-4 flex-wrap justify-around mt-5 mb-5 bg-custom gap-2">
        <Link to="https://github.com/Sajeevan-WebWork" target='_blank' className="p-5 transition-all duration-700 social__media__icon group bg-custom">
          <Github size={30} className='group-hover:text-black transition-all duration-700 social_icon' />
        </Link>
        <Link to="https://www.linkedin.com/in/sajeevan-frontend-dev/" target='_blank' className="p-5 transition-all duration-700 social__media__icon group bg-custom">
          <Linkedin size={30} className='group-hover:text-black transition-all duration-700 social_icon' />
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <small className='text-xs text-theme-300 uppercase'>Stay with me</small>
          <h5 className='text-2xl font-[600] capitalize'>Profiles</h5>
        </div>

        <div className="icon">
          <img src={Icon} alt="icon" loading='lazy' />
        </div>
      </div>
    </motion.div>
  )
}

export default SocialProfileComponet