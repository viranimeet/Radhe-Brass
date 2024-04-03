import React from 'react'
import Aboutusbanner from './Aboutusbanner'
import About from './About'
import Header from '../components/Header'
import CompanyProfile from './CompanyProfile'

const Aboutus = () => {
    return (
        <div>
            <Header />
            <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-x-8 mt-8 md:mt-16'>
                {/* Link to /company-profile */}
                <a href="/about" className="text-blue-500 font-semibold hover:underline">Company Profile</a>
                {/* Link to /why-us */}
                <a href="/why-us" className="text-blue-500 font-semibold hover:underline">Why Us</a>
                {/* Link to /infrastructure */}
                <a href="/infrastructure" className="text-blue-500 font-semibold hover:underline">Infrastructure</a>
            </div>
            <Aboutusbanner />
            <CompanyProfile/>
            {/* <About /> */}
        </div>
    )
}

export default Aboutus