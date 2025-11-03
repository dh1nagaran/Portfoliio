import React, { useState, useEffect } from "react";
import style from '../images/Stylesphere.png'
import coffee from '../images/coffee.png'
import smart from '../images/smartphone.png'


const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % data.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [data.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % data.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
    };

    return (
        <div className="projects-section" id="projects">
            <div>
                <h2 className="title">My Projects</h2>
            </div>
            <div className="slider-container">
                <button className="nav-btn left" onClick={prevSlide}>❮</button>
                <div className="slide">
                    <img src={data[currentIndex].image} alt={data[currentIndex].name} />
                    <h3>{data[currentIndex].name}</h3>
                    <a href={data[currentIndex].url} target="_blank" rel="noopener noreferrer">
                        Visit Project
                    </a>
                </div>

                <button className="nav-btn right" onClick={nextSlide}>❯</button>
            </div>

            <div className="dots">
                {data.map((_, index) => (
                    <span
                        key={index}
                        className={index === currentIndex ? "dot active" : "dot"}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Projects;
