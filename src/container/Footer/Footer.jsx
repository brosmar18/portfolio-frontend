import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import {client} from '../../client';
import './Footer.scss';

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: ''});

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <h2 className='head-text'>Take a coffee & chat with me</h2>
            <div className='app__footer-cards'>
                <div className='app__footer-card'>
                    <img src={images.email} alt='email' />
                    <a href="mailto:hello@email.com" className='p-text'>hello@email.com</a>
                </div>
                <div className='app__footer-card'>
                    <img src={images.phone} alt='phone' />
                    <a href="tel:319-999-9999" className='p-text'>(319) 888-8888</a>
                </div>
            </div>

            <div className='app__footer-form app__flex'>
                <div className='app__flex'>
                    <input className='p-text' type='text' placeholder='Your Name' value={name} onChange={handleChangeInput} />
                </div>
                <div className='app__flex'>
                    <input className='p-flex' type='email' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
                </div>
                <div>
                    <textarea
                        className='p-text'
                        placeholder='Your Message'
                        value={message}
                        name='message'
                        onChange={handleChangeInput}
                    />
                </div>
                <button type='button' className='p-text' onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
            </div>
        </>
    );
}


export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg',
);
