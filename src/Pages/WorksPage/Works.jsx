import React from 'react'
import ProjectCard from '../../Components/ProjectCard'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import StarText from '../../Components/StarText'
import Project from '../../lib/ProjectLists'


const Works = () => {
    return (
        <div>
            <div className="grid  lg:grid-cols-3 items-start gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 order-1 lg:order-none">
                    {
                        Project.slice(0, 4).map((item, index) => (
                            item.link ? (
                                <Link to={item.link} target='_blank'>
                                    <ProjectCard Poster={item.poster} label={item.label} title={item.name} />
                                </Link>
                            ) :
                                (
                                    <ProjectCard Poster={item.poster} label={item.label} title={item.name} />

                                )
                        ))
                    }
                </div>

                <div className="grid lg:col-span-2 row-span-0">
                    <StarText title={'All Projects'} />

                    <div className="grid  sm:grid-cols-2 gap-6 mt-6">
                        {
                            Project.slice(4).map((item, index) => (

                                item.link ? (
                                    <Link to={item.link} target='_blank'>
                                        <ProjectCard Poster={item.poster} label={item.label} title={item.name} />
                                    </Link>
                                ) :
                                    (
                                        <ProjectCard Poster={item.poster} label={item.label} title={item.name} />

                                    )
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works
