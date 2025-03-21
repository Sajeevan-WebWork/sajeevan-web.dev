import React from 'react'
import ServicesCategories from '../../Components/ServicesCategories'
import StarText from '../../Components/StarText'
import ServicesDescription from '../../Components/ServicesDescription'
import { motion } from 'motion/react'
import { useMediaQuery } from 'react-responsive';
import { fadeInUp } from '../../lib/FramerMotion'


const ServiceOfferings = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ServicesCategories />
                <div className='md:col-span-2 grid gap-6 content-start justify-items-center'>
                    <StarText fontSize={'lg:text-7xl'} title={'My Offerings'} />
                    <motion.div
                        initial={fadeInUp.initial}
                        animate={fadeInUp.animate}
                        transition={fadeInUp.transition({ isMobile })}
                        className='bg-custom p-6 gap-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                        <ServicesDescription title={'Photography'} details={'Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.'} />
                        <ServicesDescription title={'Photography'} details={'Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.'} />
                        <ServicesDescription title={'Photography'} details={'Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.'} />
                        <ServicesDescription title={'Photography'} details={'Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.'} />
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default ServiceOfferings
