import React from 'react'
import ContactInfo from '../../Components/ContactInfo'
import ContactFrom from '../../Components/ContactFrom'


const Contact = () => {
    return (
        <>
            <div className="grid lg:grid-cols-3 gap-15 ">
                <div className='order-2 lg:order-none'>
                    <ContactInfo />
                </div>
                <div className="lg:col-span-2">
                    <ContactFrom />
                </div>
            </div>
        </>
    )
}

export default Contact
