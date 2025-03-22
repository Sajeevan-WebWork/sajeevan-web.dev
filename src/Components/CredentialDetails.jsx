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
                <p className='text-base leading-7 font-normal'>As a passionate and results-driven Frontend Developer with 3.8 years of experience, I specialize in creating dynamic and user-friendly web applications. With a solid foundation in HTML, CSS, JavaScript, and Bootstrap, along with modern frontend frameworks and libraries like React, Angular, Tailwind CSS, Angular Material, and Shadcn UI, I focus on delivering high-quality, responsive designs and seamless user experiences.

                    I am always eager to connect with like-minded professionals, share insights, and explore new opportunities for growth in the field of frontend development. Let’s connect!</p>
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
                    <p className='text-base font-medium text-theme-400 pb-3'>2021 - 2023</p>
                    <h4 className='text-xl font-[600] text-blue-500'>UI Designer & web Develope</h4>
                    <p className='text-sm my-2 text-theme-400'>Nilaapps</p>
                    <p className='text-base leading-7 font-normal'>As a UI Designer & Web Developer, I was responsible for designing and developing user-friendly, responsive, and visually appealing web interfaces. My role involved creating engaging UI/UX designs, implementing front-end development best practices, and ensuring seamless user experiences across various devices.</p>

                    <div className="mt-6">
                        <h4 className='text-base font-semibold text-theme-300'>
                            Key Responsibilities:
                        </h4>
                        <ul className='list-decimal ml-5 my-3'>
                            <li className='text-sm py-2 font-normal'>Designed intuitive UI/UX layouts with a focus on usability and accessibility.</li>
                            <li className='text-sm py-2 font-normal'>Developed responsive websites using HTML, CSS, JavaScript, and modern frameworks.</li>
                            <li className='text-sm py-2 font-normal'>Collaborated with cross-functional teams to transform design concepts into functional web applications.</li>
                            <li className='text-sm py-2 font-normal'>Optimized website performance and ensured cross-browser compatibility.</li>
                            <li className='text-sm py-2 font-normal'>Implemented interactive elements to enhance user engagement.</li>
                        </ul>
                    </div>

                    <div className="mt-6">
                        <h4 className='text-base font-semibold text-theme-300'>
                            Technologies Used:
                        </h4>
                        <ul className='list-decimal ml-5 mt-3'>
                            <li className='text-sm py-2 font-normal'>HTML, CSS, JavaScript (ES6+)</li>
                            <li className='text-sm py-2 font-normal'>React.js, Bootstrap, Tailwind CSS</li>
                            <li className='text-sm py-2 font-normal'>Adobe XD, Figma (UI/UX Design)</li>
                            <li className='text-sm py-2 font-normal'>WordPress, CMS integration</li>
                        </ul>
                    </div>
                </div>

                <div className='mb-15'>
                    <p className='text-base font-medium text-theme-400 pb-3'>2023 - 2025</p>
                    <h4 className='text-xl font-[600] text-blue-500'>Front-End Developer</h4>
                    <p className='text-sm my-2 text-theme-400'>Nilaapps</p>
                    <p className='text-base leading-7 font-normal'>As a Front-End Developer, I design and develop visually appealing, highly responsive, and interactive web applications. I specialize in HTML, CSS, JavaScript, and React.js, ensuring seamless user experiences across all devices. My expertise includes creating reusable components, optimizing performance, integrating APIs, and implementing accessibility standards. I focus on writing clean, efficient, and scalable code while collaborating with designers and backend teams to deliver high-quality digital solutions.</p>

                    <div className="mt-6">
                        <h4 className='text-base font-semibold text-theme-300'>
                            Key Responsibilities & Contributions:
                        </h4>
                        <ul className='list-decimal ml-5 mt-3'>
                            <li className='text-sm py-2 font-normal'>Developed and maintained dynamic web applications with React.js, ensuring high performance and scalability.</li>
                            <li className='text-sm py-2 font-normal'>Implemented responsive and accessible UI components, improving user engagement and experience.</li>
                            <li className='text-sm py-2 font-normal'>Worked on state management using Redux, Context API, and optimized app performance.</li>
                            <li className='text-sm py-2 font-normal'>Integrated RESTful APIs and managed asynchronous data fetching using Axios & Fetch API.</li>
                            <li className='text-sm py-2 font-normal'>Developed reusable custom components and design systems, maintaining code consistency.</li>
                            <li className='text-sm py-2 font-normal'>Ensured cross-browser compatibility and mobile responsiveness for a seamless experience.</li>
                            <li className='text-sm py-2 font-normal'>Collaborated with designers and backend teams to deliver full-stack solutions.</li>
                            <li className='text-sm py-2 font-normal'>Implemented SEO best practices and web performance optimizations for faster load times.</li>
                            <li className='text-sm py-2 font-normal'>Worked with version control (Git & GitHub) for efficient collaboration and code management.</li>
                            <li className='text-sm py-2 font-normal'>Enhanced web accessibility (WCAG standards) to ensure usability for all users.</li>
                        </ul>
                    </div>
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
