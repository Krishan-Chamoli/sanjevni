import React from 'react';
import './ServicesSection.css';
import mindfulnessImg from '../assets/mindfulness.png';
import wellnessImg from '../assets/wellness.png';

const ServicesSection = () => {
    return (
        <div className="services-section">
            <div className="services-header">
                <span className="services-label">SERVICES</span>
                <h2 className="services-title">Your Path to <br /> Well-being</h2>
                <p className="services-subtitle">
                    Discover expert guidance for a healthier <br /> mind and balanced life.
                </p>
            </div>

            <div className="services-grid">
                {/* Card 1: Mindfulness & Meditation */}
                <div className="service-card card-mindfulness">
                    <div className="card-content">
                        <div>
                            <h3 className="service-title">Mindfulness & <br /> Meditation</h3>
                            <p className="service-desc">
                                Guided meditation sessions <br /> and stress management <br /> techniques.
                            </p>
                        </div>
                        <button className="service-btn btn-outline">Learn More</button>
                    </div>
                    <img src={mindfulnessImg} alt="Abstract hearts" className="mindfulness-img" />
                </div>

                {/* Card 2: One-on-One Therapy */}
                <div className="service-card card-therapy">
                    <div className="card-content">
                        <div>
                            <h3 className="service-title">One-on-One <br /> Therapy</h3>
                            <p className="service-desc">
                                Virtual and in-person therapy <br /> sessions with licensed <br /> professionals.
                            </p>
                        </div>
                        <button className="service-btn btn-outline">Learn More</button>
                    </div>
                    {/* No illustration for this card as per design */}
                </div>

                {/* Card 3: Wellness Coaching */}
                <div className="service-card card-coaching">
                    <div className="card-content">
                        <div>
                            <h3 className="service-title">Wellness Coaching</h3>
                            <p className="service-desc">
                                Personalized guidance to help you build healthier habits,
                                manage stress, and achieve balance in all areas of your life.
                                <br /><br />
                                Our wellness coaches support you in creating sustainable
                                routines for mental, emotional, and physical well-being.
                            </p>
                        </div>
                        <button className="service-btn btn-filled">Learn More</button>
                    </div>
                    <div className="coaching-img-container">
                        <img src={wellnessImg} alt="Wellness coaching" className="coaching-img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
