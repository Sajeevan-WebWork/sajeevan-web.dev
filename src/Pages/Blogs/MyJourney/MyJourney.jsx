import React from 'react'
import { Link } from 'react-router-dom'
import StarText from '../../../Components/StarText'
import AboutMySkills from '../../../lib/AboutMySkills'
import { motion } from 'motion/react'


const MyJourney = () => {
    return (
        <>
            <div className="flex items-center gap-5 mb-10">
                <Link to={'/'} className='text-base text-theme-500 font-semibold'>Home</Link> -
                <p className='text-base text-theme-200'>My Journey</p>
            </div>

            <StarText title={'A Passionate Frontend Developer and Tech Enthusiast'} style={' lg:text-2xl lg:leading-16'} />

            <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 pt-20">
                <div className='col-span-2'>
                    <div>
                        <img className='w-full rounded-lg' width={'100%'} height={'100%'} src="https://img.freepik.com/free-photo/shallow-focus-from-male-standing-pathway-middle-grassy-field_181624-7323.jpg?uid=P144082521&ga=GA1.1.810160377.1738327101&semt=ais_keywords_boost" alt="" />
                    </div>

                    <div
                        className="my-5 py-6">
                        <h2 className="text-2xl font-semibold">Introduction</h2>
                        <p className='text-base text-theme-200 py-3'>I'm a dedicated and passionate frontend developer with a strong background in web development, particularly in React and the MERN stack. With years of experience in UI development and web technologies, I'm committed to crafting seamless, user-friendly, and visually appealing digital experiences. His expertise spans multiple domains, including JavaScript, CSS, HTML, and modern frontend frameworks.</p>
                    </div>

                    <div className="my-5">
                        <div>

                            <h2 className="text-2xl font-semibold">Technical Expertise</h2>
                            <p className='text-base text-theme-200 py-3'>I have gained substantial knowledge in frontend development, continuously improving his skills and adapting to new industry trends. His key areas of expertise include:</p>
                        </div>

                        {
                            AboutMySkills.map((section, index) => (
                                <div className="mt-4" key={index}>
                                    <h3 className="text-xl font-semibold">{section.title}</h3>
                                    {section.description && <p className='text-base py-2'>{section.description}</p>}
                                    <ul className='list-decimal ml-10 my-3'>
                                        {
                                            section.listing.map((item, indx) => (
                                                <li key={indx} className='text-base py-2'>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>


                    <div className="my-5 py-5">
                        <h2 className="text-2xl font-semibold">Projects and Work Experience</h2>
                        <div className="mt-4">
                            <h4 className='text-xl font-semibold'>1. Job Portal Development</h4>
                            <p className='text-theme-200 py-3'>I'm actively working on a job portal, creating a seamless experience for job seekers and employers. The project includes features such as dynamic job listings, user authentication, and pagination using a JSON server.</p>
                        </div>

                        <div className="mt-4">
                            <h4 className='text-xl font-semibold'>2. Edrevel LMS Blog & Website Enhancements</h4>
                            <p className='text-theme-200 py-3'>He has contributed significantly to Edrevel, an LMS platform, by writing insightful blogs, improving web accessibility, and enhancing UI/UX components.</p>
                        </div>

                        <div className="mt-4">
                            <h4 className='text-xl font-semibold'>3. React-Based Web Applications</h4>
                            <p className='text-theme-200 py-3'>From creating reusable components like DataTableComponent and SideBar to working on complex navigation structures and breadcrumb updates, I have built scalable solutions using React.js.</p>
                        </div>
                    </div>

                    <div className="my-4">
                        <h2 className="text-2xl font-semibold">Conclusion</h2>
                        <p className='text-theme-200 py-3'>With a strong passion for technology, I'm on a journey to becoming a highly skilled full-stack developer. His dedication to learning, problem-solving mindset, and commitment to web accessibility make him a valuable asset to any team or project. Keep an eye on his work as he continues to innovate and push boundaries in frontend development!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyJourney
