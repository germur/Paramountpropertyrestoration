import React, { useState } from 'react';
import '../../styles/components/ProtocolTabs.css';
import { protocolSteps } from '../../data/cleaning.js';
import {
    Shield, Check, SprayCan as Spray, Sparkles, Grid, Fan,
    Droplets, CloudFog, Trash2, Wind, Waves, Activity,
    Armchair as Sofa, RectangleHorizontal, AlignJustify, Fingerprint,
    Search, AirVent, ThermometerSun, TestTube, FileText
} from 'lucide-react';

const iconMap = {
    Spray, Sparkles, Grid, Fan, Droplets,
    CloudFog, Trash2, Wind, Waves, Activity,
    Sofa, RectangleHorizontal, AlignJustify, Fingerprint,
    Search, AirVent, ThermometerSun, TestTube, FileText
};

const ProtocolTabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const getIcon = (iconName) => {
        const IconComponent = iconMap[iconName] || Check;
        return <IconComponent size={20} />;
    };

    return (
        <div className="protocol-tabs-container">
            {/* Navigation Tabs */}
            <div className="tabs-header">
                {protocolSteps.map((section, index) => (
                    <button
                        key={index}
                        className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {section.category}
                        {section.highlight && <span className="tab-badge">Exclusive</span>}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="tabs-content">
                <h3 className="content-title">
                    {protocolSteps[activeTab].category} Protocol
                </h3>

                <div className="steps-grid">
                    {protocolSteps[activeTab].steps.map((stepItem, idx) => (
                        <div key={idx} className="step-card">
                            <div className="check-icon">
                                {getIcon(stepItem.icon)}
                            </div>
                            <p className="step-text">{stepItem.text}</p>
                        </div>
                    ))}
                </div>

                <div className="protocol-footer">
                    <Shield size={16} />
                    <span>Clinical Grade Hygiene Standard</span>
                </div>
            </div>
        </div>
    );
};

export default ProtocolTabs;
