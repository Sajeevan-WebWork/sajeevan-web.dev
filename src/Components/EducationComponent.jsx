import React from 'react'
import { motion } from 'motion/react'

const EducationComponent = () => {
  return (
    <div>
      <div className="bg-custom p-6">
        <h5 className='text-xl font-[600] pb-6'>Education</h5>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <small className='text-base font-medium text-theme-400'>2009 - 2018</small>
            <h3 className='text-lg font-[600] pt-5 pb-1 capitalize text-theme-200'>High school</h3>
            <small className='text-sm font-normal text-theme-300'>VMSJ</small>
          </div>

          <div className="flex flex-col">
            <small className='text-base font-medium text-theme-400'>2018 - Still</small>
            <h3 className='text-lg font-[600] pt-5 pb-1 capitalize text-theme-200'>Self taught learner</h3>
            <small className='text-sm font-normal text-theme-300'>Self Build</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationComponent
