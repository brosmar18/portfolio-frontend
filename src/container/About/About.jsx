import React, { useState, useEffect} from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';



const abouts = [
    { title: 'Fontend Development', description: 'I am a good frontend developer.', imgUrl: images.about01},
    { title: 'Backend Development', description: 'I am a good backend developer', imgUrl: images.about02},
    { title: 'Web Animations', description: 'I am a good web animations developer', imgUrl: images.about03}
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
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className='app__profile-item'
                        key={about.title + index}
                    >
                        <img src={about.imgUrl} alt={about.title} />
                        <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
                        <h2 className='bold-text' style={{ marginTop: 10 }}>{about.description}</h2>
                    </motion.div>
                ))}
            </div>
        </>
    );
}

export default About;