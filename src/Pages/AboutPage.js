import React from 'react';
import ImageSection from '../components/ImageSection';
import ServicesSection from '../components/ServicesSection';
import SkillsSection from '../components/SkillsSection';
import Title from '../components/Title';

import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

const AboutPage = () => {
    return (
        <div className="AboutPage">
         <Title title={'About Me'} span={'About Me'} />
         <ImageSection></ImageSection>
         <Title title={'My Skills'} span={'My Skills'} />
         <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Web Design'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'76%'} width={'76%'} />
        </div>
        <Title title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServicesSection image={design} title={'Web and UX/UI Design'} 
                text={'Design is one of my favorite services where I design web-page with Figma'}
                />
                <ServicesSection image={intelligence} title={'HTML, CSS and JavaScript Solution'} 
                text={'I have good knowledge on HTML, CSS and JavaScript which allow me to develop good website.'}
                />
                <ServicesSection image={gamedev} title={'React Js and MongoDB'} 
                text={'I have worked on full-stack project with frontend on React and backend with MongoDB '}
                />

                
            </div>
        </div>
    );
};

export default AboutPage;