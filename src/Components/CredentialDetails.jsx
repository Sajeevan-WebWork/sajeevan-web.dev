import React from 'react'
import { motion } from 'motion/react'
import { fadeInUp } from '../lib/FramerMotion'
import { useMediaQuery } from 'react-responsive';
import Skills from '../lib/Skills-Data';



const CredentialDetails = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <>
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
                className="about__wrapper mb-10 pb-10">
                <h3 className='text-2xl pb-8 font-[600] uppercase'>About Me</h3>
                <p className='text-base leading-7 font-normal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam omnis dolor iusto aliquid voluptatum, error esse sapiente incidunt vero, quaerat tenetur minus ipsum eveniet ea doloremque suscipit eos obcaecati voluptatem nihil dolores fugit deserunt similique iure? Voluptatibus consequatur vel eveniet quia distinctio nemo eos praesentium asperiores assumenda iste aliquam consectetur mollitia facere magnam, est animi numquam ad modi quibusdam natus cupiditate neque itaque sed reiciendis? Animi eaque odit, quaerat aliquam amet consequatur voluptatem, unde quae, inventore voluptas deleniti natus quibusdam rerum molestias quia facilis quas aspernatur doloremque ducimus aliquid! Dolorem cupiditate reiciendis facere dolore, nemo eum exercitationem molestias temporibus quod!</p>
            </motion.div>


            <motion.div
                initial={{
                    y: -100,
                    opacity: 0
                }}

                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{ delay: .3 }}
                className="Exprience__wrapper mb-5 pb-5">
                <h3 className='text-2xl pb-8 font-[600] uppercase'>Experience</h3>

                <div className='mb-15'>
                    <p className='text-base font-medium text-theme-400 pb-3'>2008 - 2018</p>
                    <h4 className='text-xl font-[600] text-blue-500'>UI Designer & Develope</h4>
                    <p className='text-sm my-2 text-theme-400'>Nilaapps</p>
                    <p className='text-base leading-7 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione maxime obcaecati quaerat optio necessitatibus quia cupiditate reprehenderit recusandae aliquid. Error rem voluptatibus magnam perspiciatis dolorem quaerat, reiciendis maxime excepturi earum provident nulla laudantium velit nemo ducimus dolores similique animi magni.</p>
                </div>

                <div className='mb-15'>
                    <p className='text-base font-medium text-theme-400 pb-3'>2017 - 2023</p>
                    <h4 className='text-xl font-[600] text-blue-500'>Front-End Developer</h4>
                    <p className='text-sm my-2 text-theme-400'>Nilaapps</p>
                    <p className='text-base leading-7 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione maxime obcaecati quaerat optio necessitatibus quia cupiditate reprehenderit recusandae aliquid. Error rem voluptatibus magnam perspiciatis dolorem quaerat, reiciendis maxime excepturi earum provident nulla laudantium velit nemo ducimus dolores similique animi magni.</p>
                </div>

                <div className='mb-15'>
                    <p className='text-base font-medium text-theme-400 pb-3'>2008 - 2018</p>
                    <h4 className='text-xl font-[600] text-blue-500'>UI Designer & Develope</h4>
                    <p className='text-sm my-2 text-theme-400'>Nilaapps</p>
                    <p className='text-base leading-7 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione maxime obcaecati quaerat optio necessitatibus quia cupiditate reprehenderit recusandae aliquid. Error rem voluptatibus magnam perspiciatis dolorem quaerat, reiciendis maxime excepturi earum provident nulla laudantium velit nemo ducimus dolores similique animi magni.</p>
                </div>
            </motion.div>


            <motion.div
                initial={{
                    y: -100,
                    opacity: 0
                }}

                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{ delay: .4 }}
                className="Education__wrapper mb-10 pb-10">
                <h3 className='text-2xl pb-8 font-[600] uppercase'>Education</h3>

                <div className='mb-15'>
                    <p className='text-base font-medium text-theme-400 pb-3'>2004 - 2007</p>
                    <h4 className='text-xl font-[600] text-blue-500'>Bachelor Degree in Psychology</h4>
                    <p className='text-sm my-2 text-theme-400'>University of California</p>
                    <p className='text-base leading-7 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione maxime obcaecati quaerat optio necessitatibus quia cupiditate reprehenderit recusandae aliquid. Error rem voluptatibus magnam perspiciatis dolorem quaerat, reiciendis maxime excepturi earum provident nulla laudantium velit nemo ducimus dolores similique animi magni.</p>
                </div>

                <div className='mb-15'>
                    <p className='text-base font-medium text-theme-400 pb-3'>2007 - 2009</p>
                    <h4 className='text-xl font-[600] text-blue-500'>Master Degree in Designing</h4>
                    <p className='text-sm my-2 text-theme-400'>University of Texas</p>
                    <p className='text-base leading-7 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione maxime obcaecati quaerat optio necessitatibus quia cupiditate reprehenderit recusandae aliquid. Error rem voluptatibus magnam perspiciatis dolorem quaerat, reiciendis maxime excepturi earum provident nulla laudantium velit nemo ducimus dolores similique animi magni.</p>
                </div>

                <div className='mb-15'>
                    <p className='text-base font-medium text-theme-400 pb-3'>2008 - 2018</p>
                    <h4 className='text-xl font-[600] text-blue-500'>UI Designer & Develope</h4>
                    <p className='text-sm my-2 text-theme-400'>Nilaapps</p>
                    <p className='text-base leading-7 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione maxime obcaecati quaerat optio necessitatibus quia cupiditate reprehenderit recusandae aliquid. Error rem voluptatibus magnam perspiciatis dolorem quaerat, reiciendis maxime excepturi earum provident nulla laudantium velit nemo ducimus dolores similique animi magni.</p>
                </div>
            </motion.div>

            <motion.div
                initial={{
                    y: -100,
                    opacity: 0
                }}

                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{ delay: .4 }}
                className='md:pb-[13rem]'>
                <h3 className='text-2xl pb-8 font-[600] uppercase'>Skills</h3>

                <div className="grid grid-cols-2 xs:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6">

                    {
                        Skills.map((item, index) => (
                            <div className="flex flex-col gap-2" key={index}>
                                <small className='text-sm font-medium text-theme-400'>{item.percentage}%</small>
                                <h4 className='text-lg font-[600] capitalize'>{item.name}</h4>
                                <small className='text-sm font-medium text-theme-400'>{item.label}</small>
                            </div>
                        ))
                    }
                </div>
            </motion.div>


        </>
    )
}

export default CredentialDetails
