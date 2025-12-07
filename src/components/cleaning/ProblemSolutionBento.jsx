import React, { useState } from 'react';
import '../../styles/components/ProblemSolutionBento.css';
import { AlertTriangle, ShieldCheck, Calendar, ArrowRight, ExternalLink } from 'lucide-react';

// USER: REPLACE THIS WITH YOUR CALENDLY LINK
// Example: "https://calendly.com/your-org/30min"
const CALENDLY_URL = "https://calendly.com/services-paramountpropertyrestoration/30min";

const ProblemSolutionBento = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const today = new Date();
    const currentDay = today.getDate();

    // simple array 1..30
    const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);

    const handleDateClick = (day) => {
        if (day >= currentDay && !CALENDLY_URL) {
            setSelectedDate(day);
        } else if (CALENDLY_URL) {
            // Open Calendly in new tab
            window.open(CALENDLY_URL, '_blank');
        }
    };

    const getButtonText = () => {
        if (CALENDLY_URL) return "Schedule via Calendly";
        if (selectedDate) return `Request for ${today.toLocaleString('default', { month: 'short' })} ${selectedDate}`;
        return "Check Availability";
    };

    const getButtonLink = () => {
        if (CALENDLY_URL) return CALENDLY_URL;
        if (selectedDate) return `/contact?date=${today.getFullYear()}-${today.getMonth() + 1}-${selectedDate}&service=inspection`;
        return "#";
    };

    return (
        <div className="ps-bento-container" id="calendar-section">

            {/* COLUMN 1: THE PROBLEM */}
            <div className="ps-bento-col problem-theme">
                <div className="ps-card-base ps-header-card">
                    <div className="ps-header-icon">
                        <AlertTriangle size={24} />
                    </div>
                    <h3 className="ps-title">The Challenge</h3>
                </div>

                <div className="ps-card-base ps-image-card">
                    <img
                        src="/images/hidden-growth.jpg"
                        alt="Hidden mold growth under floors and behind walls"
                        loading="lazy"
                        style={{ objectPosition: 'bottom center' }}
                    />
                    <div className="ps-image-overlay">Hidden Growth Risks</div>
                </div>

                <div className="ps-card-base ps-alert-card">
                    <div className="ps-stat-number" style={{ color: '#ef4444', fontSize: '1.25rem' }}>Why is it a risk?</div>
                    <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>
                        Standard cleaning only wipes surface dust. It misses the <strong>microbial growth</strong> fed by Florida's 70%+ humidity, leaving your home vulnerable to toxic mold.
                    </p>
                </div>
            </div>


            {/* COLUMN 2: THE SOLUTION */}
            <div className="ps-bento-col solution-theme">
                <div className="ps-card-base ps-header-card">
                    <div className="ps-header-icon">
                        <ShieldCheck size={24} />
                    </div>
                    <h3 className="ps-title">Our Solution</h3>
                </div>

                <div className="ps-card-base ps-image-card">
                    <img
                        src="/images/clinical-solution-office.jpg"
                        alt="Professional office cleaning team at night"
                        loading="lazy"
                        style={{ objectPosition: 'bottom center' }}
                    />
                    <div className="ps-image-overlay">Clinical Precision</div>
                </div>

                <div className="ps-card-base ps-alert-card">
                    <div className="ps-stat-number" style={{ color: '#22c55e', fontSize: '1.25rem' }}>How we fix it</div>
                    <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5' }}>
                        We don't just clean; we <strong>sterilize</strong>. Using HEPA filtration and hospital-grade antimicrobials, we remove 99.9% of biological contaminants standard maids can't touch.
                    </p>
                </div>
            </div>


            {/* COLUMN 3: SCHEDULE / CALENDAR */}
            <div className="ps-bento-col schedule-theme">
                <div className="ps-card-base ps-header-card">
                    <div className="ps-header-icon">
                        <Calendar size={24} />
                    </div>
                    <h3 className="ps-title">Availability</h3>
                </div>

                {/* Visual Calendar Card */}
                <div className="ps-card-base calendar-visual" style={{ flexGrow: 1 }}>
                    <div className="calendar-header">
                        <span>{today.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
                        <span style={{ color: '#2563eb', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%' }}></span> Live
                        </span>
                    </div>

                    {/* Static Grid (Visual only if Google Link is active) */}
                    <div className="calendar-grid">
                        <span className="cal-day">M</span><span className="cal-day">T</span><span className="cal-day">W</span><span className="cal-day">T</span><span className="cal-day">F</span><span className="cal-day">S</span><span className="cal-day">S</span>
                        {calendarDays.slice(0, 14).map(day => (
                            <span
                                key={day}
                                onClick={() => handleDateClick(day)}
                                className={`cal-num 
                  ${day === currentDay ? 'today' : ''} 
                  ${day > currentDay ? 'available' : ''} 
                  ${selectedDate === day ? 'selected' : ''}
                `}
                                title="View available times"
                            >
                                {day}
                            </span>
                        ))}
                    </div>

                    <div style={{ marginTop: 'auto', textAlign: 'center', paddingTop: '1.5rem' }}>
                        <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1rem' }}>
                            {CALENDLY_URL
                                ? "Official Booking Calendar"
                                : "Select a date to see available slots."}
                        </p>

                        <a
                            href={getButtonLink()}
                            target={CALENDLY_URL ? "_blank" : "_self"}
                            className={`schedule-btn ${!selectedDate && !CALENDLY_URL ? 'disabled' : ''}`}
                        >
                            {getButtonText()} {CALENDLY_URL ? <ExternalLink size={16} /> : <ArrowRight size={16} />}
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProblemSolutionBento;
