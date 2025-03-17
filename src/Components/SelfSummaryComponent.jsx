import React from 'react'
import Icon from '/icon.svg'
import Icon1 from '/icon-1.png'
import { motion } from 'motion/react'
import '../app.css'
const SelfSummaryComponent = () => {
    return (
        <div>
            <div className="flex items-center">
                <span>
                    <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png" width={'100%'} alt="" />
                </span>
                <h1 className='text-4xl sm:text-5xl lg:text-7xl  font-medium uppercase'>Self-summary</h1>
                <span>
                    <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png" width={'100%'} alt="" />
                </span>
            </div>

            <div className="flex items-end bg-custom justify-between pt-20 mt-6 py-8 px-5 relative overflow-hidden WorkTogetherComponent">
                <img src={Icon1} alt="" className='absolute top-0' />
                <div className="flex flex-col gap-4 mt-4">
                    <h2 className='text-4xl font-[500] leading-12'>Sajeevan Balasingam</h2>
                    <p className='text-base font-medium text-theme-300 leading-7'>Frontend Developer with 3.8 years of experience in building dynamic, user-friendly web applications. Skilled in HTML, CSS, JavaScript, Bootstrap, React, Angular, Tailwind CSS, and more. Focused on creating responsive designs and seamless user experiences. Always open to learning, collaboration, and new opportunities.</p>
                </div>
            </div>
        </div>
    )
}

export default SelfSummaryComponent
