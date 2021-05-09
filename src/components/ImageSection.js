import React from 'react';
import about from '../img/debraj_p.jpg'

const ImageSection = () => {
    return (
        <div className="ImageSection">
        <div className="img">
            <img src={about} alt=""/>
        </div>
        <div className="about-info">
            <h4>I am<span> Debraj Das</span></h4>
            <p className="about-text">
            As a person, I am safe and calm. I have an analytical and open disposition that makes it easy for me to get in touch with people.
            My work is very goal-oriented. If I decide to go through something, I will do it if no one convinces me that I am wrong. 
            What also makes me believe that I am the right person for you is that I am knowledgeable, enthusiastic and full of initiative and that I am a very good team worker.
            </p>
            <div className="about-details">
                <div className="left-section">
                    <p>Full Name</p>
                    <p>Age</p>
                    <p>Nationality</p>
                    <p>Languages</p>
                    <p>Address</p>
                    <p>Countries</p>
                </div>
                <div className="right-section">
                    <p>: Debraj Das</p>
                    <p>: 39</p>
                    <p>: Swedish</p>
                    <p>: Swedish,English,Bengali</p>
                    <p>: Röntgenvägen 5,LGH 1615,14152,Huddinge,Sweden</p>
                    <p>: Sweden, Bangladesh</p>
                </div>
            </div>
            <a href = "https://drive.google.com/file/d/1nxB8vmg2AkA7JI5QYbOQc28fjNj7oGGq/view?usp=sharing">
            <button className="btn">Download Cv</button> </a>
        </div>
    </div>
    );
};

export default ImageSection;