import React from 'react'
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { AiOutlineJava } from "react-icons/ai";
import { AiOutlinePython } from "react-icons/ai";
import { SiMysql } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { RiBootstrapLine } from "react-icons/ri";




const Skills = () => {
    return (
        <div className='skill-container' id='skills'>
            <h1>Skills</h1>
            <hr />
            <div className='skill-contain'>

                <div className='skill-contains'>
                    <AiOutlineHtml5 />
                    <h2>HTML</h2>
                </div>
                <div className='skill-contains'>
                    <IoLogoCss3 />
                    <h2>CSS</h2>
                </div>
                <div className='skill-contains'>
                    <RiJavascriptFill />
                    <h2>Java Script</h2>
                </div>
                <div className='skill-contains'>
                    <FaReact />
                    <h2>React</h2>
                </div>
                <div className='skill-contains'>
                    <SiMysql />
                    <h2>MySQL</h2>
                </div>
                <div className='skill-contains'>
                    <AiOutlinePython />
                    <h2>Python</h2>
                </div>
                <div className='skill-contains'>
                    <AiOutlineJava />
                    <h2>Java</h2>
                </div>
                <div className='skill-contains'>
                    <SiTailwindcss />
                    <h2>Tailwind CSS</h2>
                </div>
                <div className='skill-contains'>
                    <RiBootstrapLine />
                    <h2>Boostrap</h2>
                </div>

            </div>
        </div>
    )
}

export default Skills