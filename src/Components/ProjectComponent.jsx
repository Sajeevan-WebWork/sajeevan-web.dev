import { fadeInUp } from '../lib/FramerMotion'
import Icon from '/icon.svg'
import Project1 from '/Project-thumbnail.webp'
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
import { useState, useEffect, useRef } from "react";
import { h1 } from 'motion/react-client'

const ProjectComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={fadeInUp.transition({ isMobile })}
        className="flex flex-col gap-6 bg-custom py-8 px-5">
        <Swiper className="signature signature w-full"
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          ref={videoRef}>

          {
            isVisible ? (
              <>
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
                    </SwiperSlide>
                  ))
                }

              </>
            ) :
              (
                <img src={"https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?t=st=1742903208~exp=1742906808~hmac=b9be44468e83ac0a4a44e323c693c278782cdc3932ae9bc23f92988096f14f6a&w=740"} alt="Project1" className='rounded-lg h-2/3 w-full object-cover' />
              )
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
