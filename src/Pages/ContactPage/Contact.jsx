import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Contact = () => {


    const contactInfo = [
        {
            icon: Mail,
            label: "mail me",
            info: "sajeevan.techwork@gmail.com",
        },

        {
            icon: Phone,
            label: "Contact me",
            info: "8220512105",
        },

        {
            icon: MapPin,
            label: "Location",
            info: "22 Baker Street, Texas United States W1U 3BW",
        }
    ]
    return (
        <>
            <div className="grid grid-cols-3 gap-6">
                <div className="">
                    <h5 className='text-lg font-medium uppercase pb-8'>contact info</h5>
                    <div className="flex flex-col gap-10">

                        {
                            contactInfo.map((item, index) => (
                                <div className="flex items-center gap-10">
                                    <div className="flex-0 icon bg-custom rounded-xl p-6 w-18 h-18 flex items-center justify-center">
                                        <item.icon size={30} />
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <small className='text-sm uppercase text-theme-400 font-[600]'>{item.label}</small>
                                        <a href={`mailto:${item.info}`}>{item.info}</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-span-2">2</div>
            </div>
        </>
    )
}

export default Contact
