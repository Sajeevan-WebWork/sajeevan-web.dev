import React from 'react'
import SelfSummaryComponent from '../../Components/SelfSummaryComponent'
import EducationComponent from '../../Components/EducationComponent'
import AboutExperience from '../../Components/AboutExperience'
import BlogComponent from '../../Components/BlogComponent'
import ServicesCompoent from '../../Components/ServicesCompoent'
import SocialProfileComponet from '../../Components/SocialProfileComponet'
import { Link } from 'react-router-dom'
import WorkTogetherComponent from '../../Components/WorkTogetherComponent'
import CredentialsComponent from '../../Components/CredentialsComponent'

const AboutPage = () => {
  return (
    <div>

      <div className="grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 grid-rows-1 gap-10">
        <div className='bg-custom p-6'>
          <img className='h-4/4   object-cover rounded-2xl w-full' src="https://img.freepik.com/free-vector/profile-picture-template-design_742173-22027.jpg?t=st=1742243153~exp=1742246753~hmac=ebf4348bfd7851542d7eae2f0ca67ffb3840c4af97df1b6104c53930e9e9c136&w=740" alt="" />
        </div>
        <div className="lg:col-span-2">
          <SelfSummaryComponent />
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2  grid-rows-1 gap-4 my-10">
        <div>
          <AboutExperience />
        </div>
        <div>
          <EducationComponent />
        </div>
      </div>

      {/*  */}

      <div className="grid lg:grid-cols-4 lg:grid-rows-1 gap-6 mt-6 about__page">
        <Link className='sm:col-start-1 sm:col-span-1 col-span-2'>
          <SocialProfileComponet />
        </Link>

        <Link className="col-span-2 lg:col-start-2 row-start-1">
          <WorkTogetherComponent />
        </Link>

        <div className="sm:col-start-2 lg:col-start-4 lg:row-start-1 sm:col-span-1 col-span-2">
          <CredentialsComponent />
        </div>

      </div>
    </div>
  )
}

export default AboutPage
