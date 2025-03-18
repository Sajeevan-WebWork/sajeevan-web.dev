import { motion } from 'motion/react'
import React from 'react'

const ContactFrom = () => {
    return (
        <>
            <motion.div
                initial={{
                    y: -100,
                    opacity: 0
                }}

                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{ delay: .2 }}
                className="bg-custom p-5 lg:p-10">
                <motion.h2
                    initial={{
                        y: -100,
                        opacity: 0
                    }}

                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{ delay: .2 }}
                    className='text-5xl font-[600] leading-12'>Let's <span>Work <span className='text-blue-500'>Together</span></span></motion.h2>

                <motion.form
                    initial={{
                        y: -100,
                        opacity: 0
                    }}

                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{ delay: .3  }}
                    action="" autoComplete='off' className="form py-8 mt-4 flex gap-6 flex-col">
                    <input type="text" name="name" id="name" placeholder='name*' className='px-5 py-5 form__input focus:shadow-2xl transition-all duration-300' />
                    <input type="text" name="name" id="name" placeholder='Email*' className='px-5 py-5 form__input focus:shadow-2xl transition-all duration-300' />
                    <input type="text" name="name" id="name" placeholder='Your Subject*' className='px-5 py-5 form__input focus:shadow-2xl transition-all duration-300' />
                    <input type="text" name="name" id="name" placeholder='Your Message*' className='px-5 py-5 form__input focus:shadow-2xl transition-all duration-300' />

                    <button className='w-full bg-theme-600 px-5 py-4 rounded-xl hover:bg-theme-950 transition-all duration-500 cursor-pointer'>Sent Message</button>
                </motion.form>
            </motion.div>
        </>
    )
}

export default ContactFrom