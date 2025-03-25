import { fadeInUp } from '../lib/FramerMotion'
import Icon from '/icon.svg'
import Project1 from '/Project-thumbnail.jpg'
import { motion } from 'motion/react'
import React from 'react'
import { useMediaQuery } from 'react-responsive';

import { Swiper, SwiperSlide } from "swiper/react"; // Swiper core and required modules
import "swiper/css"; // Swiper styles

// Optional Swiper modules
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Project from '../lib/ProjectLists'
import { h1 } from 'motion/react-client'

const ProjectComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      <motion.div initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={fadeInUp.transition({ isMobile })}
        className="flex flex-col gap-6 bg-custom py-8 px-5">
        <Swiper className="signature signature w-full"
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
        >
          {
            Project.map((item, index) => (
              <SwiperSlide key={index} className="w-full flex justify-center items-center">
                <video src={item.poster}
                  alt="Project Poster"
                  className="rounded-2xl w-full  object-cover h-[15rem] sm:h-[10rem]"
                  autoPlay
                  muted
                  preload="none"
                  playsInline
                  loop></video>
                {/* <img src={item.poster} alt="Project1" className='rounded-lg h-2/3 w-full object-cover' loading='lazy' /> */}
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <small className='text-xs text-theme-300 uppercase'>ShowCase</small>
            <h5 className='text-2xl font-[600] capitalize'>Projects</h5>
          </div>

          <div className="icon">
            <img src={Icon} alt="icon" loading='lazy' />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default ProjectComponent
