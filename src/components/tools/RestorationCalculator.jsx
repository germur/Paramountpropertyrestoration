import React, { useState, useEffect } from 'react';

const PRICING_DATA = {
    water: {
        base: 3.50, // per sq ft for extraction
        drying: 4.00, // per sq ft for drying
        reconstruction: 12.00, // per sq ft for repairs
        severityMultipliers: {
            light: 1,
            moderate: 1.5,
            severe: 2.5 // Category 3 water / black water
        }
    },
    fire: {
        base: 5.00, // cleanup per sq ft
        deodorization: 2.00,
        reconstruction: 15.00,
        severityMultipliers: {
            light: 1, // Smoke only
            moderate: 2, // Minor charring
            severe: 4 // Structural damage
        }
    },
    mold: {
        base: 15.00, // remediation per sq ft
        containment: 500, // flat fee
        testing: 350, // flat fee
        severityMultipliers: {
            light: 1,
            moderate: 1.5,
            severe: 2.0
        }
    }
};

export default function RestorationCalculator({ serviceType = 'water' }) {
    const [sqFt, setSqFt] = useState(500);
    const [severity, setSeverity] = useState('moderate');
    const [includeReconstruction, setIncludeReconstruction] = useState(true);
    const [estimate, setEstimate] = useState({ min: 0, max: 0 });

    useEffect(() => {
        calculateCost();
    }, [sqFt, severity, includeReconstruction, serviceType]);

    const calculateCost = () => {
        const data = PRICING_DATA[serviceType];
        const multiplier = data.severityMultipliers[severity];

        let baseCost = 0;

        if (serviceType === 'water') {
            baseCost = (data.base + data.drying) * sqFt;
        } else if (serviceType === 'fire') {
            baseCost = (data.base + data.deodorization) * sqFt;
        } else if (serviceType === 'mold') {
            baseCost = (data.base * sqFt) + data.containment + data.testing;
        }

        if (includeReconstruction && data.reconstruction) {
            baseCost += (data.reconstruction * sqFt);
        }

        const total = baseCost * multiplier;

        // Create a range +/- 15%
        setEstimate({
            min: Math.round(total * 0.85),
            max: Math.round(total * 1.15)
        });
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {serviceType.charAt(0).toUpperCase() + serviceType.slice(1)} Damage Cost Estimator
            </h3>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Affected Area (Sq. Ft.)
                    </label>
                    <input
                        type="range"
                        min="100"
                        max="3000"
                        step="50"
                        value={sqFt}
                        onChange={(e) => setSqFt(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="text-right font-semibold text-blue-600">{sqFt} sq. ft.</div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Damage Severity
                    </label>
                    <select
                        value={severity}
                        onChange={(e) => setSeverity(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="light">Light (Surface only)</option>
                        <option value="moderate">Moderate (Penetrated materials)</option>
                        <option value="severe">Severe (Structural/Hazardous)</option>
                    </select>
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="reconstruction"
                        checked={includeReconstruction}
                        onChange={(e) => setIncludeReconstruction(e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="reconstruction" className="ml-2 block text-sm text-gray-900">
                        Include Reconstruction/Repairs
                    </label>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
                    <p className="text-sm text-blue-600 font-medium uppercase tracking-wide">Estimated Cost Range</p>
                    <div className="text-3xl font-bold text-blue-900 my-1">
                        ${estimate.min.toLocaleString()} - ${estimate.max.toLocaleString()}
                    </div>
                    <p className="text-xs text-gray-500">
                        *Estimates vary by location and insurance coverage.
                    </p>
                </div>

                <a
                    href="tel:7866022217"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                    Get Exact Quote (Free)
                </a>
            </div>
        </div>
    );
}
