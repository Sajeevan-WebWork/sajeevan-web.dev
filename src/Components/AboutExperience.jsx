import React from 'react'
import { motion } from 'motion/react'


const AboutExperience = () => {
    return (
        <>
            <motion.div
                initial={{
                    y: -50,
                    scale: .7
                }}
                animate={{
                    y: 0,
                    scale: 1
                }}

                transition={{ duration: .8, }} className="bg-custom p-6">
                <h5 className='text-xl font-[600] pb-6'>Experience</h5>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <small className='text-base font-medium text-theme-400'>2021 - 2023</small>
                        <h3 className='text-lg font-[600] pt-5 pb-1 capitalize text-theme-200'>designer & developer</h3>
                        <small className='text-sm font-normal text-theme-300'>Nilaapps</small>
                    </div>

                    <div className="flex flex-col">
                        <small className='text-base font-medium text-theme-400'>2023 - 205</small>
                        <h3 className='text-lg font-[600] pt-5 pb-1 capitalize text-theme-200'>web & frontend developer</h3>
                        <small className='text-sm font-normal text-theme-300'>Nilaapps</small>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default AboutExperience
