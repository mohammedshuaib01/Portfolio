import React, { useState, useRef, useEffect } from 'react'
import './Contact.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { FaInstagram, FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa'

function Contact() {

    const leftRef = useRef(null);
    const rightRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        setFormData({ name: '', email: '', number: '', message: '' });
    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Left section animation
        gsap.fromTo(
            leftRef.current,
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.contact-section',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        // Right section animation
        gsap.fromTo(
            rightRef.current,
            { x: 100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.contact-section',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, []);

    return (
        <div className='contact-section' id='contact' >
            <div className='contact-container'>
                <div className='contact-info-side' ref={leftRef}>
                    <h2 className="contact-title">Get in touch</h2>

                    <div className="contact-details">
                        <div className="detail-item">
                            <label>Email:</label>
                            <p>mohammedshuaibka@gmail.com</p>
                        </div>
                        <div className="detail-item">
                            <label>Phone:</label>
                            <p>+91 8086426611</p>
                        </div>
                        <div className="detail-item">
                            <label>Address:</label>
                            <p>Ernakulam, Kerala, India</p>
                        </div>
                    </div>

                    <div className="social-links">
                        <p className="follow-us">Follow us</p>
                        <div className="social-icons">
                            {/* <a href="https://www.instagram.com/shhhuaib/" className="social-icon" target="_blank" rel="noreferrer"><FaInstagram size={18} /></a> */}
                            <a href="https://www.linkedin.com/in/mohammed-shuaib-a107b621b/" className="social-icon" target="_blank" rel="noreferrer"><FaLinkedin size={18} /></a>
                            <a href="https://github.com/mohammedshuaib01" className="social-icon" target="_blank" rel="noreferrer"><FaGithub size={18} /></a>
                            <a href="https://www.behance.net/mohammedshuaib002" className="social-icon" target="_blank" rel="noreferrer"><FaBehance size={18} /></a>
                        </div>
                    </div>
                </div>

                <div className='contact-form-side' ref={rightRef}>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Your full name'
                                required
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="number">Phone number</label>
                                <input
                                    type="tel"
                                    name='number'
                                    id='number'
                                    placeholder='Your phone number'
                                    value={formData.number}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    name='email'
                                    id='email'
                                    placeholder='Your email address'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='Write something....'
                            />
                        </div>

                        <button type='submit' className="send-btn" disabled={!formData.name || !formData.email || !formData.message}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Contact
