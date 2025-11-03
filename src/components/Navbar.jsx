import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [click, setClick] = useState({ left: '-100%' });

    function change() {
        setClick({ left: '0%', transition: 'all 2s ease' });
    }

    function change2() {
        setClick({ left: '-100%', transition: 'all 2s ease' });
    }

    return (
        <div className="nav-con">
            <nav>
                <div>
                    <h1>Portfolio</h1>
                </div>

                {/* Menu icon */}
                <div className='nav-menu' onClick={change}>
                    <FiMenu />
                </div>

                {/* Navigation container */}
                <div className='nav-contain' style={click}>
                    <ul>
                        <Link to="intro" smooth={true} duration={700} onClick={change2}>
                            <li>Home</li>
                        </Link>

                        <Link to="about" smooth={true} duration={500} onClick={change2}>
                            <li>About Me</li>
                        </Link>

                        <Link to="skills" smooth={true} duration={1000} onClick={change2}>
                            <li>Skills</li>
                        </Link>

                        <Link to="projects" smooth={true} duration={1200} onClick={change2}>
                            <li>Projects</li>
                        </Link>

                        <Link to="contacts" smooth={true} duration={1400} onClick={change2}>
                            <li>Contact</li>
                        </Link>
                        <li className='nav-cancel' onClick={change2}>
                            <RiCloseFill className='nav-cancel-font' />
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    );
};

export default Navbar;
