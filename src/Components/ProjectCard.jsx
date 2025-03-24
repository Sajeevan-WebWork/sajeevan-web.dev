import React from 'react'
import Icon from '/icon.svg'
import { fadeInUp } from '../lib/FramerMotion'
import { useMediaQuery } from 'react-responsive';
import { motion } from 'motion/react'
import '../app.css'


const ProjectCard = ({ Poster, label, title }) => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
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
                <div className="Project__Poster overflow-hidden relative ">
                    {/* <img
                        src={Poster}
                        className="rounded-3xl h-[15rem] w-full object-cover "
                        alt="Project Poster"
                        loading='lazy'
                    /> */}
                    <video src={Poster} className="rounded-3xl h-[15rem] w-full object-cover "
                        alt="Project Poster"
                        loading='lazy'
                        autoPlay={true}
                        muted
                        preload="none"
                        playsInline
                        loop></video>

                    <span className='absolute poster_overlay top-0 h-full w-full group bg-theme-900/70 rounded-3xl flex items-center justify-center text-3xl font-bold tracking-wider transition-all duration-300 uppercase'>
                        <span className='poster__text'>open</span>
                    </span>
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
