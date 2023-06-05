import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrapo } from '../../wrapper';
import client, { urlFor } from '../../client';

import './Testimonial.scss';

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [ testimonials, setTestimonials] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect (() => {
        const query = `*[_type == "testimonials"]`;
        const brandsQuery = `*[_type == "brands"]`;

        client.fetch(query).then((data) => {
            setTestimonials(data);
        });

        client.fetch(brandsQuery).then((data) => {
            setBrands(data);
        });

    }, []);

    return (
        <div>Testimonial</div>
    );
}

export default Testimonial;
