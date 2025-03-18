import React from 'react'
import ProjectCard from '../../Components/ProjectCard'
import { Link } from 'react-router-dom'

const Works = () => {
    return (
        <div>
            <div className="grid  lg:grid-cols-3 items-start gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 order-1 lg:order-none">
                    <Link>
                        <ProjectCard Poster={"https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project1.jpeg"} label={'web designing'} title={'Dynamic'} />
                    </Link>

                    <Link>
                        <ProjectCard Poster={"https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project2.jpeg"} label={'web designing'} title={'Dynamic'} />
                    </Link>
                </div>

                <div className="grid lg:col-span-2 row-span-0">
                    <div className="flex items-center">
                        <span>
                            <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png" width={'100%'} alt="" />
                        </span>
                        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white'>All Projects</h1>
                        <span>
                            <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png" width={'100%'} alt="" />
                        </span>
                    </div>

                    <div className="grid  sm:grid-cols-2 gap-6 mt-6">
                        <Link>
                            <ProjectCard Poster={"https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project3.jpeg"} label={'web designing'} title={'Dynamic'} />
                        </Link>

                        <Link>
                            <ProjectCard Poster={"https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project4.jpeg"} label={'web designing'} title={'Dynamic'} />
                        </Link>

                        <Link>
                            <ProjectCard Poster={"https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project5.jpeg"} label={'web designing'} title={'Dynamic'} />
                        </Link>

                        <Link>
                            <ProjectCard Poster={"https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/project6.jpeg"} label={'web designing'} title={'Dynamic'} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works
