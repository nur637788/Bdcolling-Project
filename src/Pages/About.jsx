import React from 'react'
import AboutHero from '../components/About Page/AboutHero'
import Testimonials from '../components/About Page/Testimonials'
import AboutStats from '../components/About Page/AboutStats'

function About() {
    return (
        <div className='w-full'>
            <AboutHero />
            <Testimonials />
            <AboutStats />
        </div>
    )
}

export default About
