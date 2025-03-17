import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import weblogo from '/logo.svg'
import { LayoutDashboard, X } from 'lucide-react'

const NavBar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between py-8 px-4">
        <Link to={'/'} className="logo">
          <img src={weblogo} alt="web logo" className='w-20' />
        </Link>

        <nav className="hidden lg:flex items-center gap-14">

          <NavLink
            to={'/home'}
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

        <nav className={`lg:hidden flex flex-col absolute top-0 pt-[5em] left-0 h-full mobile__nav w-full items-center gap-14 transition-all duration-700 z-50 bg-theme-900 ${isNavOpen ? "open__nav " : ""}`}>

          <NavLink
            to={'/home'}
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
          <Link className='rounded-xl bg-[#323232] capitalize hover:bg-theme-900 transition-all text-white px-6 py-2' to={'/contact'}>let's talk</Link>
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
