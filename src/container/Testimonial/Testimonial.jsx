import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrapo } from '../../wrapper';
import { urlFor } from '../../client';

import './Testimonial.scss';

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [ testimonials, setTestimonials] = useState([]);
    const [brands, setBrands] = useState([]);

    return (
        <div>Testimonial</div>
    );
}

export default Testimonial;
