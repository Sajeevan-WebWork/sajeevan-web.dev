import React from 'react'
import { motion } from 'motion/react'
const StarText = ({ title, fontSize }) => {
    return (
        <>
            <div className="flex items-center">
                <motion.span initial={{
                    y: -50,
                    scale: .5,
                    opacity: 0
                }}
                    animate={{
                        y: 0,
                        scale: 1,
                        opacity: 1
                    }}

                    transition={{ duration: .3, delay: .2 }}>
                    <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png" width={'100%'} alt="icon" loading='lazy' />
                </motion.span>
                <motion.h1
                    initial={{
                        y: -50,
                        scale: .5,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        scale: 1,
                        opacity: 1
                    }}

                    transition={{ duration: .2, delay: .2 }}
                    className={`${fontSize} text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white`}>{title}</motion.h1>
                <motion.span initial={{
                    y: -50,
                    scale: .5,
                    opacity: 0
                }}
                    animate={{
                        y: 0,
                        scale: 1,
                        opacity: 1
                    }}

                    transition={{ duration: .2, delay: .2 }}>
                    <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png" width={'100%'} alt="icon" loading='lazy' />
                </motion.span>
            </div>
        </>
    )
}

export default StarText