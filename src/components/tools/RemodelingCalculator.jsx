import React, { useState, useEffect } from 'react';
import './RemodelingCalculator.css';

const REMODELING_DATA = {
    kitchen: {
        tiers: {
            economy: { pricePerSqFt: 150, label: 'Economy / Cosmetic Update', description: 'Refacing cabinets, laminate counters, vinyl flooring, basic appliances.' },
            midrange: { pricePerSqFt: 250, label: 'Mid-Range / Custom', description: 'Semi-custom cabinets, quartz/granite, tile backsplash, new lighting, hardwood/tile floors.' },
            highend: { pricePerSqFt: 450, label: 'High-End / Luxury', description: 'Custom cabinetry, premium stone, chef-grade appliances, structural changes, smart lighting.' }
        },
        minSqFt: 100,
        maxSqFt: 400
    },
    bathroom: {
        tiers: {
            economy: { pricePerSqFt: 200, label: 'Economy / Update', description: 'New vanity, toilet, fixture swap, paint, vinyl flooring.' },
            midrange: { pricePerSqFt: 350, label: 'Mid-Range / Full Remodel', description: 'New tub/shower tile, glass doors, double vanity, upgraded fixtures, tile floor.' },
            highend: { pricePerSqFt: 600, label: 'High-End / Spa Retreat', description: 'Steam shower, soaking tub, custom tile work, heated floors, premium fixtures.' }
        },
        minSqFt: 40,
        maxSqFt: 200
    }
};

export default function RemodelingCalculator({ serviceType = 'kitchen' }) {
    const [sqFt, setSqFt] = useState(serviceType === 'kitchen' ? 200 : 80);
    const [tier, setTier] = useState('midrange');
    const [estimate, setEstimate] = useState({ min: 0, max: 0 });

    const data = REMODELING_DATA[serviceType];

    useEffect(() => {
        calculateCost();
    }, [sqFt, tier, serviceType]);

    const calculateCost = () => {
        const basePrice = data.tiers[tier].pricePerSqFt * sqFt;

        // Create a range +/- 10%
        setEstimate({
            min: Math.round(basePrice * 0.9),
            max: Math.round(basePrice * 1.1)
        });
    };

    return (
        <div className="remodeling-calculator">
            <h3 className="calculator-title">
                {serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} Remodel Estimator
            </h3>

            <div className="calculator-content">
                {/* Size Input */}
                <div className="input-group">
                    <label className="input-label">
                        Room Size (Sq. Ft.)
                    </label>
                    <div className="slider-container">
                        <input
                            type="range"
                            min={data.minSqFt}
                            max={data.maxSqFt}
                            step="10"
                            value={sqFt}
                            onChange={(e) => setSqFt(Number(e.target.value))}
                            className="size-slider"
                        />
                        <span className="slider-value">{sqFt} sq. ft.</span>
                    </div>
                </div>

                {/* Tier Selection */}
                <div className="input-group">
                    <label className="input-label">
                        Finish Level
                    </label>
                    <div className="tier-options">
                        {Object.entries(data.tiers).map(([key, info]) => (
                            <div
                                key={key}
                                onClick={() => setTier(key)}
                                className={`tier-option ${tier === key ? 'selected' : ''}`}
                            >
                                <div className="tier-option-header">
                                    <span className="tier-option-label">{info.label}</span>
                                    {tier === key && <i className="fas fa-check-circle"></i>}
                                </div>
                                <p className="tier-option-description">{info.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Result */}
                <div className="calculator-result">
                    <p className="result-label">Estimated Investment</p>
                    <div className="result-amount">
                        ${estimate.min.toLocaleString()} - ${estimate.max.toLocaleString()}
                    </div>
                    <p className="result-disclaimer">
                        *Includes materials & labor. Does not include permits or structural engineering fees.
                    </p>
                </div>

                <a
                    href="/contact"
                    className="calculator-cta"
                >
                    Schedule Free Design Consult
                </a>
            </div>
        </div>
    );
}
