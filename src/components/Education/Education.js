import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Education.css'
import EducationCard from './EducationCard';

import { educationData } from '../../data/educationData'

function Education() {

    // Access theme from ThemeContext
    const { theme } = useContext(ThemeContext);

    return (
        <div className="education" id="resume" style={{backgroundColor: theme.secondary}}>
           
            <div className="education-body">
                <div className="education-description">
                    {/* Title for the Education section */}
                    <h1 style={{color:theme.primary}}>Education</h1>
                    {/* Map through educationData to render EducationCard components */}
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                        />
                    ))}
                </div>
                <div className="education-image">
                    {/* Image related to education section */}
                    <img src={theme.eduimg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Education
