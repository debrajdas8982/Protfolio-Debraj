import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import Typing from 'react-typing-animation';


// import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Debraj Das</span>
                </h1>
                {/* <Typing>
 <h2>
  React Js Day 1 Play ground
  <Typing.Backspace count={13} />
  <Typing.Delay ms={2000} />2 Play ground
 </h2>
</Typing> */}
                <p className="h-sub-text">
                    Currently, I’m a student at IT Högskolan, working toward my degree and looking for ways to put my new knowledge and skills to use in a work environment.
                    My Frontend Developer education combined with previous work experience with some projects has given me a great foundation of knowledge and skills.
                    I learn new technologies quickly and apply those abilities to improve the work I do. Additionally, I'm good at JavaScript, React, HTML, CSS and Vue.js and database like MongoDB and SQL.

                </p>
                <div className="icons">
                    <a
                        className="icon-holder"
                        href="https://www.facebook.com/debraj.cse"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </a>
                    <a
                        className="icon-holder"
                        href="https://github.com/debrajdas8982"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a
                        className="icon-holder"
                        href="https://www.linkedin.com/in/debraj-das-1a714433/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon lk" />
                    </a>

                </div>
            </header>
        </div>
    );
};

export default HomePage;