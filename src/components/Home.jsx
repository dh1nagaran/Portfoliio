import React from 'react'
import Navbar from './Navbar'
import profile from '../images/profile.jpg'
import { RiLinkedinFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';



const Home = () => {
    let navigate = useNavigate();

    return (
        <div>
            <div className='home-contain' id='home'>
                <img src={profile} />
                <div className='home-contain-2'>
                    <a href="https://www.linkedin.com/in/dhinagaran-s-607777237">
                        <button className='contain-button'><RiLinkedinFill className='contain-btn' /><p>Linked In</p></button></a>
                    <button className='contain-button' onClick={() => { navigate("/head") }}><CgProfile className='contain-btn' /><p>Portfolio</p></button>
                </div>
            </div>
        </div>
    )
}

export default Home