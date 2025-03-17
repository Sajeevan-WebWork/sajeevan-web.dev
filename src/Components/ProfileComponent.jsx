import React from 'react'
import Icon from '/icon.svg'
import { motion } from 'motion/react'

const ProfileComponent = () => {
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

        className="bg-custom  md:py-[50px] md:px-[46px] p-6">
        <div className="grid sm:grid-cols-2 items-center gap-10 md:gap-6">
          <div className="poster">
            <img className='profile-poster h-2/4 lg:h-60  object-cover' width="100%" height={'100%'} src={'https://img.freepik.com/free-photo/bearded-young-man-wearing-shirt_273609-5938.jpg?t=st=1742208217~exp=1742211817~hmac=66065068d979d87816e56465b48dfe97116a197d5f126dc7a8afa5a923f29731&w=996'} alt="Profile images" />
          </div>
          <div className="flex flex-col relative">
            <small className='text-xs font-medium text-theme-300 uppercase'>A Frontend developer</small>
            <h3 className='text-[36px] font-[500] leading-10 py-2'>Sajeevan Balsingam</h3>
            <p className='text-base font-light text-theme-300'>I am a Web Designer based in san francisco.</p>
            <i className='absolute right-0 -bottom-0 sm:-bottom-5 md:-bottom-20 lg:-bottom-15 text-theme-400'>
              <img src={Icon} alt="" />
            </i>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default ProfileComponent