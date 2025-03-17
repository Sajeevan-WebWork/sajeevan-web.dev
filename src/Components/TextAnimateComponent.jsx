import React from 'react'
import '../app.css'


const TextAnimateComponent = () => {
    return (
        <div className='bg-custom px-6 py-4'>
            <div class="marquee">
                <span className='text-xs text-theme-600'>Latest work and <span className='text-theme-200'>features</span>. &nbsp;&nbsp;&nbsp;</span>
                <span className='text-xs text-theme-600'>Latest work and <span className='text-theme-200'>features</span>. &nbsp;&nbsp;&nbsp;</span>
                <span className='text-xs text-theme-600'>Latest work and <span className='text-theme-200'>features</span>. &nbsp;&nbsp;&nbsp;</span>
                <span className='text-xs text-theme-600'>Latest work and <span className='text-theme-200'>features</span>. &nbsp;&nbsp;&nbsp;</span>
            </div>
        </div>
    )
}

export default TextAnimateComponent
