---
import BaseLayout from "../layouts/BaseLayout.astro";
import ContactForm from "../components/ContactForm.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FAQ from "../components/AcordeonServices";
---

<BaseLayout
  title="Contact Paramount Property Restoration - Emergency Help & Free Quotes"
  description="Contact Florida's complete property partner for 24/7 emergency restoration or professional remodeling. Licensed, insured, rapid response guaranteed."
>
  <!-- EMERGENCY ALERT BAR -->
  <div class="emergency-alert">
    <div class="emergency-content">
      <div class="emergency-icon">🚨</div>
      <div class="emergency-text">
        <strong>PROPERTY EMERGENCY?</strong> Don't wait - every minute counts!
      </div>
      <a href="tel:+17866022217" class="emergency-btn">
        Call Now: (786) 602-2217
      </a>
    </div>
  </div>

  <section class="contact-hero">
    <div class="hero-content">
      <h1>Contact Paramount Property Restoration</h1>
      <p class="hero-description">
        Emergency restoration response or expert remodeling consultation - we're here to help with all your property needs.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <!-- DUAL CTA SECTION -->
      <div class="dual-cta-section">
        <div class="emergency-cta">
          <div class="cta-icon">🚨</div>
          <h3>Emergency Restoration</h3>
          <p>Water, fire, mold, or storm damage? We respond 24/7</p>
          <div class="emergency-actions">
            <a href="tel:+17866022217" class="btn btn-emergency">
              <i class="fas fa-phone"></i> Emergency: (786) 602-2217
            </a>
            <p class="response-time">⚡ 30-minute response time</p>
          </div>
        </div>

        <div class="remodeling-cta">
          <div class="cta-icon">🔨</div>
          <h3>Remodeling & Construction</h3>
          <p>Planning a renovation? Get your free project estimate</p>
          <div class="remodeling-actions">
            <a href="#contact-form" class="btn btn-remodeling">
              <i class="fas fa-calculator"></i> Get Free Estimate
            </a>
            <p class="response-time">📅 Same-day quote response</p>
          </div>
        </div>
      </div>

      <div class="contact-layout">
        <div class="contact-form-section" id="contact-form">
          <div class="form-header">
            <h2>Send Us a Message</h2>
            <p>Tell us about your project or emergency - we'll get back to you within 2 hours.</p>
          </div>
          <ContactForm client:load />
        </div>

        <div class="contact-info-section">
          <div class="info-card">
            <h3>Contact Information</h3>

            <!-- EMERGENCY CONTACT -->
            <div class="contact-item emergency-contact">
              <div class="contact-icon emergency-icon">
                <i class="fas fa-exclamation-triangle"></i>
              </div>
              <div class="contact-details">
                <h4>🚨 Emergency Line - 24/7</h4>
                <a href="tel:+17866022217" class="emergency-phone">(786) 602-2217</a>
                <p class="emergency-note">Available 24/7/365 - Immediate response for property emergencies</p>
              </div>
            </div>

            <!-- REGULAR BUSINESS CONTACT -->
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-phone-alt"></i>
              </div>
              <div class="contact-details">
                <h4>Business Office</h4>
                <a href="tel:+17866022217">(786) 602-2217</a>
                <p>Mon-Fri: 8:00 AM - 6:00 PM<br>Sat: 9:00 AM - 3:00 PM</p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-details">
                <h4>Email</h4>
                <a href="mailto:services@paramountpropertyrestoration.com">services@paramountpropertyrestoration.com</a>
                <a href="mailto:emergency@paramountpropertyrestoration.com">emergency@paramountpropertyrestoration.com</a>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="contact-details">
                <h4>Service Area</h4>
                <p>
                  Serving All of Florida<br />
                  Orlando • Tampa • Miami • Jacksonville<br />
                  Fort Lauderdale • St. Petersburg & More
                </p>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-icon">
                <i class="fas fa-shield-alt"></i>
              </div>
              <div class="contact-details">
                <h4>Licensing & Insurance</h4>
                <p>
                  Licensed General Contractor<br />
                  IICRC Certified Restoration<br />
                  Fully Insured & Bonded
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to Restore or Remodel?</h2>
        <p>
          From emergency disasters to dream renovations, Paramount Property Restoration is Florida's complete property partner.
        </p>
        <div class="cta-buttons">
          <a href="tel:+18557774357" class="btn btn-emergency">Emergency? Call Now</a>
          <a href="#contact-form" class="btn btn-remodeling">Get Free Quote</a>
        </div>
      </div>
    </div>
  </section>
</BaseLayout>

<style>
  /* EMERGENCY ALERT BAR */
  .emergency-alert {
    background: linear-gradient(45deg, #dc3545, #c82333);
    color: white;
    padding: 1rem 0;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(220, 53, 69, 0.3);
  }

  .emergency-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .emergency-icon {
    font-size: 1.2rem;
    animation: pulse 2s infinite;
  }

  .emergency-btn {
    background: white;
    color: #dc3545;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
  }

  .emergency-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.7; }
    100% { opacity: 1; }
  }

  /* DUAL CTA SECTION */
  .dual-cta-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .emergency-cta, .remodeling-cta {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    text-align: center;
    border-top: 4px solid;
  }

  .emergency-cta {
    border-top-color: #dc3545;
  }

  .remodeling-cta {
    border-top-color: #007bff;
  }

  .cta-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .emergency-cta .cta-icon {
    color: #dc3545;
  }

  .remodeling-cta .cta-icon {
    color: #007bff;
  }

  .btn-emergency {
    background: #dc3545;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
  }

  .btn-remodeling {
    background: #007bff;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
  }

  .btn-emergency:hover, .btn-remodeling:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
  }

  .response-time {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: #666;
  }

  /* EMERGENCY CONTACT STYLING */
  .emergency-contact {
    background: rgba(220, 53, 69, 0.05);
    padding: 1rem;
    border-radius: 8px;
    border: 2px solid rgba(220, 53, 69, 0.2);
  }

  .emergency-icon {
    background: #dc3545 !important;
  }

  .emergency-phone {
    font-size: 1.2rem;
    font-weight: bold;
    color: #dc3545 !important;
  }

  .emergency-note {
    color: #dc3545;
    font-weight: 500;
    margin-top: 0.5rem;
  }

  /* EXISTING STYLES - UPDATED */
  .iconPrueba {
    color: black;
  }

  .contact-hero {
    position: relative;
    width: 100%;
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
    color: white;
    background-image: url("/images/heroContact.jpg");
    background-size: cover;
    background-position: center;
  }

  .contact-hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
  }

  .hero-content h1 {
    max-width: 700px;
    font-size: clamp(3.2rem, 5vw, 5rem);
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 1rem;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  }

  .hero-description {
    font-size: clamp(1.2rem, 2vw, 1.25rem);
    font-weight: 400;
    max-width: 600px;
    margin: 0 auto 2rem;
    opacity: 0.9;
    padding: 0 20px;
  }

  .contact-layout {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: var(--spacing-12, 3rem);
    align-items: start;
  }

  .contact-form-section {
    background: white;
    padding: var(--spacing-4, 1.5rem);
    border-radius: var(--border-radius-lg, 12px);
    box-shadow: var(--shadow-lg, 0 8px 24px rgba(0,0,0,0.1));
  }

  .form-header {
    text-align: center;
    margin-bottom: var(--spacing-8, 2rem);
  }

  .form-header h2 {
    color: var(--text-primary, #2d3748);
    margin-bottom: var(--spacing-3, 1rem);
  }

  .form-header p {
    color: var(--text-secondary, #4a5568);
    margin: 0;
  }

  .contact-info-section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-6, 1.5rem);
  }

  .info-card {
    background: white;
    padding: var(--spacing-6, 1.5rem);
    border-radius: var(--border-radius-lg, 12px);
    box-shadow: var(--shadow, 0 4px 8px rgba(0,0,0,0.1));
  }

  .info-card h3 {
    color: var(--text-primary, #2d3748);
    margin-bottom: var(--spacing-6, 1.5rem);
    font-size: var(--font-size-xl, 1.25rem);
    text-align: center;
  }

  .contact-item {
    display: flex;
    gap: var(--spacing-4, 1rem);
    margin-bottom: var(--spacing-6, 1.5rem);
    padding-bottom: var(--spacing-6, 1.5rem);
    border-bottom: 1px solid #e2e8f0;
  }

  .contact-item:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  .contact-icon {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    background: var(--color-primary, #007bff);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contact-details h4 {
    color: var(--text-primary, #2d3748);
    margin-bottom: var(--spacing-2, 0.5rem);
    font-size: var(--font-size-lg, 1.125rem);
  }

  .contact-details a {
    color: var(--color-primary, #007bff);
    text-decoration: none;
    display: block;
    margin-bottom: var(--spacing-1, 0.25rem);
  }

  .contact-details a:hover {
    text-decoration: underline;
  }

  .contact-details p {
    color: var(--text-secondary, #4a5568);
    line-height: 1.5;
    margin: 0;
  }

  .cta-content {
    text-align: center;
    background: var(--bg-secondary, #f7fafc);
    padding: var(--spacing-12, 3rem);
    border-radius: var(--border-radius-lg, 12px);
  }

  .cta-content h2 {
    margin-bottom: var(--spacing-4, 1rem);
  }

  .cta-content p {
    margin-bottom: var(--spacing-6, 1.5rem);
    font-size: var(--font-size-lg, 1.125rem);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-buttons {
    display: flex;
    gap: var(--spacing-4, 1rem);
    justify-content: center;
    flex-wrap: wrap;
  }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .emergency-content {
      flex-direction: column;
      gap: 0.5rem;
    }

    .dual-cta-section {
      grid-template-columns: 1fr;
    }

    .contact-layout {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }
  }
</style>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll to contact form
    const contactFormLinks = document.querySelectorAll('a[href="#contact-form"]');
    contactFormLinks.forEach(link => {
      link.addEventListener("click", (e: Event) => {
        e.preventDefault();
        const formSection = document.querySelector(".contact-form-section");
        if (formSection) {
          formSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    // Emergency phone number tracking
    const emergencyButtons = document.querySelectorAll('a[href^="tel:+17866022217"]');
    emergencyButtons.forEach(button => {
      button.addEventListener('click', () => {
        console.log('Emergency call initiated');
      });
    });
  });
</script>