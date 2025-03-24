import React from 'react'
import SelfSummaryComponent from '../../Components/SelfSummaryComponent'
import EducationComponent from '../../Components/EducationComponent'
import AboutExperience from '../../Components/AboutExperience'
import SocialProfileComponet from '../../Components/SocialProfileComponet'
import { Link } from 'react-router-dom'
import WorkTogetherComponent from '../../Components/WorkTogetherComponent'
import { motion } from 'motion/react'
import CredentialsComponent from '../../Components/CredentialsComponent'
import { fadeInUp } from '../../lib/FramerMotion'
import { useMediaQuery } from 'react-responsive';



const AboutPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>

      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 gap-10">
        <motion.div

          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition({ isMobile })}
          className='bg-custom p-6'>
          <img className='profile-poster h-2/4 lg:h-60  object-cover bg-blue-400' width="100%" height={'100%'} src={'https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/me.png'} alt="Profile images" loading='lazy' />
          {/* <img className='h-[20rem] object-top  object-cover rounded-2xl w-full' src={'/about-profile-img.JPG'} alt="Profile image" loading='lazy' /> */}
        </motion.div>
        <div className="lg:col-span-2">
          <SelfSummaryComponent />
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2  grid-rows-1 gap-4 my-10">
        <div>
          <AboutExperience />
        </div>
        <div>
          <EducationComponent />
        </div>
      </div>

      {/*  */}

      <div className="grid lg:grid-cols-4 lg:grid-rows-1 gap-6 mt-6 about__page">
        <div className='sm:col-start-1 sm:col-span-1 col-span-2'>
          <SocialProfileComponet />
        </div>

        <Link to={'/contact'} className="col-span-2 lg:col-start-2 row-start-1">
          <WorkTogetherComponent />
        </Link>

        <Link to={'/credential'} className="sm:col-start-2 lg:col-start-4 lg:row-start-1 sm:col-span-1 col-span-2">
          <CredentialsComponent />
        </Link>

      </div>
    </>
  )
}

export default AboutPage
