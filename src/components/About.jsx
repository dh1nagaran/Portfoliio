import React from 'react'
import profile from '../images/profile.jpg'
import resume from '../Resume/Dhinagaran_S_Frontend_Developer_Resume_2.pdf'

const About = () => {
    return (
        <div className='about-main' id='about'>
            <div className='about-container'>
                <div className='about-1'>
                    <h1>About me</h1>
                    <hr />
                    <img src={profile} />
                </div>
                <div className='about-2'>
                    <p>I'm Dhinagaran from Aruppukottai, Virudhunagar District. I completed my Diploma in Computer Technology at V . S . V . N  Polytechnic College, and I have completed my B.Tech in Information Technology at the Government College of Technology.</p>
                    <br />

                    <p> I’m passionate about creating modern, responsive, and user-friendly web projects. I enjoy learning new technologies and applying them to real-world designs.</p>
                    <br />
                    <p>I have also developed a Fashion store E-commerce Application with Feature of Filter the products,Wishlist And Add to Cart, and I designed my own portfolio website to showcase my skills and creativity.</p>
                    <br />
                    <p> I’m always eager to explore new tools, improve my skills, and create meaningful digital experiences.</p>
                    <br />
                    <a href={resume}>
                        <button>Download CV</button>
                    </a>
                </div>
            </div>
        </div >
    )
}

export default About
