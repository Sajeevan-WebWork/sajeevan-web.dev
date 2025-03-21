import React from 'react'

const ServicesDescription = ({ title, details }) => {
    return (
        <>
            <div className="bg-custom p-8">
                <h5>{title}</h5>
                <p>{details}</p>
            </div>
        </>
    )
}

export default ServicesDescription