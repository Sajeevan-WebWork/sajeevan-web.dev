import React from 'react'
import CredentialProfile from '../../Components/CredentialProfile'
import CredentialDetails from '../../Components/CredentialDetails'

const Credential = () => {
    return (
        <>
        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
                <div className="md:col-span-1">
                    <div className="md:sticky-md-top CredentialProfile">
                        <CredentialProfile />
                    </div>
                </div>
                <div className="md:col-span-2 md:overflow-y-auto md:max-h-screen">
                    <CredentialDetails />
                </div>
            </div>

        </>
    )
}

export default Credential
