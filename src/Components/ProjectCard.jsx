import React from 'react'
import Icon from '/icon.svg'
import { motion } from 'motion/react'


const ProjectCard = ({ Poster, label, title }) => {
    return (
        <>
            <motion.div
                initial={{
                    y: -50,
                    scale: .8,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    scale: 1,
                    opacity: 1
                }}

                transition={{ duration: .2, }} className="bg-custom p-6 hover:shadow-2xl hover:scale-102 hover:-translate-y-1.5 transition-all duration-500 group overflow-hidden">
                <div className="poster overflow-hidden">
                    <img
                        src={Poster}
                        className="rounded-3xl h-full w-full object-cover "
                        alt="Project Poster"
                        loading='lazy'
                    />
                </div>

                <div className="flex items-start justify-between pt-5">
                    <div className="flex flex-col gap-1">
                        <small className="text-sm font-medium text-theme-300 uppercase">{label}</small>
                        <h3 className="text-2xl font-semibold capitalize">{title}</h3>
                    </div>

                    <img src={Icon} alt="Project Icon" className="w-10 h-10" loading='lazy' />
                </div>
            </motion.div>

        </>
    )
}

export default ProjectCard
