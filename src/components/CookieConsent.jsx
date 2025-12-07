import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cookie_consent_accepted',
      event_category: 'Privacy',
      event_label: 'Cookie Banner'
    });
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cookie_consent_rejected',
      event_category: 'Privacy',
      event_label: 'Cookie Banner'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <div className="cookie-text">
          <h3>🍪 We Use Cookies</h3>
          <p>
            We use cookies to improve your experience on our website,
            analyze traffic and personalize content. By continuing to browse,
            you accept our use of cookies.
          </p>
          <a href="/terms" className="cookie-link">
            View Terms and Conditions
          </a>
        </div>
        <div className="cookie-actions">
          <button
            onClick={acceptCookies}
            className="cookie-btn accept"
            type="button"
          >
            Accept
          </button>
          <button
            onClick={rejectCookies}
            className="cookie-btn reject"
            type="button"
          >
            Reject
          </button>
        </div>
      </div>

      <style jsx>{`
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: #1e293b; /* Brand Dark Blue/Slate */
          border-top: 3px solid #f97316; /* Brand Orange */
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.2);
          color: white;
          padding: 24px;
          z-index: 9999;
          animation: slideUp 0.5s ease-out;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .cookie-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        .cookie-text h3 {
          margin: 0 0 8px 0;
          font-size: 18px;
          font-weight: 700;
          color: white;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cookie-text p {
          margin: 0 0 12px 0;
          font-size: 14px;
          line-height: 1.5;
          color: #cbd5e1; /* Light gray text */
        }

        .cookie-link {
          color: #35c3e9; /* Brand Blue */
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          border-bottom: 1px solid transparent;
          transition: all 0.2s;
        }

        .cookie-link:hover {
          color: #7dd3fc;
          border-bottom-color: #7dd3fc;
        }

        .cookie-actions {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
        }

        .cookie-btn {
          padding: 12px 28px;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .accept {
          background: #f97316; /* Brand Orange */
          color: white;
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
        }

        .accept:hover {
          background: #ea580c;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(249, 115, 22, 0.4);
        }

        .reject {
          background: transparent;
          color: #94a3b8;
          border: 1px solid #475569;
        }

        .reject:hover {
          border-color: #cbd5e1;
          color: white;
          background: rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 768px) {
          .cookie-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .cookie-actions {
            width: 100%;
          }

          .cookie-btn {
            flex: 1;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}