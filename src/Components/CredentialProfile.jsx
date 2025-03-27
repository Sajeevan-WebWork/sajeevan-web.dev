import { Github, Instagram, Linkedin } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { fadeInUp } from '../lib/FramerMotion'
import { useMediaQuery } from 'react-responsive';


const CredentialProfile = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <>
            <motion.div
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={fadeInUp.transition({ isMobile })}
                className="bg-custom p-6">
                <div className="poster">
                    {/* <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/me.png" className='bg-blue-300 rounded-3xl   object-cover' loading='lazy' alt="Profile Images" /> */}
                    <img src="/profileimages.webp" className='bg-blue-300 rounded-3xl  h-[18rem] w-full object-cover object-top' loading='lazy' alt="Profile Images" />
                </div>

                <div className="flex flex-col justify-center items-center mt-10 gap-4">
                    <h3 className='text-3xl font-medium'>Sajeevan Balasingam</h3>
                    <p className='text-lg text-gray-400'>@sajeevanbalasingam</p>

                    <div className="flex items-center gap-6 my-5">
                        <Link to="https://github.com/Sajeevan-WebWork" target='_blank' className='bg-custom p-4 social__media__icon transition-all duration-500'>
                            <Github size={24} className='social_icon transition-all duration-500' />
                        </Link>

                        <Link to="https://www.linkedin.com/in/sajeevan-frontend-dev/" target='_blank' className='bg-custom p-4 social__media__icon transition-all duration-500'>
                            <Linkedin size={24} className='social_icon transition-all duration-500' />
                        </Link>

                        <Link to={"https://www.instagram.com/__sajeevan_offical__/"} target='_blank' className='bg-custom p-4 social__media__icon transition-all duration-500'>
                            <Instagram size={24} className='social_icon transition-all duration-500' />
                        </Link>
                    </div>

                    <Link to={"/contact"} className='bg-custom capitalize w-full p-3 text-center text-lg CredentialProfileBtn transition-all duration-500'>Contact me</Link>
                </div>
            </motion.div>
        </>
    )
}

export default CredentialProfile
