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
    
    // Track acceptance event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'cookie_consent_accepted', {
        event_category: 'Privacy',
        event_label: 'Cookie Banner'
      });
    }
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
    
    // Track rejection event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'cookie_consent_rejected', {
        event_category: 'Privacy',
        event_label: 'Cookie Banner'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <div className="cookie-text">
          <h3>🍪 Utilizamos Cookies</h3>
          <p>
            Usamos cookies para mejorar tu experiencia en nuestro sitio web, 
            analizar el tráfico y personalizar el contenido. Al continuar navegando, 
            aceptas nuestro uso de cookies.
          </p>
          <a href="/terms" className="cookie-link">
            Ver Términos y Condiciones
          </a>
        </div>
        <div className="cookie-actions">
          <button 
            onClick={acceptCookies}
            className="cookie-btn accept"
            type="button"
          >
            Aceptar
          </button>
          <button 
            onClick={rejectCookies}
            className="cookie-btn reject"
            type="button"
          >
            Rechazar
          </button>
        </div>
      </div>

      <style jsx>{`
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          color: white;
          padding: 20px;
          z-index: 9999;
          border-top: 3px solid #35c3e9;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
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
          gap: 20px;
        }

        .cookie-text h3 {
          margin: 0 0 8px 0;
          font-size: 18px;
          font-weight: 600;
          color: #35c3e9;
        }

        .cookie-text p {
          margin: 0 0 8px 0;
          font-size: 14px;
          line-height: 1.5;
          opacity: 0.9;
        }

        .cookie-link {
          color: #35c3e9;
          text-decoration: underline;
          font-size: 13px;
          transition: color 0.3s ease;
        }

        .cookie-link:hover {
          color: #4dd5f5;
        }

        .cookie-actions {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
        }

        .cookie-btn {
          padding: 12px 24px;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 100px;
        }

        .accept {
          background: #35c3e9;
          color: white;
        }

        .accept:hover {
          background: #2bb3d9;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(53, 195, 233, 0.3);
        }

        .reject {
          background: transparent;
          color: #ccc;
          border: 1px solid #666;
        }

        .reject:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border-color: #999;
        }

        @media (max-width: 768px) {
          .cookie-content {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }

          .cookie-actions {
            width: 100%;
            justify-content: center;
          }

          .cookie-btn {
            flex: 1;
            max-width: 140px;
          }

          .cookie-text h3 {
            font-size: 16px;
          }

          .cookie-text p {
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .cookie-banner {
            padding: 16px;
          }

          .cookie-actions {
            flex-direction: column;
            gap: 8px;
          }

          .cookie-btn {
            max-width: none;
          }
        }
      `}</style>
    </div>
  );
}