import React, { useState, useEffect } from "react";
import style from '../images/fashion.jpg'
import coffee from '../images/coffee.jpg'
import smart from '../images/mobile.jpg'
import zap from '../images/elect.jpg'
import { useNavigate } from "react-router-dom";


const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    let navigate = useNavigate()

    const data = [
        {
            name: "StyleSphere",
            image: style,
            url: "https://styles-sphere.netlify.app/"
        },
        {
            name: "The Coffee Nook",
            image: coffee,
            url: "https://the-coffee-nookk.netlify.app"
        },
        {
            name: "Smartphone Store",
            image: smart,
            url: "https://smartphone-store1.netlify.app/"
        },
        {
            name: "Zapster",
            image: zap,
            url: "https://zapsterr.netlify.app/"

        },
    ];
    return (
        <div className="w-full m-20 justify-self-center">
            <div className="project-contain">
                <h1>Projects</h1>
            </div>
            <div className="main-project">
                <div className="project">

                    {
                        data.map((datas, id) => (
                            <div className="project-sec">

                                <div className="project-sec-1">
                                    <img src={datas.image} />
                                    <h1>{datas.name}</h1>
                                    <h2><a href={datas.url}>View Project </a></h2>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    );
};

export default Projects;
