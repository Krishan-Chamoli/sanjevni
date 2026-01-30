import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                {/* Top Section */}
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2>ECOVIBE</h2>
                    </div>
                    <div className="footer-cta">
                        <p>Ready to start your sustainable journey with us? Let's build a greener future together.</p>
                        <button className="footer-btn">
                            Get Started
                            <span>→</span>
                        </button>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="footer-grid">
                    <div className="footer-col">
                        <h4>Explore</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#projects">Recent Projects</a></li>
                            <li><a href="#career">Careers</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><a href="#consulting">Eco Consulting</a></li>
                            <li><a href="#energy">Renewable Energy</a></li>
                            <li><a href="#design">Green Design</a></li>
                            <li><a href="#management">Project Management</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul className="footer-links">
                            <li><a href="mailto:hello@ecovibe.com">hello@ecovibe.com</a></li>
                            <li><a href="tel:+1234567890">+1 (555) 123-4567</a></li>
                            <li>123 Sustainable Ave,<br />Green City, GC 40210</li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Newsletter</h4>
                        <p style={{ color: '#8a9ca0', marginBottom: '20px', lineHeight: '1.5' }}>
                            Subscribe to receive updates on our latest projects and eco-tips.
                        </p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="newsletter-input"
                                required
                            />
                            <button type="submit" className="newsletter-submit">→</button>
                        </form>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <div className="copyright">
                        © {new Date().getFullYear()} EcoVibe Inc. All rights reserved.
                    </div>

                    <div className="social-links">
                        <a href="#" className="social-link" aria-label="Twitter">X</a>
                        <a href="#" className="social-link" aria-label="LinkedIn">in</a>
                        <a href="#" className="social-link" aria-label="Instagram">IG</a>
                        <a href="#" className="social-link" aria-label="Facebook">fb</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
