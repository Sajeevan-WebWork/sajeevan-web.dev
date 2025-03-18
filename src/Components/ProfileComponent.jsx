import React from 'react'
import Icon from '/icon.svg'

import { motion } from 'motion/react'

const ProfileComponent = () => {
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

        className="bg-custom  md:py-[50px] md:px-[46px] p-6 pb-15 ">
        <div className="grid sm:grid-cols-2 items-center gap-10 md:gap-6">
          <div className="poster">
            {/* <img className='profile-poster h-2/4 lg:h-60  object-cover' width="100%" height={'100%'} src={'/Profile.JPG'} alt="Profile images" loading='lazy' /> */}
            <img className='profile-poster h-90 md:h-80 xl:h-60  object-cover object-top' width="100%" height={'100%'} src={'/profileimages.JPG'} loading='lazy' alt="Profile images" />
            {/* <img className='profile-poster h-2/4 lg:h-60  object-cover' width="100%" height={'100%'} src={'/Profile.JPG'} alt="Profile images" loading='lazy' /> */}
          </div>
          <div className="flex flex-col relative">
            <small className='text-xs font-medium text-theme-300 uppercase'>A Frontend developer</small>
            <h3 className='text-[36px] font-[500] leading-10 py-2'>Sajeevan Balsingam</h3>
            <p className='text-base font-light text-theme-300'>I am a Frontend developer based in chennai, India.</p>
            <i className='absolute right-0 -bottom-10 sm:-bottom-5 md:-bottom-20 lg:-bottom-15 text-theme-400'>
              <img src={Icon} alt="icon" loading='lazy' />
            </i>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default ProfileComponent