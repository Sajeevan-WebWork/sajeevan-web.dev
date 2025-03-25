import React, { use } from 'react'
import Icon from '/icon.svg'
import { fadeInUp } from '../lib/FramerMotion'
import { useMediaQuery } from 'react-responsive';
import { motion } from 'motion/react'
import { useState, useEffect, useRef } from "react";

import '../app.css'


const ProjectCard = ({ Poster, label, title }) => {
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
            <motion.div
                initial={fadeInUp.initial}
                // animate={fadeInUp.animate}
                transition={fadeInUp.transition({ isMobile })}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-custom p-6 group overflow-hidden">
                <div className="Project__Poster overflow-hidden relative " ref={videoRef}>

                    {
                        isVisible ? (
                            <>
                                <video src={Poster} className="rounded-3xl h-[15rem] w-full object-cover "
                                    alt="Project Poster"
                                    loading='lazy'
                                    autoPlay={true}
                                    muted
                                    preload="none"
                                    playsInline
                                    loop></video>

                                {/* <span className='absolute poster_overlay top-0 h-full w-full group bg-theme-900/70 rounded-3xl flex items-center justify-center text-3xl font-bold tracking-wider transition-all duration-300 uppercase'>
                                    <span className='poster__text'>open</span>
                                </span> */}

                            </>
                        ) :
                            (
                                <img
                                    src={"https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?t=st=1742903208~exp=1742906808~hmac=b9be44468e83ac0a4a44e323c693c278782cdc3932ae9bc23f92988096f14f6a&w=740"}
                                    className="rounded-3xl h-[15rem] w-full object-cover "
                                    alt="Project Poster"
                                // loading='lazy'
                                />
                            )
                    }
                </div>

                <div className="flex items-start justify-between pt-5">
                    <div className="flex flex-col gap-1">
                        <small className="text-sm font-medium text-theme-300 uppercase">{label}</small>
                        <h3 className="text-2xl font-semibold capitalize">{title}</h3>
                    </div>

                    <img src={Icon} alt="Project Icon" className="w-10 h-10" loading='lazy' />
                </div>
            </motion.div>

        </>
    )
}

export default ProjectCard
