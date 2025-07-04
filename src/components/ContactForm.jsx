import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

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

  // Initialize EmailJS when component mounts
  useEffect(() => {
    // Use Astro environment variables
    const publicKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;
    
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
    }
  }, []);

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
      // Get environment variables
      const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;

      // Verify we have credentials
      if (!serviceId || !templateId) {
        throw new Error('EmailJS credentials not configured');
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          subject: formData.subject,
          message: formData.message,
          // Additional fields you can use in your template
          to_name: 'Your Company', // Recipient name (you)
          from_name: formData.name, // Sender name
          reply_to: formData.email, // Reply-to email
        }
      );

      if (response.status === 200) {
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
        
        // Optional: Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('');
        }, 5000);
      }
      
    } catch (error) {
      console.error('Error sending form:', error);
      setSubmitStatus('error');
      
      // Optional: Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
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
            Project Address
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
            Project Type *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="">Select a project type</option>
            <option value="kitchen">Kitchen</option>
            <option value="bathroom">Bathroom</option>
            <option value="home-additions">Home Additions</option>
            <option value="living-dining">Living and Dining</option>
            <option value="bedroom">Bedroom</option>
            <option value="general-repair">General Repair</option>
            <option value="new-construction">New Construction</option>
            <option value="complete-remodel">Complete Remodel</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Project Description *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="form-textarea"
            placeholder="Tell us about your project: What needs to be repaired, built, or remodeled? What are your ideas? Do you have a specific timeline?"
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
              Sending...
            </>
          ) : (
            'Get Free Quote'
          )}
        </button>

        {submitStatus === 'success' && (
          <div className="form-message success">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            Thank you for your message! We'll contact you within 24 hours to discuss your project.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="form-message error">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
            There was an error sending your message. Please try again or contact us directly by phone.
          </div>
        )}
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
          color: var(--text-primary);
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
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit {
          width: 100%;
          padding: 0.875rem 2rem;
          background-color: var(--color-primary);
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
          background-color: var(--color-primary-dark);
          transform: translateY(-1px);
        }

        .form-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .form-submit.submitting {
          background-color: var(--color-secondary);
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
          color: #dc2626;
          border: 1px solid #fecaca;
        }

        @media (max-width: 768px) {
          .contact-form {
            padding: 0 1rem;
          }
        }
      `}</style>
    </>
  );
}