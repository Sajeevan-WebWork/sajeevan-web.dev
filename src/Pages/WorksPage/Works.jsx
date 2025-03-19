import React from 'react'
import ProjectCard from '../../Components/ProjectCard'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'


const Works = () => {
    return (
        <div>
            <div className="grid  lg:grid-cols-3 items-start gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 order-1 lg:order-none">
                    <Link>
                        <ProjectCard Poster={"/Project-Mystudio.png"} label={'web designing'} title={'Mystudio'} />
                    </Link>

                    <Link>
                        <ProjectCard Poster={"/Project-Edrevel.png"} label={'web designing'} title={'Edrevel'} />
                    </Link>
                </div>

                <div className="grid lg:col-span-2 row-span-0">
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

                            transition={{ duration: .3, delay: 1 }}>
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

                            transition={{ duration: .2, delay: 1 }}
                            className='text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white'>All Projects</motion.h1>
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

                            transition={{ duration: .2, delay: 1 }}>
                            <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png" width={'100%'} alt="icon" loading='lazy' />
                        </motion.span>
                    </div>

                    <div className="grid  sm:grid-cols-2 gap-6 mt-6">
                        <Link>
                            <ProjectCard Poster={"/Project-Technogems.png"} label={'web designing'} title={'Technogems'} />
                        </Link>

                        <Link>
                            <ProjectCard Poster={"https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project4.jpeg"} label={'web designing'} title={'Textiles'} />
                        </Link>

                        <Link>
                            <ProjectCard Poster={"https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project5.jpeg"} label={'web designing'} title={'Nextec'} />
                        </Link>

                        <Link>
                            <ProjectCard Poster={"https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project6.jpeg"} label={'web designing'} title={'login Auth'} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works
