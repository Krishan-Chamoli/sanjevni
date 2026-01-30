import React from 'react';
import './SolutionsSection.css';

const solutions = [
    {
        id: '01',
        title: 'Technology Irrigation',
        // Using a nice green field with equipment or rows
        image: 'https://images.pexels.com/photos/12026171/pexels-photo-12026171.jpeg',
        stagger: false,
    },
    {
        id: '02',
        title: 'Organic Fertilizer',
        // Rolling hills/fields
        image: 'https://images.pexels.com/photos/16212406/pexels-photo-16212406.jpeg',
        stagger: true,
    },
    {
        id: '03',
        title: 'Technology Irrigation',
        // Grazing cows in green field
        image: 'https://images.pexels.com/photos/16216968/pexels-photo-16216968.png',
        stagger: false,
    },
    {
        id: '04',
        title: 'Agricultural Monitoring',
        // Tractor collecting/working
        image: 'https://images.pexels.com/photos/6225638/pexels-photo-6225638.jpeg',
        stagger: true,
    }
];

const SolutionsSection = () => {
    return (
        <div className="solutions-container">
            <section className="solutions-section">
                <div className="solutions-header">
                    <h2>Next-Gen Solutions For<br />Optimal Crop Growth</h2>
                    <p>
                        We provide cutting-edge services to help farmers maximize crop yields. Our precision farming, crop monitoring, and automation solutions aim to revolutionize agriculture.
                    </p>
                </div>

                <div className="solutions-grid">
                    {solutions.map((item) => (
                        <div key={item.id} className={`solution-card ${item.stagger ? 'stagger-low' : ''}`}>
                            <img src={item.image} alt={item.title} />
                            <div className="solution-card-label">
                                <span>{item.id}</span>
                                <span>{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="collaborate-section">
                    <img
                        className="collaborate-bg"
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80"
                        alt="Collaborate"
                    />
                    <div className="collaborate-content">
                        <h2 className="collaborate-title">Collaborate And Learn<br />From Industry Experts<br />And Enthusiasts</h2>

                        <div className="collaborate-footer">
                            <div className="collaborate-location">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21C16 17 20 13 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9C4 13 8 17 12 21Z" fill="white" fillOpacity="0.2" />
                                    <path d="M12 13V13.01M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Ponorogo, Indonesia</span>
                            </div>
                            <a href="#" className="get-started-btn">
                                Get Started
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SolutionsSection;
