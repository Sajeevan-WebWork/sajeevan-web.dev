import React from 'react'
import { motion } from 'motion/react'
import Icon from '/icon.svg'
import signature from '/signature.png'
import { fadeInUp } from '../lib/FramerMotion'
import { useMediaQuery } from 'react-responsive'


const CredentialsComponent = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    return (
        <>
            <motion.div
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={fadeInUp.transition({ isMobile })}
                className="flex flex-col gap-6 bg-custom py-8 px-5">
                <div className="signature">
                    <img src={signature} className='rounded-lg w-full sm:h-[10rem] object-contain' alt="signature" loading='lazy' />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                        <small className='text-xs text-theme-300 uppercase'>More about me</small>
                        <h5 className='text-2xl font-[600] capitalize'>Credentials</h5>
                    </div>

                    <div className="icon">
                        <img src={Icon} alt="icon" loading='lazy' />
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default CredentialsComponent
