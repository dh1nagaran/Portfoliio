import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Intro from './Intro'
import Skills from './Skills'
import Contacts from './Contacts'
import Projects from './Projects'

const Head = () => {
    return (
        <div id='home'>
            <Navbar />
            <Intro />
            <About />
            <Skills />
            <Projects />
            <Contacts />

        </div>
    )
}

export default Head