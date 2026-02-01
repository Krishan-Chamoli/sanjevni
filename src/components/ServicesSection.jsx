import React from 'react';
import './ServicesSection.css';


const ServicesSection = () => {
    return (
        <div className="services-section">
            <div className="services-header">
                <span className="services-label">MEMBERSHIP</span>
                <h2 className="services-title">Become a Sanjeevani Member <br /> Your Path to Tax Free Prosperity</h2>
                <p className="services-subtitle">
                    Ready to own 4000 sq ft of fertile land and unlock lifelong benefits? <br />
                    (Membership: Oct 2025 Dec 2028)
                </p>
            </div>

            <div className="services-grid">
                {/* Card 1: Farmer's License */}
                <div className="service-card card-mindfulness">
                    <div className="card-content">
                        <div>
                            <h3 className="service-title">Farmer's License & <br /> Tax-Free Income</h3>
                            <p className="service-desc">
                                Get a valid Farmer's License and enjoy 100% Tax-Free Agricultural Income.
                            </p>
                        </div>
                        <button className="service-btn btn-outline">Learn More</button>
                    </div>
                    {/* Image removed to fit theme, keeping layout */}
                </div>

                {/* Card 2: Eco-Friendly Living */}
                <div className="service-card card-therapy">
                    <div className="card-content">
                        <div>
                            <h3 className="service-title">Eco-Friendly <br /> Living</h3>
                            <p className="service-desc">
                                Experience eco-friendly living in a pollution-free haven with sustainable amenities.
                            </p>
                        </div>
                        <button className="service-btn btn-outline">Learn More</button>
                    </div>
                </div>

                {/* Card 3: Facilities & Payment Plans */}
                <div className="service-card card-coaching">
                    <div className="card-content">
                        <div>
                            <h3 className="service-title">Exclusive Access & <br /> Payment Plans</h3>
                            <p className="service-desc">
                                Enjoy discounted access to hotels, sports, and cultural events.
                                <br /><br />
                                <strong>Payments close on 30th June.</strong> <br />
                                Initial <strong>Rs.50,000</strong> books your spot!
                                <br />
                                "What's stopping you from joining this green revolution?"
                            </p>
                        </div>
                        <button className="service-btn btn-filled">Contact Us</button>
                    </div>
                    <div className="coaching-img-container">
                        <div className="pricing-table-container">
                            <table className="pricing-table">
                                <thead>
                                    <tr>
                                        <th>Booking Tenure</th>
                                        <th>Inst Amount</th>
                                        <th>No.</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Oct 25–Jun 26</td>
                                        <td>4,000</td>
                                        <td>144</td>
                                        <td>5,76,000</td>
                                    </tr>
                                    <tr>
                                        <td>Jul 26–Jun 27</td>
                                        <td>4,205</td>
                                        <td>120</td>
                                        <td>5,05,000</td>
                                    </tr>
                                    <tr>
                                        <td>Jul 27–Dec 27</td>
                                        <td>4,560</td>
                                        <td>130</td>
                                        <td>5,85,000</td>
                                    </tr>
                                    <tr>
                                        <td>Jan 28–Jun 28</td>
                                        <td>5,460</td>
                                        <td>108</td>
                                        <td>5,89,800</td>
                                    </tr>
                                    <tr>
                                        <td>Jul 28–Jun 28</td>
                                        <td>6,100</td>
                                        <td>96</td>
                                        <td>5,85,600</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
