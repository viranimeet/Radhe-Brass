import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../Aboutus/About'
import Services from '../sevrices/Services'
import Head from '../components/Head'

const Home = () => {
  return (
    <div>
      {/* <Head /> */}
      <Header />
      <Hero />
      <About />
      <Services />

    </div>
  )
}

export default Home