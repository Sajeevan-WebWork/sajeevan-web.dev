import React from 'react'
import ServicesCategories from '../../Components/ServicesCategories'
import StarText from '../../Components/StarText'
import ServicesDescription from '../../Components/ServicesDescription'
import { motion } from 'motion/react'
import { useMediaQuery } from 'react-responsive';
import { fadeInUp } from '../../lib/FramerMotion'
import ServicesList from '../../lib/ServicesList'


const ServiceOfferings = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start">
                <StarText style={'lg:text-7xl md:hidden '} title={'My Offerings'} />
                <ServicesCategories />
                <div className='md:col-span-2 grid gap-6 content-start justify-items-center'>
                    <StarText style={'lg:text-7xl hidden md:flex'} title={'My Offerings'} />
                    <motion.div
                        initial={fadeInUp.initial}
                        animate={fadeInUp.animate}
                        transition={fadeInUp.transition({ isMobile })}
                        className='bg-custom p-4 py-8 sm:p-6 gap-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>

                        {
                            ServicesList.map((item, index) => (
                                <ServicesDescription title={item.title} details={item.description} />
                            ))
                        }
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default ServiceOfferings
