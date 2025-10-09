import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const form = e.target;
      const formDataToSend = new FormData(form);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          subject: '',
          message: ''
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('');
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
      
    } catch (error) {
      console.error('Error sending form:', error);
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form 
        className="contact-form" 
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* Hidden fields for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="John Doe"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="john@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="(555) 123-4567"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address" className="form-label">
            Property Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-input"
            placeholder="123 Main St, City, State 12345"
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            Service Type *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="">Choose service type</option>
            <option value="restoration">Emergency Restoration (Water, Fire, Mold, Storm)</option>
            <option value="remodeling">Remodeling & Construction (Kitchen, Bathroom, Additions)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="form-textarea"
            placeholder="Please describe your situation: Is this an emergency? What happened? What needs to be repaired or remodeled? Any specific timeline or concerns?"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`form-submit ${isSubmitting ? 'submitting' : ''}`}
        >
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              Sending Request...
            </>
          ) : (
            'Send Request - Get Response Within 1 Hour'
          )}
        </button>

        {submitStatus === 'success' && (
          <div className="form-message success">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            Thank you! We received your request and will respond within 1 hour. For emergencies, please call (786) 602-2217 immediately.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="form-message error">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
            Error sending your request. For immediate help, please call us at (786) 602-2217
          </div>
        )}

        <div className="emergency-notice">
          <div className="emergency-icon">🚨</div>
          <div className="emergency-text">
            <strong>EMERGENCY?</strong> Don't wait - call us now for immediate response!
            <a href="tel:+17866022217" className="emergency-phone">(786) 602-2217</a>
          </div>
        </div>
      </form>

      <style>{`
        .contact-form {
          max-width: 600px;
          margin: 0 auto;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--text-primary, #1e293b);
        }

        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e2e8f0;
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          background-color: white;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #f59e0b;
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-select optgroup {
          font-weight: bold;
          color: #374151;
          background-color: #f9fafb;
        }

        .form-select option {
          font-weight: normal;
          color: #1f2937;
          background-color: white;
        }

        .form-submit {
          width: 100%;
          padding: 0.875rem 2rem;
          background-color: #f59e0b;
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .form-submit:hover:not(:disabled) {
          background-color: #d97706;
          transform: translateY(-1px);
        }

        .form-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .form-submit.submitting {
          background-color: #6b7280;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .form-message {
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .form-message.success {
          background-color: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
        }

        .form-message.error {
          background-color: #fef2f2;
          color: var(--color-error);
          border: 1px solid #fecaca;
        }

        .emergency-notice {
          margin-top: 2rem;
          padding: 1rem;
          background-color: #fef3c7;
          border: 2px solid #f59e0b;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .emergency-icon {
          font-size: 1.5rem;
        }

        .emergency-text {
          flex: 1;
          color: #92400e;
          font-size: 0.875rem;
        }

        .emergency-phone {
          display: block;
          color: #f59e0b;
          font-weight: bold;
          font-size: 1rem;
          text-decoration: none;
          margin-top: 0.25rem;
        }

        .emergency-phone:hover {
          color: #d97706;
        }

        @media (max-width: 768px) {
          .contact-form {
            padding: 0 1rem;
          }

          .emergency-notice {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }
        }
      `}</style>
    </>
  );
}