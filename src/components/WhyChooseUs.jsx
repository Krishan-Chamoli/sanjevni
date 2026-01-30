import React from 'react';
import './WhyChooseUs.css';
import planningImg from '../assets/planning.png';
import sustainableImg from '../assets/sustainable.png';
import handshakeImg from '../assets/handshake.png';

const WhyChooseUs = () => {
    return (
        <div className="wcu-section">
            <h2 className="wcu-title">Why Choose Us?</h2>
            <div className="wcu-container">
                {/* Row 1: Text Left, Image Right */}
                <div className="wcu-row">
                    <div className="wcu-text-col">
                        <h3>Proven Expertise in<br />Delivering Complex Projects</h3>
                        <ul>
                            <li>With decades of experience in the infrastructure sector</li>
                            <li>we specialize in executing large-scale projects with precision and efficiency.</li>
                            <li>Our team has successfully delivered cutting-edge solutions for transportation, energy, and urban development, meeting the highest standards of safety, sustainability, and innovation.</li>
                        </ul>
                        <button className="wcu-read-more">Read more</button>
                    </div>
                    <div className="wcu-img-col">
                        <div className="wcu-img-container">
                            <img src={planningImg} alt="Navigating Complex Projects" className="wcu-img" />
                            <div className="wcu-overlay-text">NAVIGATING COMPLEX PROJECTS</div>
                        </div>
                    </div>
                </div>

                {/* Row 2: Image Left, Text Right */}
                <div className="wcu-row reverse">
                    <div className="wcu-text-col">
                        <h3>Commitment to Sustainable<br />and Future-Ready Solutions</h3>
                        <ul>
                            <li>We understand the importance of creating infrastructure</li>
                            <li>Which meets today's demands but also safeguards tomorrow's needs.</li>
                            <li>By integrating advanced technologies and sustainable practices, we provide eco-friendly solutions</li>
                            <li>Reduce environmental impact and enhance long-term value.</li>
                            <li>Whether it's green energy projects or smart...</li>
                        </ul>
                        <button className="wcu-read-more">Read more</button>
                    </div>
                    <div className="wcu-img-col">
                        <div className="wcu-img-container">
                            <img src={sustainableImg} alt="Sustainable Solutions" className="wcu-img" />
                        </div>
                    </div>
                </div>

                {/* Row 3: Text Left, Image Right */}
                <div className="wcu-row">
                    <div className="wcu-text-col">
                        <h3>Client-Centric Approach<br />with End-to-End Support</h3>
                        <ul>
                            <li>Our focus is on you. From concept to completion, we offer a fully integrated service tailored to your specific requirements.</li>
                            <li>Our client-centric approach means we prioritize transparency, collaboration, and timely delivery at every stage of your project.</li>
                            <li>Whether you need design consultation, project management, or ongoing maintenance, we provide expert guidance and support to bring your vision to life.</li>
                        </ul>
                        <button className="wcu-read-more">Read more</button>
                    </div>
                    <div className="wcu-img-col">
                        <div className="wcu-img-container">
                            <img src={handshakeImg} alt="Client Centric Approach" className="wcu-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
