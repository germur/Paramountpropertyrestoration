import React from 'react';
import '../../styles/components/BentoServices.css';
import { Droplets, Flame, Sprout, Wind, ArrowRight } from 'lucide-react';

const BentoServices = () => {
    return (
        <div className="bento-grid">
            {/* Card 1: Water Damage (Large) */}
            <a href="/restoration/water-damage/" className="bento-card card-water">
                <div className="bento-content">
                    <div className="bento-icon-wrapper">
                        <Droplets size={28} />
                    </div>
                    <h3 className="bento-title">Water Damage</h3>
                    <p className="bento-desc">
                        24/7 rapid water extraction, drying, and dehumidification.
                        We prevent structural damage and mold growth.
                    </p>
                    <div className="bento-tag">
                        Emergency Response <ArrowRight size={14} style={{ marginLeft: 4 }} />
                    </div>
                </div>
            </a>

            {/* Card 2: Fire Damage (Standard) */}
            <a href="/restoration/fire-damage/" className="bento-card card-fire">
                <div className="bento-content">
                    <div className="bento-icon-wrapper">
                        <Flame size={28} />
                    </div>
                    <h3 className="bento-title">Fire Damage</h3>
                    <p className="bento-desc">
                        Complete smoke & soot removal and restoration.
                    </p>
                    <div className="bento-tag">
                        24/7 Support <ArrowRight size={14} style={{ marginLeft: 4 }} />
                    </div>
                </div>
            </a>

            {/* Card 3: Mold Remediation (Standard) */}
            <a href="/restoration/mold-remediation/" className="bento-card card-mold">
                <div className="bento-content">
                    <div className="bento-icon-wrapper">
                        <Sprout size={28} />
                    </div>
                    <h3 className="bento-title">Mold Remediation</h3>
                    <p className="bento-desc">
                        Safe mold removal and air quality control.
                    </p>
                    <div className="bento-tag">
                        Health Priority <ArrowRight size={14} style={{ marginLeft: 4 }} />
                    </div>
                </div>
            </a>

            {/* Card 4: Storm Damage (Large) */}
            <a href="/restoration/storm-damage/" className="bento-card card-storm">
                <div className="bento-content">
                    <div className="bento-icon-wrapper">
                        <Wind size={28} />
                    </div>
                    <h3 className="bento-title">Storm Damage</h3>
                    <p className="bento-desc">
                        Hurricane recovery, board-up services, and roof tarping protection
                        for Florida properties.
                    </p>
                    <div className="bento-tag">
                        Disaster Recovery <ArrowRight size={14} style={{ marginLeft: 4 }} />
                    </div>
                </div>
            </a>
        </div>
    );
};

export default BentoServices;
