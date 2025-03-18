import React from 'react'
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

const ContactInfo = () => {

    const contactInfo = [
        {
            icon: Mail,
            label: "mail me",
            info: "sajeevan.techwork@gmail.com",
        },

        {
            icon: Phone,
            label: "Contact me",
            info: "+918220512105",
        },

        {
            icon: MapPin,
            label: "Location",
            info: "22 Baker Street, Texas United States W1U 3BW",
        }
    ]
    return (
        <>
            <div className="flex flex-col md:flex-row lg:flex-col gap-20 items-start h-full">
                <div>
                    <motion.h5
                        initial={{
                            y: -100,
                            opacity: 0
                        }}

                        animate={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{ delay: .1 }}

                        className='text-md font-medium uppercase pb-8'>contact info</motion.h5>
                    <div className="flex flex-col gap-10">
                        {
                            contactInfo.map((item, index) => (
                                <motion.div
                                    initial={{
                                        y: -100,
                                        opacity: 0
                                    }}

                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    transition={{ delay: .2 }}
                                    className="flex items-center gap-10" key={index}>
                                    <div className="flex-0 icon bg-custom rounded-xl p-6 w-18 h-18 flex items-center justify-center">
                                        <item.icon size={30} />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <small className='text-xs uppercase text-theme-500 font-[600]'>{item.label}</small>
                                        <a className='text-base font-medium text-theme-100' href={`mailto:${item.info}`}>{item.info}</a>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>

                <motion.div
                    initial={{
                        y: -100,
                        opacity: 0
                    }}

                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{ delay: .25 }}>
                    <h5 className='text-md font-medium uppercase pb-8'>Social Info
                    </h5>
                    <div className="flex items-center justify-between w-full gap-5">
                        <Link to={'https://github.com/Sajeevan-WebWork'} target='_blank' className="icon p-6 rounded-full bg-theme-800 transition-all duration-300 hover:bg-white group">
                            <Github size={24} className='group-hover:text-black transition-all duration-300' />
                        </Link>

                        <Link to={'https://www.linkedin.com/in/sajeevan-frontend-dev/'} target='_blank' className="icon p-6 rounded-full bg-theme-800 transition-all duration-300 hover:bg-white group">
                            <Linkedin size={24} className='group-hover:text-black transition-all duration-300' />
                        </Link>

                        <Link to={'https://www.instagram.com/__sajeevan_offical__/'} target='_blank' className="icon p-6 rounded-full bg-theme-800 transition-all duration-300 hover:bg-white group">
                            <Instagram size={24} className='group-hover:text-black transition-all duration-300' />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default ContactInfo
