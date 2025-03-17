import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'motion/react'
import weblogo from '/logo.svg'
import { LayoutDashboard, X } from 'lucide-react'

const NavBar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between py-8 px-4">
        <Link to={'/'} className="logo z-100">
          <img src={weblogo} alt="web logo" className='w-20 z-50 relative' />
        </Link>

        <nav className="hidden lg:flex items-center gap-14">

          <NavLink
            to={'/'}
            className={({ isActive }) =>
              `${isActive ? "text-white" : ""} text-lg transition-all hover:text-white text-theme-600`
            }
          >
            Home
          </NavLink>

          <NavLink
            to={'/about'}
            className={({ isActive }) =>
              `${isActive ? "text-white" : ""} text-lg transition-all hover:text-white text-theme-600`
            }
          >
            About
          </NavLink>

          <NavLink
            to={'/works'}
            className={({ isActive }) =>
              `${isActive ? "text-white" : ""} text-lg transition-all hover:text-white text-theme-600`
            }
          >
            Works
          </NavLink>

          <NavLink
            to={'/contact'}
            className={({ isActive }) =>
              `${isActive ? "text-white" : ""} text-lg transition-all hover:text-white text-theme-600`
            }
          >
            Contact
          </NavLink>
        </nav>

        <nav className={`lg:hidden flex flex-col absolute top-0 pt-[7em] left-0 h-full mobile__nav w-full items-center gap-14 transition-all duration-700 z-50 bg-theme-900 ${isNavOpen ? "open__nav " : ""}`}>

          <NavLink
            to={'/'}
            onClick={() => setNavOpen(!isNavOpen)}
            className={({ isActive }) =>
              `${isActive ? "text-slate-50" : "text-theme-400"} text-lg transition-all hover:text-theme-300`
            }
          >
            Home
          </NavLink>

          <NavLink
            to={'/about'}
            onClick={() => setNavOpen(!isNavOpen)}
            className={({ isActive }) =>
              `${isActive ? "text-slate-50" : "text-theme-400"} text-lg transition-all hover:text-theme-300`
            }
          >
            About
          </NavLink>

          <NavLink
            to={'/works'}
            onClick={() => setNavOpen(!isNavOpen)}
            className={({ isActive }) =>
              `${isActive ? "text-slate-50" : "text-theme-400"} text-lg transition-all hover:text-theme-300`
            }
          >
            Works
          </NavLink>

          <NavLink
            to={'/contact'}
            onClick={() => setNavOpen(!isNavOpen)}
            className={({ isActive }) =>
              `${isActive ? "text-slate-50" : "text-theme-400"} text-lg transition-all hover:text-theme-300`
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
          >
            <Link
              whileTap={{ scale: 0.95 }}
              className='rounded-md bg-[#323232] capitalize z-50 hover:bg-theme-900 hover:rounded-2xl transition-all text-white px-6 py-2' to={'/contact'}>let's talk
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
      </header>
    </>
  )
}

export default NavBar
