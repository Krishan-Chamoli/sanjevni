import React from 'react';
import './PlasticPollution.css';

// Images from Pexels/Unsplash for the new theme
const images = {
    header: 'https://images.pexels.com/photos/4393815/pexels-photo-4393815.jpeg', // Eco/Culture vibe
    farming: 'https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=800',
    animals: 'https://images.pexels.com/photos/5490738/pexels-photo-5490738.jpeg', // Duck/Animal
    wellness: 'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=800', // Massage/Spa
    luxury: 'https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=800', // Resort
    community: 'https://images.pexels.com/photos/3059654/pexels-photo-3059654.jpeg?auto=compress&cs=tinysrgb&w=800', // Hands/Community
    sports: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=800' // Sports
};

const PlasticPollution = () => {
    // Simple toggle state for details (could be refined to specific ID)
    const [activeId, setActiveId] = React.useState(null);

    const toggleDetails = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className="plastic-pollution-section">
            <div className="pp-header">
                <div className="pp-header-content">
                    <h2 className="pp-title">Dive Into Our Eco-Wonderland Projects That Inspire & Transform</h2>
                    <p className="pp-description">
                        Experience a world where nature, luxury, and heritage blend seamlessly. From lush farms to healing sanctuaries, every corner is designed to restore your diverse needs.
                    </p>
                    <p className="pp-hook">
                        <strong>Which part excites you most?</strong> Scroll to learn how to become a member and own your piece of paradise!
                    </p>
                </div>
                <div className="pp-header-image">
                    <img src={images.header} alt="Eco Wonderland" />
                </div>
            </div>

            <div className="pp-timeline">

                {/* Dash Line SVG - Extended for 6 items */}
                <svg className="pp-dashed-line-svg" viewBox="0 0 1200 2800" preserveAspectRatio="none">
                    <path
                        d="M 250 150 
                           C 700 150, 600 650, 950 650
                           S 400 1150, 250 1150
                           S 800 1650, 950 1650
                           S 400 2150, 250 2150
                           S 800 2650, 950 2650"
                        fill="none"
                        stroke="#2e7d32"
                        strokeWidth="3"
                        strokeDasharray="12 12"
                        strokeLinecap="round"
                    />
                </svg>



                {/* Item 1 */}
                <div className={`pp-item pp-item-odd ${activeId === 1 ? 'active' : ''}`} onClick={() => toggleDetails(1)}>
                    <div className="pp-img-container">
                        <img src={images.farming} alt="Natural Farming" />
                    </div>
                    <div className="pp-text-content">
                        <h3 className="pp-item-title">Natural Farming & Crops Galore</h3>
                        <p className="pp-item-desc">
                            Grow rice, pulses, millets, spices, oil seeds, and exotic fruits like coconut, mango, dragon fruit all chemical free with desi varieties. Tuber crops (ginger, turmeric) and exceptional trees (rudraksha, bhujapatra) add magic. What's your dream harvest?
                        </p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className={`pp-item pp-item-even ${activeId === 2 ? 'active' : ''}`} onClick={() => toggleDetails(2)}>
                    <div className="pp-img-container">
                        <img src={images.animals} alt="Aquaculture & Husbandry" />
                    </div>
                    <div className="pp-text-content">
                        <h3 className="pp-item-title">Aquaculture & Animal Husbandry</h3>
                        <p className="pp-item-desc">
                            From prawns and pearl farming to indigenous ducks, goats, and Kadaknath poultry our farms produce fresh eggs, milk, and more. Dive into sustainable protein sources that feed communities!
                        </p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className={`pp-item pp-item-odd ${activeId === 3 ? 'active' : ''}`} onClick={() => toggleDetails(3)}>
                    <div className="pp-img-container">
                        <img src={images.wellness} alt="Wellness University" />
                    </div>
                    <div className="pp-text-content">
                        <h3 className="pp-item-title">Wellness & Holistic Healing</h3>
                        <p className="pp-item-desc">
                            Experience acupressure, panchakarma, reiki, and 300+ medicinal plants for preventive care. Our SPA, yoga sessions, and Vedic classes restore body and soul. Feeling stressed? Let's heal naturally!
                        </p>
                    </div>
                </div>

                {/* Item 4 */}
                <div className={`pp-item pp-item-even ${activeId === 4 ? 'active' : ''}`} onClick={() => toggleDetails(4)}>
                    <div className="pp-img-container">
                        <img src={images.luxury} alt="Luxury Tourism" />
                    </div>
                    <div className="pp-text-content">
                        <h3 className="pp-item-title">Luxury Tourism & Hospitality</h3>
                        <p className="pp-item-desc">
                            Stay in golden bungalows, floating cottages, or king palaces. Enjoy moon bars, sky restaurants, destination weddings for 5 spots, swimming pools, and cultural evenings for 2000 guests. Adventure awaits which spot calls to you?
                        </p>
                    </div>
                </div>

                {/* Item 5 */}
                <div className={`pp-item pp-item-odd ${activeId === 5 ? 'active' : ''}`} onClick={() => toggleDetails(5)}>
                    <div className="pp-img-container">
                        <img src={images.community} alt="Community Care Hubs" />
                    </div>
                    <div className="pp-text-content">
                        <h3 className="pp-item-title">Community Care Hubs</h3>
                        <p className="pp-item-desc">
                            Free old age "Age Enhanced Center" for 1000 seniors, orphanage for 500 kids with schooling/hostel, medical camps with ambulances, and senior citizen club (Rs.10 lakh membership). Plus, museums honoring Odisha's sahids and indigenous seeds. How can you contribute to these hearts?
                        </p>
                    </div>
                </div>

                {/* Item 6 - New */}
                <div className={`pp-item pp-item-even ${activeId === 6 ? 'active' : ''}`} onClick={() => toggleDetails(6)}>
                    <div className="pp-img-container">
                        <img src={images.sports} alt="Sports & Culture" />
                    </div>
                    <div className="pp-text-content">
                        <h3 className="pp-item-title">Sports, Culture & More</h3>
                        <p className="pp-item-desc">
                            Stadiums, helipads, picnic spots for 20 parties, SSI units for coir/handicrafts, hi-tech nurseries, and spiritual spaces for RSS/Art of Living. It's a full ecosystem join the fun!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlasticPollution;
