import React, { useState, useRef, useEffect } from 'react'
import './Contact.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
    { x: -200, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 50%',
        toggleActions: 'play none none reverse',
      },
    }
  );

  // Right section animation
  gsap.fromTo(
    rightRef.current,
    { x: 200, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 2,
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
                <div className='contact-content' ref={leftRef}>
                    <h2>Contact Me</h2>
                    <p>Feel free to reach out for collaborations or just a friendly hello!</p></div>

                <div className='contact-form' ref={rightRef}>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Your Name'
                            required
                        />
                        <input
                            type="email"
                            name='email'
                            id='email'
                            placeholder='Your Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name='number'
                            id='number'
                            value={formData.number}
                            onChange={handleChange}
                            placeholder='Your Phone Number'
                            required
                        />
                        <label htmlFor="message">Message:</label>
                        <textarea
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='Your Message'
                        />

                        <button type='submit' disabled={!formData.name || !formData.email || !formData.message}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
