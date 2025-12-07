import React, { useState } from 'react';
import Calendar from './Calendar';
import '../../../styles/components/Calculator.css';
import {
    Home, Building2, MapPin, Sparkles, CheckCircle,
    ArrowRight, ArrowLeft, Loader2, Info, DollarSign, Clock
} from 'lucide-react';

const FLORIDA_CITIES = [
    "Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale",
    "West Palm Beach", "Sarasota", "Naples", "Tallahassee"
];

const BookingWizard = () => {
    const [step, setStep] = useState(1);
    const [loadingQuote, setLoadingQuote] = useState(false);
    const [aiQuote, setAiQuote] = useState(null);
    const [customRequest, setCustomRequest] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [booking, setBooking] = useState({
        category: 'RESIDENTIAL',
        serviceType: 'STANDARD',
        bedrooms: 2,
        bathrooms: 2,
        squareFootage: 1000,
        date: null,
        timeSlot: null,
        userDetails: {
            firstName: '', lastName: '', email: '', phone: '',
            address: '', city: 'Miami', zip: '', notes: ''
        }
    });

    const handleSmartQuote = async () => {
        if (!customRequest.trim()) return;
        setLoadingQuote(true);

        // MOCK AI RESPONSE (No API Key required)
        setTimeout(() => {
            setAiQuote({
                estimatedPrice: 180,
                estimatedHours: 3.5,
                recommendation: "Based on your description, we recommend an initial Deep Clean to ensure total sanitization."
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
            formData.append('form-name', 'booking-calculator');

            // Append all booking fields
            formData.append('category', booking.category);
            formData.append('serviceType', booking.serviceType);
            formData.append('bedrooms', booking.bedrooms);
            formData.append('bathrooms', booking.bathrooms);
            formData.append('squareFootage', booking.squareFootage);
            formData.append('date', booking.date ? booking.date.toLocaleDateString('en-US') : '');
            formData.append('timeSlot', booking.timeSlot || '');
            formData.append('firstName', booking.userDetails.firstName);
            formData.append('lastName', booking.userDetails.lastName);
            formData.append('email', booking.userDetails.email);
            formData.append('address', booking.userDetails.address);
            formData.append('city', booking.userDetails.city);
            formData.append('zip', booking.userDetails.zip);

            await fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            });

            setSubmitted(true);
            // alert("Booking Submitted Successfully! Check your email.");
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
            <div className="calc-category-grid">
                <button
                    onClick={() => updateBooking('category', 'RESIDENTIAL')}
                    className={`calc-category-btn ${booking.category === 'RESIDENTIAL' ? 'selected' : ''}`}
                >
                    <Home size={32} className={booking.category === 'RESIDENTIAL' ? 'text-teal-600' : ''} />
                    <span className="font-semibold text-lg">Residential</span>
                </button>
                <button
                    onClick={() => updateBooking('category', 'COMMERCIAL')}
                    className={`calc-category-btn ${booking.category === 'COMMERCIAL' ? 'selected' : ''}`}
                >
                    <Building2 size={32} className={booking.category === 'COMMERCIAL' ? 'text-teal-600' : ''} />
                    <span className="font-semibold text-lg">Commercial</span>
                </button>
            </div>

            <div className="calc-panel">
                <h3 className="text-lg font-semibold mb-4 text-gray-800" style={{ marginBottom: '1rem' }}>Service Details</h3>

                {booking.category === 'RESIDENTIAL' ? (
                    <div className="calc-grid-2">
                        <div>
                            <label className="calc-label">Bedrooms</label>
                            <div className="calc-num-group">
                                {[1, 2, 3, 4, 5].map(num => (
                                    <button
                                        key={num}
                                        onClick={() => updateBooking('bedrooms', num)}
                                        className={`calc-num-btn ${booking.bedrooms === num ? 'selected' : ''}`}
                                    >
                                        {num}{num === 5 ? '+' : ''}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="calc-label">Bathrooms</label>
                            <div className="calc-num-group">
                                {[1, 2, 3, 4, 5].map(num => (
                                    <button
                                        key={num}
                                        onClick={() => updateBooking('bathrooms', num)}
                                        className={`calc-num-btn ${booking.bathrooms === num ? 'selected' : ''}`}
                                    >
                                        {num}{num === 5 ? '+' : ''}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div style={{ gridColumn: '1 / -1' }}>
                            <label className="calc-label">Cleaning Type</label>
                            <div className="calc-types-grid">
                                {['STANDARD', 'DEEP', 'MOVE_IN_OUT'].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => updateBooking('serviceType', type)}
                                        className={`calc-type-btn ${booking.serviceType === type ? 'selected' : ''}`}
                                    >
                                        {type === 'STANDARD' && '✨ Standard'}
                                        {type === 'DEEP' && '🧼 Deep Clean'}
                                        {type === 'MOVE_IN_OUT' && '📦 Move In/Out'}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <label className="calc-label">Estimated Area (Sq Ft)</label>
                        <input
                            type="range"
                            min="500" max="10000" step="100"
                            value={booking.squareFootage}
                            onChange={(e) => updateBooking('squareFootage', parseInt(e.target.value))}
                            style={{ width: '100%', accentColor: '#0d9488' }}
                        />
                        <div className="text-right font-semibold text-teal-700 mt-2">{booking.squareFootage} sq ft</div>
                    </div>
                )}
            </div>

            {/* AI Estimator Widget */}
            <div className="ai-widget">
                <div className="flex items-start gap-3" style={{ display: 'flex', gap: '1rem' }}>
                    <Sparkles size={24} className="text-indigo-500 mt-1" style={{ color: '#6366f1' }} />
                    <div style={{ width: '100%' }}>
                        <h4 style={{ fontWeight: 600, color: '#312e81', marginBottom: '4px' }}>Not sure? AI Smart Estimator</h4>
                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                            <input
                                type="text"
                                placeholder="Ex: 3 bedroom house, very dusty..."
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
                                        <DollarSign size={16} /> ${aiQuote.estimatedPrice}
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
            <Calendar
                selectedDate={booking.date}
                selectedTime={booking.timeSlot}
                onDateSelect={(d) => updateBooking('date', d)}
                onTimeSelect={(t) => updateBooking('timeSlot', t)}
            />
            <div style={{ marginTop: '1rem', padding: '1rem', background: '#fefce8', borderRadius: '0.5rem', border: '1px solid #fef9c3', display: 'flex', gap: '0.75rem', color: '#854d0e', fontSize: '0.9rem' }}>
                <Info size={20} />
                <p>Time slots are subject to final confirmation.</p>
            </div>
        </div>
    );

    const Step3Details = () => (
        <div className="calc-panel fade-in">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>Contact Details</h3>
            <div className="calc-grid-2">
                <div>
                    <label className="calc-label">First Name</label>
                    <input
                        type="text" className="input-field"
                        value={booking.userDetails.firstName}
                        onChange={(e) => updateUserDetails('firstName', e.target.value)}
                    />
                </div>
                <div>
                    <label className="calc-label">Last Name</label>
                    <input
                        type="text" className="input-field"
                        value={booking.userDetails.lastName}
                        onChange={(e) => updateUserDetails('lastName', e.target.value)}
                    />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                    <label className="calc-label">Email</label>
                    <input
                        type="email" className="input-field"
                        value={booking.userDetails.email}
                        onChange={(e) => updateUserDetails('email', e.target.value)}
                    />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                    <label className="calc-label">Address</label>
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
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Success!</h2>
                    <p style={{ color: '#64748b', marginBottom: '2rem' }}>Your request has been sent. We will contact you shortly.</p>
                </div>
            );
        }

        return (
            <div className="calc-panel fade-in success-card">
                <div className="success-icon-bg">
                    <CheckCircle size={32} />
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Almost Done!</h2>
                <p style={{ color: '#64748b', marginBottom: '2rem' }}>Please review your booking details.</p>

                <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '0.75rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#64748b' }}>Service</span>
                        <span style={{ fontWeight: 500 }}>{booking.category} - {booking.serviceType}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#64748b' }}>Date</span>
                        <span style={{ fontWeight: 500 }}>{booking.date ? booking.date.toLocaleDateString('en-US') : '-'} at {booking.timeSlot}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#64748b' }}>Location</span>
                        <span style={{ fontWeight: 500 }}>{booking.userDetails.city}</span>
                    </div>
                </div>

                <button
                    onClick={submitToNetlify}
                    disabled={isSubmitting}
                    className="confirm-btn"
                    style={{ opacity: isSubmitting ? 0.7 : 1 }}
                >
                    {isSubmitting ? <span className="flex items-center justify-center gap-2"><Loader2 className="animate-spin" /> Sending...</span> : "Confirm Booking"}
                </button>
            </div>
        );
    };

    return (
        <div className="calc-container">
            {/* Progress Bar */}
            <div className="calc-progress-container">
                <div className="calc-progress-labels">
                    <span className={`calc-step-label ${step >= 1 ? 'active' : ''}`}>Service</span>
                    <span className={`calc-step-label ${step >= 2 ? 'active' : ''}`}>Date</span>
                    <span className={`calc-step-label ${step >= 3 ? 'active' : ''}`}>Details</span>
                    <span className={`calc-step-label ${step >= 4 ? 'active' : ''}`}>Done</span>
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
