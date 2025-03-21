import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'motion/react'
import weblogo from '/fire-logo.png'
import { LayoutDashboard, X } from 'lucide-react'


const NavBar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navMenuItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Works", path: "/works" },
    { link: "Contact", path: "/contact" }
  ];

  return (
    <>
      <motion.header
        initial={{
          opacity: 0,
          y: -30
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: .2,
          delay: .2
        }}
        className="flex items-center justify-between py-8 px-4">

        <Link to={'/'} className="logo z-100 flex items-center" onClick={() => setNavOpen(false)}>
          {/* <img src={weblogo} alt="web logo" loading='lazy' className='w-15 z-50 relative' /> */}
          <h3 className='font-custom text-base sm:text-xl font-bold '>sajeevan</h3>
        </Link>


        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-14">
          {
            navMenuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `${isActive ? "text-white" : ""} text-lg transition-all hover:text-white text-theme-600 font-medium`
                }
              >
                {item.link}
              </NavLink>
            ))
          }

        </nav>


        {/* Mobile nav */}
        <nav className={`lg:hidden flex flex-col absolute top-0 pt-[7em] left-0 h-screen mobile__nav w-full items-center gap-14 transition-all duration-400 z-50 bg-theme-900 ${isNavOpen ? "open__nav " : ""}`}>

          {
            navMenuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setNavOpen(!isNavOpen)}
                className={({ isActive }) => `${isActive ? "text-slate-50" : "text-theme-400"} text-lg transition-all hover:text-theme-300 font-medium`} >
                {item.link}
              </NavLink>
            ))
          }
        </nav>

        <div className="flex items-center gap-8">
          <motion.button
            whileTap={{ scale: 0.85 }}
          >
            <Link
              whileTap={{ scale: 0.95 }}
              className='rounded-md bg-[#323232] capitalize z-50 hover:bg-theme-900 hover:rounded-2xl transition-all text-white px-6 py-3 ' to={'/contact'}>let's talk
            </Link>
          </motion.button>
          {
            isNavOpen ? (
              <X
                onClick={() => setNavOpen(!isNavOpen)} className='text-white lg:hidden z-50 cursor-pointer' color='white' />
            ) : (
              <LayoutDashboard
                onClick={() => setNavOpen(!isNavOpen)} className='text-white lg:hidden z-50 cursor-pointer' color='white' />
            )
          }

        </div>

      </motion.header>
    </>
  )
}

export default NavBar
