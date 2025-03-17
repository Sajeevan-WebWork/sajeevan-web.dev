import React from 'react'
import Icon from '/icon.svg'
import Icon1 from '/icon-1.png'
import '../app.css'

const WorkTogetherComponent = () => {
    return (
        <>
            <div className="flex items-end bg-custom justify-between pt-20 py-8 px-5 relative overflow-hidden WorkTogetherComponent">
                <img src={Icon1} alt="" className='absolute top-0' />
                <h2 className='text-4xl font-bold leading-12'>Let's <span className='block'>Work <span className='text-blue-500'>Together</span></span></h2>

                <div className="icon">
                    <img src={Icon} alt="" />
                </div>
            </div>
        </>
    )
}

export default WorkTogetherComponent