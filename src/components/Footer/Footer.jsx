import React from 'react';
import './Footer.css';
import { Mail, Phone, Send } from 'lucide-react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h2 className="footer-title">
                    Let’s <span>Connect</span>
                </h2>
                <p className="footer-subtitle">
                    Have a project idea, or just want to say hello? I’d love to hear from you.
                </p>

                <div className="footer-info">
                    <div className="footer-item">
                        <Mail className="footer-icon" />
                        <a href="mailto:mohammedshuaibka@gmail.com" className="footer-highlight">
                            mohammedshuaibka@gmail.com
                        </a>

                    </div>

                    <div className="footer-item">
                        <Phone className="footer-icon" />
                        <a href="tel:+918086426611">+91 8086426611</a>
                    </div>
                </div>

                <a href="#contact" className="footer-btn">
                    <Send className="footer-icon" />
                    Contact Me
                </a>

                <p className="footer-copy">
                    © {new Date().getFullYear()} <span className="footer-name">Mohammed Shuaib KA</span> — All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
