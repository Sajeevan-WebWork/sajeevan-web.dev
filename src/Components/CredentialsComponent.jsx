import React from 'react'
import Icon from '/icon.svg'


const CredentialsComponent = () => {
    return (
        <>
            <div className="flex flex-col gap-6 bg-custom py-8 px-5">
                <div className="signature">
                    <img src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/bg1.png" className='h-3/4 w-full object-cover' alt="signature" />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                        <small className='text-xs text-theme-300 uppercase'>More about me</small>
                        <h5 className='text-2xl font-[600] capitalize'>Credentials</h5>
                    </div>

                    <div className="icon">
                        <img src={Icon} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CredentialsComponent
