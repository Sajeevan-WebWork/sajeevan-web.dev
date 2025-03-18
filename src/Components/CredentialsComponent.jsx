import React from 'react'
import { motion } from 'motion/react'
import Icon from '/icon.svg'
import signature from '/signature.png'


const CredentialsComponent = () => {
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

                transition={{ duration: .8, }}
                className="flex flex-col gap-6 bg-custom py-8 px-5">
                <div className="signature">
                    <img src={signature} className='rounded-lg h-2/3 w-full object-cover' alt="signature" />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                        <small className='text-xs text-theme-300 uppercase'>More about me</small>
                        <h5 className='text-2xl font-[600] capitalize'>Credentials</h5>
                    </div>

                    <div className="icon">
                        <img src={Icon} alt="" />
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default CredentialsComponent
