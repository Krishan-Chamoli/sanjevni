import React from 'react';
import './PlasticPollution.css';

// Import local images - placeholders for now, will replace with generated ones
import headerImg from '../assets/pollution_header.png';
import bottle1 from '../assets/bottle_single.png';
import bottle2 from '../assets/bottle_use.png';
import bottle3 from '../assets/bottle_fragment.png';
import bottle4 from '../assets/bottle_transport.png';
import bottle5 from '../assets/bottle_accumulate.png';

const PlasticPollution = () => {
    return (
        <section className="plastic-pollution-section">
            <div className="pp-header">
                <div className="pp-header-content">
                    <h2 className="pp-title">The Plastic Problem</h2>
                    <p className="pp-description">
                        Microplastics are small plastic particles that are less than 5 millimeters in size. They come from a variety of sources, including broken down pieces of larger plastic items, microbeads in personal care products, and fibers from clothing and textiles.
                    </p>
                    <p className="pp-description">
                        The problem with microplastics in the ocean is that they pose a significant threat to marine life and ecosystems. When microplastics enter the ocean, they can be ingested by a wide range of marine organisms, including fish, birds, turtles, and plankton.
                    </p>
                </div>
                <div className="pp-header-image">
                    <img src={headerImg} alt="Polluted water" />
                </div>
            </div>

            <div className="pp-timeline">
                {/* Dash Line SVG - Manually approximate the path based on layout */}
                <svg className="pp-dashed-line-svg" viewBox="0 0 1000 1200" preserveAspectRatio="none">
                    {/* 
            Path approximation:
            Start near Item 1 bottom (approx 150, 200)
            Curve to Item 2 (approx 800, 400)
            Curve to Item 3 (approx 200, 700)
            Curve to Item 4 (approx 800, 950)
            Curve to Item 5 (approx 200, 1150)
           */}
                    <path
                        d="M 150 250 
               C 150 400, 400 300, 600 350
               S 800 500, 600 600
               S 200 650, 300 800
               S 700 850, 750 950
               S 400 1100, 100 1100"
                        fill="none"
                        stroke="#5d7d8b"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                    />
                </svg>

                {/* Item 1 */}
                <div className="pp-item pp-item-1">
                    <div className="pp-img-container">
                        <img src={bottle1} alt="Single Use Plastics" />
                    </div>
                    <div className="pp-text-content">
                        <h3 className="pp-item-title">Single Use Plastics</h3>
                        <p className="pp-item-desc">
                            Single-use plastic bottles are typically made from petroleum-based materials and are produced at a large scale. The process of production requires a significant amount of energy and resources, contributing to carbon emissions and environmental degradation.
                        </p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="pp-item pp-item-2">
                    <div className="pp-img-container">
                        <img src={bottle2} alt="Use and Disposal" />
                    </div>
                    <div className="pp-text-content">
                        <h3 className="pp-item-title">Use and Disposal</h3>
                        <p className="pp-item-desc">
                            Once used, many of these bottles are not properly disposed of, and end up in landfills, oceans, or other environments. Plastic bottles can take hundreds of years to decompose, and in the meantime, they can break down into smaller pieces called micro plastics.
                        </p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="pp-item pp-item-3">
                    <div className="pp-img-container">
                        <img src={bottle3} alt="Fragmentation" />
                    </div>
                    <div className="pp-text-content">
                        <h3 className="pp-item-title">Fragmentation</h3>
                        <p className="pp-item-desc">
                            Once in the environment, plastic bottles are exposed to sunlight, wind, and water currents, causing them to break down into smaller pieces over time.
                        </p>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="pp-item pp-item-4">
                    <div className="pp-img-container">
                        <img src={bottle4} alt="Transportation" />
                    </div>
                    <div className="pp-text-content">
                        <h3 className="pp-item-title">Transportation</h3>
                        <p className="pp-item-desc">
                            Micro plastics can travel long distances through waterways and oceans, carried by currents and winds. They can also be ingested by marine animals and transported up the food chain.
                        </p>
                    </div>
                </div>

                {/* Item 5 */}
                <div className="pp-item pp-item-5">
                    <div className="pp-img-container">
                        <img src={bottle5} alt="Accumulation" />
                    </div>
                    <div className="pp-text-content">
                        <h3 className="pp-item-title">Accumulation</h3>
                        <p className="pp-item-desc">
                            As micro plastics accumulate in the ocean, they can have significant impacts on marine life and ecosystems. They can interfere with feeding, reproduction, and growth, and can also act as carriers for harmful pollutants.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PlasticPollution;
