import React from 'react'
import ProfileComponent from '../../Components/ProfileComponent'
import CredentialsComponent from '../../Components/CredentialsComponent'
import ProjectComponent from '../../Components/ProjectComponent'
import TextAnimateComponent from '../../Components/TextAnimateComponent'
import { Link } from 'react-router-dom'
import BlogComponent from '../../Components/BlogComponent'
import ServicesCompoent from '../../Components/ServicesCompoent'
import SocialProfileComponet from '../../Components/SocialProfileComponet'
import WorkTogetherComponent from '../../Components/WorkTogetherComponent'
import ExperienceComponent from '../../Components/ExperienceComponent'

const HomePage = () => {
  return (
    <>
      {/* *************--------------********* */}
      <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-6">
        <Link to={'/about'} className="profile__card ">
          <ProfileComponent />
        </Link>


        <div className="profile__details grid grid-cols-1 gap-4 items-start">
          <div className="text_scrolling w-full cursor-default">
            <TextAnimateComponent />
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-2 gap-6">
            <Link to={'/credential'} className="Credentials">
              <CredentialsComponent />
            </Link>


            <Link to={'/works'} className="projects">
              <ProjectComponent />
            </Link>

          </div>
        </div>
      </div>

      {/* *************--------------********* */}

      <div className="grid lg:grid-cols-4 lg:grid-rows-1 gap-6 mt-6">
        <Link to={'/blogs'} className='sm:col-start-1 sm:col-span-1 col-span-2'>
          <BlogComponent />
        </Link>

        <Link to={'/service'} className="col-span-2 lg:col-start-2 row-start-1">
          <ServicesCompoent />
        </Link>

        <div className="sm:col-start-2 lg:col-start-4 lg:row-start-1 sm:col-span-1 col-span-2">
          <SocialProfileComponet />
        </div>

      </div>

      {/* *************--------------********* */}

      <div className="grid lg:grid-cols-2 gap-10 mt-6">
        <div>
          <ExperienceComponent />
        </div>
        <Link to={'/contact'}>
          <WorkTogetherComponent />
        </Link>
      </div>

    </>
  )
}

export default HomePage
