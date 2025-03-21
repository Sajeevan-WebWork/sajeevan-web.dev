import React from 'react'
import ServicesList from '../lib/ServicesList'
import { motion } from 'motion/react'
import { fadeInUp } from '../lib/FramerMotion'
import { useMediaQuery } from 'react-responsive'

const ServicesCategories = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    return (
        <>
            <motion.div
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={fadeInUp.transition({ isMobile })}

                className='bg-custom px-6 py-10 flex flex-col gap-10'>
                <motion.ul
                    className="flex flex-col m-auto">
                    {
                        ServicesList.map((item, index) => (
                            <li key={index} className="flex items-start justify-start space-x-2 gap-5 lg:gap-10 my-15">
                                <item.icon size={30} className="block" />
                                <span className='text-lg uppercase font-semibold'>{item.title}</span>
                            </li>
                        ))
                    }
                </motion.ul>
            </motion.div>
        </>
    )
}

export default ServicesCategories
