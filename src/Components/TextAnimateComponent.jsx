import React from 'react'
import '../app.css'
import { motion } from 'motion/react'


const TextAnimateComponent = () => {
    return (
        <motion.div
            initial={{
                width: "0%",
            }}
            animate={{
                width: '100%',
            }}
            transition={{ type: "tween", stiffness: 150, duration: .5, delay: .4 }}
            className='bg-custom px-6 py-4'>
            <div className="marquee">
                <span className='text-xs text-theme-600'>Latest work and <span className='text-theme-200'>features</span>. &nbsp;&nbsp;&nbsp;</span>
                <span className='text-xs text-theme-600'>Latest work and <span className='text-theme-200'>features</span>. &nbsp;&nbsp;&nbsp;</span>
                <span className='text-xs text-theme-600'>Latest work and <span className='text-theme-200'>features</span>. &nbsp;&nbsp;&nbsp;</span>
                <span className='text-xs text-theme-600'>Latest work and <span className='text-theme-200'>features</span>. &nbsp;&nbsp;&nbsp;</span>
            </div>
        </motion.div>
    )
}

export default TextAnimateComponent