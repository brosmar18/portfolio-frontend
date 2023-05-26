import React, { useState, useEffect} from 'react';
import './About.scss';
import { motion } from 'framer-motion';



const abouts = [
    { title: 'Fontend Development', description: 'I am a good frontend developer.', imgUrl: ''},
    { title: 'Backend Development', description: 'I am a good backend developer', imgUrl: ''},
    { title: 'Web Animations', description: 'I am a good web animations developer', imgUrl: ''}
]
const About = () => {
    return (
        <>
            <h2 className='head-text'>
                I Know That
                <span>Good Design</span>
                <br />
                means
                <span>Good Business</span>
            </h2>
            <div className='app__profiles'>

            </div>
        </>
    );
}

export default About;