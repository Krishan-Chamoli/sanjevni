import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <div className="wcu-section">
            <h2 className="wcu-title">Why Sanjeevani? Because Agriculture Isn't Just Farming It's a Lifeline</h2>
            <div className="wcu-container">
                {/* Row 1: Mission */}
                <div className="wcu-row">
                    <div className="wcu-text-col">
                        <h3>A Sustainable Agro-Economic<br />Habitat for All</h3>
                        <p>
                            At Sanjeevani Foundation, we're building "A Sustainable Agro-Economic and Caring Eco Habitat for All" a milestone where agriculture powers progress, and farmers are the true heroes. Founded on the belief that dedication + natural methods = true prosperity, we're uniting individuals through chemical-free farming with desi seeds, allied activities, and a vibrant community ecosystem.
                        </p>
                        <button className="wcu-read-more">Learn Mission</button>
                    </div>
                    <div className="wcu-img-col">
                        <div className="wcu-img-container">
                            <img
                                src="https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Sanjeevani Mission"
                                className="wcu-img"
                            />
                            <div className="wcu-overlay-text">FARMERS ARE HEROES</div>
                        </div>
                    </div>
                </div>

                {/* Row 2: Promise */}
                <div className="wcu-row reverse">
                    <div className="wcu-text-col">
                        <h3>A Self Reliant Haven<br />In Bhubaneswar's Embrace</h3>
                        <p>
                            What if your land gave you tax free income, a farmer's license, and access to world-class facilities? That's our promise. Spanning 1500 acres (750 for members, 750 for shared wonders), we're creating a self reliant haven in Bhubaneswar's embrace blending Vedic wisdom, modern amenities, and inclusive growth. Join us in restoring our roots and nourishing the future!
                        </p>
                        <button className="wcu-read-more">Discover More</button>
                    </div>
                    <div className="wcu-img-col">
                        <div className="wcu-img-container">
                            <img
                                src="https://images.pexels.com/photos/4503269/pexels-photo-4503269.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Community Living"
                                className="wcu-img"
                            />
                        </div>
                    </div>
                </div>

                {/* Row 3: Icons / Pillars */}
                <div className="wcu-row">
                    <div className="wcu-text-col">
                        <h3>Our Core Pillars<br />Of Sustainable Living</h3>
                        <ul>
                            <li>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg>
                                <span>Chemical free natural farming</span>
                            </li>
                            <li>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg>
                                <span>Eco friendly luxury wellness</span>
                            </li>
                            <li>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg>
                                <span>Vibrant community ecosystem</span>
                            </li>
                            <li>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg>
                                <span>Vedic wisdom meets modern amenities</span>
                            </li>
                        </ul>
                        <button className="wcu-read-more">Join Us</button>
                    </div>
                    <div className="wcu-img-col">
                        <div className="wcu-icon-grid">
                            <div className="wcu-icon-card">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                    <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                    <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                                </svg>
                                <span>Agriculture</span>
                            </div>
                            <div className="wcu-icon-card">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 21c-3.5 0 -6.5 -3.5 -4 -10c-2 1.5 -5 1.5 -5 -1.5c1 -4 7 -7 9 -7c2 0 8 3 9 7c0 3 -3 3 -5 1.5c2.5 6.5 -0.5 10 -4 10z" />
                                </svg>
                                <span>Eco-Habitat</span>
                            </div>
                            <div className="wcu-icon-card">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="7" r="4" />
                                    <path d="M5.5 21v-2a4 4 0 0 1 4 -4h5a4 4 0 0 1 4 4v2" />
                                </svg>
                                <span>Community</span>
                            </div>
                            <div className="wcu-icon-card">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 21h18" />
                                    <path d="M5 21v-7l8 -6l8 6v7" />
                                    <path d="M9 21v-9a3 3 0 0 1 6 0v9" />
                                </svg>
                                <span>Culture</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
