import React from 'react'
import { RiLinkedinFill } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiHackerrank } from "react-icons/si";
import { RiDiscordLine } from "react-icons/ri";
import profile from '../images/profile.jpg'



const Intro = () => {
    return (
        <div>
            <div className='intro-container' id='intro'>
                <img src={profile} />
                <h1>Dhinagaran S</h1>
                <h2>Frontend Developer</h2>
                <div className='intro-icon'>
                    <a href='https://www.instagram.com/dh1nagaran?igsh=Mm51dGEzZTYyYm1z'> <FiInstagram /></a>
                    <a href='https://www.linkedin.com/in/dhinagaran-s-607777237'> <RiLinkedinFill /></a>
                    <a href='https://github.com/dh1nagaran'><FiGithub /> </a>
                    <a href='https://www.hackerrank.com/profile/dhinagaran965'> <SiHackerrank /></a>
                    <a href='https://leetcode.com/u/dhinagarann/'> <TbBrandLeetcode /></a>
                    <a href='https://discordapp.com/users/dhinagarann'><RiDiscordLine /></a>
                </div>

            </div>

        </div>
    )
}

export default Intro