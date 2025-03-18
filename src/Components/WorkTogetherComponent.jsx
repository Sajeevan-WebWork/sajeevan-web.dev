import React from 'react'
import Icon from '/icon.svg'
import Icon1 from '/icon-1.png'
import { motion } from 'motion/react'
import '../app.css'

const WorkTogetherComponent = () => {
    return (
        <>
            <motion.div
                initial={{
                    y: -50,
                    scale: .7,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    scale: 1,
                    opacity: 2
                }}

                transition={{ duration: .8, }}
                className="flex items-end bg-custom justify-between pt-20 py-8 px-5 relative overflow-hidden WorkTogetherComponent">
                <img src={Icon1} alt="icon" className='absolute top-0' loading='lazy' />
                <h2 className='text-4xl font-bold leading-12'>Let's <span className='block'>Work <span className='text-blue-500'>Together</span></span></h2>

                <div className="icon">
                    <img src={Icon} alt="icon" loading='lazy' />
                </div>
            </motion.div>
        </>
    )
}

export default WorkTogetherComponent