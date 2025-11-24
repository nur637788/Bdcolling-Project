import React from 'react'
import Hero from '../components/Home page/Hero'
import ApiFetch from '../components/Home page/ApiFetch'
import CoustomerFedback from '../components/Home page/CoustomerFedback'

function Home() {
    return (
        <div className='w-screen'>
            <Hero />
            <ApiFetch />
            <CoustomerFedback />
        </div>
    )
}

export default Home

