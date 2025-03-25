import { motion } from 'motion/react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const ContactFrom = () => {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
    const [isloading, setisloading] = useState(false)

    const API_URL = window.location.hostname === "sajeevan-web-dev.web.app" ? import.meta.env.VITE_API_URL : "http://localhost:5000";
    const API_KEY = import.meta.env.VITE_API_SECRET_KEY;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setisloading(true);

        try {
            const res = await fetch(`${API_URL}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": API_KEY
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message);
            }

            toast.success(data.message, {
                style: {
                    maxWidth: "800px"
                }
            });
            setFormData({ name: "", email: "", subject: "", message: "", });
        } catch (error) {
            toast.error(error.message);
        } finally {
            setFormData({ name: "", email: "", subject: "", message: "", });
            setisloading(false);
        }
    };
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
                className="bg-custom p-2 py-6 sm:p-5 lg:p-10">
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
                    className='text-5xl font-[600] leading-16 lg:leading-12'>Let's <span>Work <span className='text-blue-500'>Together</span></span></motion.h2>

                <motion.form
                    initial={{
                        y: -100,
                        opacity: 0
                    }}

                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{ delay: .3 }}

                    onSubmit={handleSubmit}
                    action="post" autoComplete='off' className="form py-8 mt-4 flex gap-6 flex-col">
                    <input type="text" name="name" id="name" placeholder='name*' className='px-5 py-5 form__input focus:shadow-2xl focus:border-2  focus:border-cyan-300 transition-all duration-300' onChange={handleChange} value={formData.name} required />
                    <input type="email" name="email" id="email" placeholder='Email*' className='px-5 py-5 form__input focus:shadow-2xl transition-all duration-300' onChange={handleChange} value={formData.email} required />
                    <input type="text" name="subject" id="subject" placeholder='Your Subject*' className='px-5 py-5 form__input focus:shadow-2xl transition-all duration-300' onChange={handleChange} value={formData.subject} required />
                    <textarea rows={6} type="text" name="message" id="message" placeholder='Your Message*' className='resize-none px-5 py-5 form__input focus:shadow-2xl transition-all duration-300' onChange={handleChange} value={formData.message} required />

                    <button type='submit' className='w-full bg-theme-600 text-center flex items-center justify-center px-5 py-4 rounded-xl hover:bg-theme-50 hover:text-theme-900 transition-all duration-500 cursor-pointer'>
                        {
                            isloading ?
                                <div role="status" className='text-center flex items-center'>
                                    <svg aria-hidden="true" class="w-8 h-8 text-gray-900 animate-spin  fill-blue-100" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span class="sr-only">Loading...</span>
                                </div>
                                : ` Sent Message `

                        }
                    </button>
                </motion.form>
            </motion.div>
        </>
    )
}

export default ContactFrom