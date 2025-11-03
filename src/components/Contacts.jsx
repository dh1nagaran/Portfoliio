import React from 'react'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CgInstagram, CgMailForward } from 'react-icons/cg';
import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';


const Contacts = () => {
    return (
        <div className='contact-container' id='contacts'>
            <h1>Contact Me</h1>
            <hr />
            <div className='contacts-contain'>
                <div className='contact-1'>
                    <label>
                        <span> <IoPhonePortraitOutline /></span>
                        <p>+91 6385789929</p>
                    </label>
                    <label>
                        <span> <CiMail /></span>
                        <p>dhinagaran965@gmail.com</p>
                    </label>
                    <label>
                        <span> <CiLocationOn /></span>
                        <p>Chennai</p>
                    </label>
                </div>
                <div className='contact-2'>
                    <label>
                        <a href='https://www.instagram.com/dh1nagaran?igsh=Mm51dGEzZTYyYm1z'>
                            <CgInstagram />
                            {/* <p>Instagram</p> */}
                        </a>
                    </label>
                    <label>
                        <a href='https://www.facebook.com/share/1BPBwkaaqk/'>
                            <FaFacebook />
                            {/* <p>Facebook</p> */}
                        </a>
                    </label>
                    <label>
                        <a href='https://www.linkedin.com/in/dhinagaran-s-607777237'>
                            <FaLinkedin />
                            {/* <p>Linked In</p> */}
                        </a>
                    </label>
                    {/* <label>
                        <a href='https://github.com/dh1nagaran'>
                            <FaGithub />
                            <p>Github</p>
                        </a>
                    </label> */}
                    <label>
                        <a href='https://discordapp.com/users/dhinagarann'>
                            <FaDiscord />
                            {/* <p>Discord</p> */}
                        </a>
                    </label>

                </div>
            </div>
            <footer>
                <p>&copy; 2025 Created By Dhinagran S</p>
            </footer>
        </div>

    )
}

export default Contacts