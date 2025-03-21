import React from 'react'
import ServicesList from '../lib/ServicesList'

const ServicesCategories = () => {
    return (
        <div>
            <div className='bg-custom px-6 py-10 flex flex-col gap-10'>
                <ul className="flex flex-col m-auto">
                    {
                        ServicesList.map((item, index) => (
                            <li key={index} className="flex items-start justify-start space-x-2 gap-5 my-15">
                                <item.icon size={30} className="block" />
                                <span className='text-lg uppercase'>{item.title}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ServicesCategories
