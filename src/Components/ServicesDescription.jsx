import { motion } from 'motion/react'
import React from 'react'
import { fadeInUp } from '../lib/FramerMotion'
import { useMediaQuery } from 'react-responsive';


const ServicesDescription = ({ title, details }) => {
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
                className="bg-custom p-8 pb-14">
                <h5 className='uppercase text-md font-[600] pb-2 text-theme-400'>{title}</h5>
                <p className='text-base leading-7'>{details}</p>
            </motion.div>
        </>
    )
}

export default ServicesDescription