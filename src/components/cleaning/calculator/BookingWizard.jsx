import React, { useState } from 'react';
import Calendar from './Calendar';
import '../../../styles/components/Calculator.css';
import {
    Building2, MapPin, Sparkles, CheckCircle,
    ArrowRight, ArrowLeft, Loader2, Info, DollarSign, Clock,
    LayoutDashboard
} from 'lucide-react';

const FLORIDA_CITIES = [
    "Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale",
    "West Palm Beach", "Sarasota", "Naples", "Tallahassee"
];

const FACILITY_TYPES = [
    "Corporate Office", "Medical / Dental", "Retail Store", "Industrial / Warehouse",
    "School / Education", "Fitness Center", "HOA Common Areas", "Other"
];

const BookingWizard = () => {
    const [step, setStep] = useState(1);
    const [loadingQuote, setLoadingQuote] = useState(false);
    const [aiQuote, setAiQuote] = useState(null);
    const [customRequest, setCustomRequest] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [booking, setBooking] = useState({
        category: 'COMMERCIAL',
        facilityType: 'Corporate Office',
        frequency: 'WEEKLY',
        squareFootage: 2500,
        date: null,
        timeSlot: null,
        userDetails: {
            organization: '', firstName: '', lastName: '', email: '', phone: '',
            address: '', city: 'Orlando', zip: '', notes: ''
        }
    });

    const handleSmartQuote = async () => {
        if (!customRequest.trim()) return;
        setLoadingQuote(true);

        // MOCK AI RESPONSE (No API Key required)
        setTimeout(() => {
            setAiQuote({
                estimatedPrice: 350,
                estimatedHours: 4,
                recommendation: "For a facility of this nature, we recommend an initial Deep Clean followed by our Daily Porter service."
            });
            setLoadingQuote(false);
        }, 1500);
    };

    const updateBooking = (field, value) => {
        setBooking(prev => ({ ...prev, [field]: value }));
    };

    const updateUserDetails = (field, value) => {
        setBooking(prev => ({
            ...prev,
            userDetails: { ...prev.userDetails, [field]: value }
        }));
    };

    const nextStep = () => setStep(s => Math.min(s + 1, 4));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    const submitToNetlify = async () => {
        setIsSubmitting(true);
        try {
            const formData = new FormData();
            formData.append('form-name', 'booking-calculator-commercial');

            // Append all booking fields
            formData.append('category', booking.category);
            formData.append('facilityType', booking.facilityType);
            formData.append('frequency', booking.frequency);
            formData.append('squareFootage', booking.squareFootage);
            formData.append('date', booking.date ? booking.date.toLocaleDateString('en-US') : '');
            formData.append('timeSlot', booking.timeSlot || '');
            formData.append('organization', booking.userDetails.organization);
            formData.append('firstName', booking.userDetails.firstName);
            formData.append('lastName', booking.userDetails.lastName);
            formData.append('email', booking.userDetails.email);
            formData.append('phone', booking.userDetails.phone);
            formData.append('address', booking.userDetails.address);
            formData.append('city', booking.userDetails.city);
            formData.append('zip', booking.userDetails.zip);

            await fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            });

            setSubmitted(true);
        } catch (error) {
            console.error("Submission error:", error);
            alert("There was an error submitting the form. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // --- Step Components ---

    const Step1Service = () => (
        <div className="fade-in">
            <div className="calc-panel">
                <h3 className="text-lg font-semibold mb-4 text-gray-800" style={{ marginBottom: '1rem' }}>Facility Details</h3>

                <div className="calc-grid-2">
                    <div style={{ gridColumn: '1 / -1' }}>
                        <label className="calc-label">Facility Type</label>
                        <div className="calc-types-grid">
                            {FACILITY_TYPES.slice(0, 6).map((type) => (
                                <button
                                    key={type}
                                    onClick={() => updateBooking('facilityType', type)}
                                    className={`calc-type-btn ${booking.facilityType === type ? 'selected' : ''}`}
                                    style={{ fontSize: '0.9rem' }}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
                        <label className="calc-label">Estimated Area (Sq Ft): <span className="text-teal-700 font-bold">{booking.squareFootage}</span></label>
                        <input
                            type="range"
                            min="1000" max="50000" step="500"
                            value={booking.squareFootage}
                            onChange={(e) => updateBooking('squareFootage', parseInt(e.target.value))}
                            style={{ width: '100%', accentColor: '#0d9488' }}
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                            <span>1,000</span>
                            <span>50,000+</span>
                        </div>
                    </div>

                    <div style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
                        <label className="calc-label">Service Frequency</label>
                        <div className="calc-types-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                            {['DAILY', 'WEEKLY', 'BI-WEEKLY', 'ONE-TIME'].map((freq) => (
                                <button
                                    key={freq}
                                    onClick={() => updateBooking('frequency', freq)}
                                    className={`calc-type-btn ${booking.frequency === freq ? 'selected' : ''}`}
                                >
                                    {freq.replace('-', ' ')}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* AI Estimator Widget */}
            <div className="ai-widget">
                <div className="flex items-start gap-3" style={{ display: 'flex', gap: '1rem' }}>
                    <Sparkles size={24} className="text-indigo-500 mt-1" style={{ color: '#6366f1' }} />
                    <div style={{ width: '100%' }}>
                        <h4 style={{ fontWeight: 600, color: '#312e81', marginBottom: '4px' }}>Smart Proposal Assistant</h4>
                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                            <input
                                type="text"
                                placeholder="Ex: Medical office, high traffic lobby, needs nightly disinfection..."
                                className="ai-input"
                                value={customRequest}
                                onChange={(e) => setCustomRequest(e.target.value)}
                            />
                            <button
                                onClick={handleSmartQuote}
                                disabled={loadingQuote || !customRequest}
                                className="ai-btn"
                            >
                                {loadingQuote ? <Loader2 size={16} className="animate-spin" /> : 'Analyze'}
                            </button>
                        </div>

                        {aiQuote && (
                            <div style={{ marginTop: '1rem', background: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e0e7ff' }}>
                                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                    <div style={{ color: '#16a34a', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <DollarSign size={16} /> Est. ${aiQuote.estimatedPrice}
                                    </div>
                                    <div style={{ color: '#2563eb', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <Clock size={16} /> {aiQuote.estimatedHours}h
                                    </div>
                                </div>
                                <p style={{ fontSize: '0.85rem', color: '#4b5563' }}>{aiQuote.recommendation}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    const Step2Schedule = () => (
        <div className="fade-in">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Preferred Site Walkthrough Time</h3>
            <p className="text-sm text-gray-500 mb-4">Select a time for our operations manager to visit your facility for a firm quote.</p>
            <Calendar
                selectedDate={booking.date}
                selectedTime={booking.timeSlot}
                onDateSelect={(d) => updateBooking('date', d)}
                onTimeSelect={(t) => updateBooking('timeSlot', t)}
            />
        </div>
    );

    const Step3Details = () => (
        <div className="calc-panel fade-in">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>Business Contact</h3>
            <div className="calc-grid-2">
                <div style={{ gridColumn: '1 / -1' }}>
                    <label className="calc-label">Organization / Company Name</label>
                    <input
                        type="text" className="input-field"
                        value={booking.userDetails.organization}
                        onChange={(e) => updateUserDetails('organization', e.target.value)}
                    />
                </div>
                <div>
                    <label className="calc-label">Contact First Name</label>
                    <input
                        type="text" className="input-field"
                        value={booking.userDetails.firstName}
                        onChange={(e) => updateUserDetails('firstName', e.target.value)}
                    />
                </div>
                <div>
                    <label className="calc-label">Contact Last Name</label>
                    <input
                        type="text" className="input-field"
                        value={booking.userDetails.lastName}
                        onChange={(e) => updateUserDetails('lastName', e.target.value)}
                    />
                </div>
                <div>
                    <label className="calc-label">Work Email</label>
                    <input
                        type="email" className="input-field"
                        value={booking.userDetails.email}
                        onChange={(e) => updateUserDetails('email', e.target.value)}
                    />
                </div>
                <div>
                    <label className="calc-label">Phone Number</label>
                    <input
                        type="tel" className="input-field"
                        value={booking.userDetails.phone}
                        onChange={(e) => updateUserDetails('phone', e.target.value)}
                    />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                    <label className="calc-label">Facility Address</label>
                    <input
                        type="text" className="input-field"
                        value={booking.userDetails.address}
                        onChange={(e) => updateUserDetails('address', e.target.value)}
                    />
                </div>
                <div>
                    <label className="calc-label">City</label>
                    <select
                        className="input-field"
                        value={booking.userDetails.city}
                        onChange={(e) => updateUserDetails('city', e.target.value)}
                    >
                        {FLORIDA_CITIES.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="calc-label">Zip Code</label>
                    <input
                        type="text" className="input-field"
                        value={booking.userDetails.zip}
                        onChange={(e) => updateUserDetails('zip', e.target.value)}
                    />
                </div>
            </div>
        </div>
    );

    const Step4Summary = () => {
        if (submitted) {
            return (
                <div className="calc-panel fade-in success-card">
                    <div className="success-icon-bg">
                        <CheckCircle size={32} />
                    </div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Request Received!</h2>
                    <p style={{ color: '#64748b', marginBottom: '2rem' }}>We have received your proposal request. A dedicated account manager will contact you shortly to confirm the walkthrough.</p>
                </div>
            );
        }

        return (
            <div className="calc-panel fade-in success-card">
                <div className="success-icon-bg">
                    <CheckCircle size={32} />
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Review & Submit</h2>
                <p style={{ color: '#64748b', marginBottom: '2rem' }}>Please verify your commercial service request.</p>

                <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '0.75rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#64748b' }}>Facility</span>
                        <span style={{ fontWeight: 500 }}>{booking.facilityType} ({booking.squareFootage} sq ft)</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#64748b' }}>Frequency</span>
                        <span style={{ fontWeight: 500 }}>{booking.frequency}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#64748b' }}>Walkthrough</span>
                        <span style={{ fontWeight: 500 }}>{booking.date ? booking.date.toLocaleDateString('en-US') : '-'} at {booking.timeSlot}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#64748b' }}>Contact</span>
                        <span style={{ fontWeight: 500 }}>{booking.userDetails.organization}</span>
                    </div>
                </div>

                <button
                    onClick={submitToNetlify}
                    disabled={isSubmitting}
                    className="confirm-btn"
                    style={{ opacity: isSubmitting ? 0.7 : 1 }}
                >
                    {isSubmitting ? <span className="flex items-center justify-center gap-2"><Loader2 className="animate-spin" /> Processing...</span> : "Submit Proposal Request"}
                </button>
            </div>
        );
    };

    return (
        <div className="calc-container">
            {/* Progress Bar */}
            <div className="calc-progress-container">
                <div className="calc-progress-labels">
                    <span className={`calc-step-label ${step >= 1 ? 'active' : ''}`}>Facility</span>
                    <span className={`calc-step-label ${step >= 2 ? 'active' : ''}`}>Walkthrough</span>
                    <span className={`calc-step-label ${step >= 3 ? 'active' : ''}`}>Contact</span>
                    <span className={`calc-step-label ${step >= 4 ? 'active' : ''}`}>Submit</span>
                </div>
                <div className="calc-progress-track">
                    <div
                        className="calc-progress-fill"
                        style={{ width: `${(step / 4) * 100}%` }}
                    />
                </div>
            </div>

            {/* Content */}
            <div style={{ minHeight: '400px' }}>
                {step === 1 && <Step1Service />}
                {step === 2 && <Step2Schedule />}
                {step === 3 && <Step3Details />}
                {step === 4 && <Step4Summary />}
            </div>

            {/* Navigation */}
            {step < 4 && !submitted && (
                <div className="calc-nav">
                    <button
                        onClick={prevStep}
                        disabled={step === 1}
                        className="calc-nav-btn btn-back"
                        style={{ opacity: step === 1 ? 0 : 1 }}
                    >
                        <ArrowLeft size={16} /> Back
                    </button>

                    <button
                        onClick={nextStep}
                        disabled={(step === 2 && (!booking.date || !booking.timeSlot))}
                        className="calc-nav-btn btn-next"
                    >
                        Next <ArrowRight size={16} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default BookingWizard;
