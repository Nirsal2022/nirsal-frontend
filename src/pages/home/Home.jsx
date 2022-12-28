import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import About from '../../sections/about/About'
import Application from '../../sections/application/Application'
import HomeHeader from '../../sections/homeHeader/HomeHeader'
import Terms from '../../sections/terms/Terms'
import './home.css'

const Home = () => {
  return (
    <>
        <Navbar />
        <HomeHeader />
        <About />
        <Application />
        <Terms />
        <Footer />
    </>
  )
}

export default Home