import { motion } from 'motion/react'
import React from 'react'
import { fadeInUp } from '../lib/FramerMotion'
import { useMediaQuery } from 'react-responsive';

const ExperienceComponent = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    return (
        <>
            <motion.div
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={fadeInUp.transition({ isMobile })}
                className="bg-custom py-8 px-6 flex flex-wrap items-center justify-around gap-6">
                <div className="flex flex-col items-center gap-2 bg-custom p-6 md:p-6 xl:p-8">
                    <h2 className='text-3xl font-[600]'>3.8+</h2>
                    <p className='uppercase text-xs text-theme-300 p-0 m-0 leading-3'>Years</p>
                    <p className='uppercase text-xs text-theme-300 p-0 m-0 leading-3'>Experience</p>
                </div>

                <div className="flex flex-col items-center gap-2 bg-custom p-6 md:p-6 xl:p-8">
                    <h2 className='text-3xl font-[600]'>10+</h2>
                    <p className='uppercase text-xs text-theme-300 p-0 m-0 leading-3'>Clients</p>
                    <p className='uppercase text-xs text-theme-300 p-0 m-0 leading-3'>worldwide</p>
                </div>

                <div className="flex flex-col items-center gap-2 bg-custom p-6 md:p-6 xl:p-8">
                    <h2 className='text-3xl font-[600]'>15+</h2>
                    <p className='uppercase text-xs text-theme-300 p-0 m-0 leading-3'>total</p>
                    <p className='uppercase text-xs text-theme-300 p-0 m-0 leading-3'>Projects</p>
                </div>
            </motion.div>
        </>
    )
}

export default ExperienceComponent