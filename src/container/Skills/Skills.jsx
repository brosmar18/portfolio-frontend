import React, { useState, useEffect } from 'react';
import ReactTolltip from 'react-tooltip';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import client, { urlFor } from '../../client';
import './Skills.scss';


const Skills = () => {
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);


    useEffect (() => {
        const query = `*[_type == "experiences"]`;
        const skillsQuery = `*[_type == "skills"]`;

        client.fetch(query)
            .then((data) => {
                setExperience(data);
            });
        client.fetch(skillsQuery)
            .then((data) => {
                setSkills(data);
            });

    }, [])

    return (
        <>
            <h2 className='head-text'>Skills & Experience</h2>
            <div className='app__skills-container'>
                <motion.div
                    className='app__skills-list'>
                        
                </motion.div>
            </div>
        </>
    );
}

export default Skills;