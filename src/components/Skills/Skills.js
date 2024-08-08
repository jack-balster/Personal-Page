import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css';

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData';
import { skillsImage } from '../../utils/skillsImage';

function Skills() {
    const { theme } = useContext(ThemeContext);

    // Define style for the skill boxes
    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 20px ${theme.primary}`
    };

    return (
        <div className="skills" style={{backgroundColor: theme.secondary}}>
            <div className="skillsHeader">
                {/* Skills section header */}
                <h2 style={{color: theme.primary}}>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    {/* Marquee component to scroll skills horizontally */}
                    <Marquee 
                        gradient={false} 
                        speed={100} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {/* Render each skill in a scrolling box */}
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: theme.tertiary}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}

export default Skills;
