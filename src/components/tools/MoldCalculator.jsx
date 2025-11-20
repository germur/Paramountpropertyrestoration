import { useState } from 'react';
import './MoldCalculator.css';

const MoldCalculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertySize: '',
    location: '',
    visibleMold: '',
    affectedArea: '',
    moistureCause: '',
    includeTesting: 'yes',
    additionalSamples: 0,
  });
  const [result, setResult] = useState(null);

  const floridaCities = [
    'Tampa', 'Miami', 'Orlando', 'Jacksonville', 'Fort Lauderdale',
    'West Palm Beach', 'Sarasota', 'Naples', 'Fort Myers', 'Other Florida'
  ];

  const moistureCauses = [
    { value: 'burst-pipe', label: 'Burst Pipe or Sudden Plumbing Failure', coverage: 'high' },
    { value: 'storm-damage', label: 'Storm Damage (Roof/Window Leak)', coverage: 'medium-high' },
    { value: 'fire-damage', label: 'Water Damage from Fire Extinguishing', coverage: 'high' },
    { value: 'chronic-leak', label: 'Chronic Leak or Poor Maintenance', coverage: 'low' },
    { value: 'flooding', label: 'Flooding (Rising Water)', coverage: 'none' },
    { value: 'unknown', label: 'Unknown or Gradual Humidity', coverage: 'low' }
  ];

  const affectedAreas = [
    { value: 'wall-accessible', label: 'Wall (Easy Access)', modifier: 1.0 },
    { value: 'basement', label: 'Basement', modifier: 1.2 },
    { value: 'attic', label: 'Attic', modifier: 1.25 },
    { value: 'crawlspace', label: 'Crawl Space', modifier: 1.3 },
    { value: 'hvac', label: 'HVAC System', modifier: 1.25 }
  ];

  const calculateCost = () => {
    let inspectionBase = 0;
    let testingCost = 0;
    let totalEstimateLow = 0;
    let totalEstimateHigh = 0;

    const size = parseInt(formData.propertySize);
    if (size < 4000) {
      inspectionBase = 300;
      totalEstimateLow = 300;
      totalEstimateHigh = 400;
    } else {
      inspectionBase = 700;
      totalEstimateLow = 700;
      totalEstimateHigh = 1000;
    }

    const areaData = affectedAreas.find(a => a.value === formData.affectedArea);
    const modifier = areaData ? areaData.modifier : 1.0;

    totalEstimateLow = Math.round(totalEstimateLow * modifier);
    totalEstimateHigh = Math.round(totalEstimateHigh * modifier);

    if (formData.includeTesting === 'yes') {
      testingCost = 375;
      totalEstimateLow += 250;
      totalEstimateHigh += 500;
    }

    const additionalSamplesCost = formData.additionalSamples * 75;
    totalEstimateLow += additionalSamplesCost;
    totalEstimateHigh += additionalSamplesCost;

    const causeData = moistureCauses.find(c => c.value === formData.moistureCause);
    const coverageLevel = causeData ? causeData.coverage : 'unknown';

    let remediationLow = 0;
    let remediationHigh = 0;
    if (formData.visibleMold === 'yes') {
      remediationLow = 1200;
      remediationHigh = 3750;

      if (size > 4000) {
        remediationLow = 2500;
        remediationHigh = 10000;
      }
    }

    setResult({
      inspectionBase,
      testingCost,
      additionalSamplesCost,
      totalEstimateLow,
      totalEstimateHigh,
      modifier,
      coverageLevel,
      remediationLow,
      remediationHigh,
      propertySize: size,
    });

    setStep(5);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        return formData.propertySize && formData.location;
      case 2:
        return formData.visibleMold && formData.affectedArea;
      case 3:
        return formData.moistureCause;
      case 4:
        return true;
      default:
        return true;
    }
  };

  const resetCalculator = () => {
    setFormData({
      propertySize: '',
      location: '',
      visibleMold: '',
      affectedArea: '',
      moistureCause: '',
      includeTesting: 'yes',
      additionalSamples: 0,
    });
    setResult(null);
    setStep(1);
  };

  const getCoverageMessage = (level) => {
    switch (level) {
      case 'high':
        return {
          probability: 'High Probability',
          message: 'Your insurance likely covers this type of sudden, accidental damage. Document everything and contact your insurer immediately.',
          color: 'var(--color-success)'
        };
      case 'medium-high':
        return {
          probability: 'Medium-High Probability',
          message: 'Coverage depends on structural damage documentation. Take photos of roof/window damage and file your claim promptly.',
          color: '#3b82f6'
        };
      case 'low':
        return {
          probability: 'Low Probability',
          message: 'Insurance typically excludes mold from maintenance issues or gradual problems. Expect to cover costs out-of-pocket.',
          color: '#f59e0b'
        };
      case 'none':
        return {
          probability: 'Not Covered',
          message: 'Standard homeowners insurance excludes flood damage. You need a separate flood insurance policy for coverage.',
          color: '#ef4444'
        };
      default:
        return {
          probability: 'Unknown',
          message: 'Contact your insurance provider to understand your coverage for mold testing and remediation.',
          color: '#64748b'
        };
    }
  };

  return (
    <div className="mold-calculator">
      <div className="calculator-card">
        {step !== 5 && (
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${(step / 4) * 100}%` }}></div>
          </div>
        )}

        {step === 1 && (
          <div className="calculator-step">
            <h2>Property Information</h2>
            <p className="step-description">Let's start with basic information about your property</p>

            <div className="form-group">
              <label htmlFor="propertySize">Property Size (Square Feet)</label>
              <input
                type="number"
                id="propertySize"
                value={formData.propertySize}
                onChange={(e) => handleInputChange('propertySize', e.target.value)}
                placeholder="e.g., 2500"
                min="500"
                max="50000"
              />
              <small>Typical homes range from 1,500 to 4,000 sq ft</small>
            </div>

            <div className="form-group">
              <label htmlFor="location">Location (Florida)</label>
              <select
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
              >
                <option value="">Select your city</option>
                {floridaCities.map(city => (
                  <option key={city} value={city.toLowerCase().replace(' ', '-')}>{city}</option>
                ))}
              </select>
            </div>

            <button
              className="btn btn-next"
              onClick={nextStep}
              disabled={!validateStep()}
            >
              Next Step →
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="calculator-step">
            <h2>Mold Assessment</h2>
            <p className="step-description">Help us understand the extent of the potential problem</p>

            <div className="form-group">
              <label>Have you detected visible mold or persistent musty odor?</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="visibleMold"
                    value="yes"
                    checked={formData.visibleMold === 'yes'}
                    onChange={(e) => handleInputChange('visibleMold', e.target.value)}
                  />
                  <span>Yes, I see mold or smell mustiness</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="visibleMold"
                    value="no"
                    checked={formData.visibleMold === 'no'}
                    onChange={(e) => handleInputChange('visibleMold', e.target.value)}
                  />
                  <span>No, but I'm concerned</span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="affectedArea">Primary Problem Area</label>
              <select
                id="affectedArea"
                value={formData.affectedArea}
                onChange={(e) => handleInputChange('affectedArea', e.target.value)}
              >
                <option value="">Select area type</option>
                {affectedAreas.map(area => (
                  <option key={area.value} value={area.value}>{area.label}</option>
                ))}
              </select>
              <small>Hard-to-access areas increase inspection time and cost</small>
            </div>

            <div className="button-group">
              <button className="btn btn-back" onClick={prevStep}>
                ← Back
              </button>
              <button
                className="btn btn-next"
                onClick={nextStep}
                disabled={!validateStep()}
              >
                Next Step →
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="calculator-step">
            <h2>Insurance Pre-Qualification</h2>
            <p className="step-description">Understanding the cause helps determine insurance coverage</p>

            <div className="form-group">
              <label>What caused the moisture or water damage?</label>
              <div className="radio-group-vertical">
                {moistureCauses.map(cause => (
                  <label key={cause.value} className="radio-option">
                    <input
                      type="radio"
                      name="moistureCause"
                      value={cause.value}
                      checked={formData.moistureCause === cause.value}
                      onChange={(e) => handleInputChange('moistureCause', e.target.value)}
                    />
                    <span>{cause.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="button-group">
              <button className="btn btn-back" onClick={prevStep}>
                ← Back
              </button>
              <button
                className="btn btn-next"
                onClick={nextStep}
                disabled={!validateStep()}
              >
                Next Step →
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="calculator-step">
            <h2>Testing Scope</h2>
            <p className="step-description">Define the scope of laboratory testing</p>

            <div className="form-group">
              <label>Include laboratory testing? (Air & Surface Samples)</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="includeTesting"
                    value="yes"
                    checked={formData.includeTesting === 'yes'}
                    onChange={(e) => handleInputChange('includeTesting', e.target.value)}
                  />
                  <span>Yes (Recommended)</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="includeTesting"
                    value="no"
                    checked={formData.includeTesting === 'no'}
                    onChange={(e) => handleInputChange('includeTesting', e.target.value)}
                  />
                  <span>No, visual inspection only</span>
                </label>
              </div>
              <small>Testing identifies mold species and toxicity levels</small>
            </div>

            {formData.includeTesting === 'yes' && (
              <div className="form-group">
                <label htmlFor="additionalSamples">Additional Samples ($75 each)</label>
                <input
                  type="number"
                  id="additionalSamples"
                  value={formData.additionalSamples}
                  onChange={(e) => handleInputChange('additionalSamples', parseInt(e.target.value) || 0)}
                  min="0"
                  max="10"
                />
                <small>Recommended for multiple rooms or extensive contamination</small>
              </div>
            )}

            <div className="button-group">
              <button className="btn btn-back" onClick={prevStep}>
                ← Back
              </button>
              <button
                className="btn btn-calculate"
                onClick={calculateCost}
              >
                Calculate Cost 🧮
              </button>
            </div>
          </div>
        )}

        {step === 5 && result && (
          <div className="calculator-result">
            {/* Prominent Disclaimer Banner */}
            <div className="estimate-disclaimer-banner">
              <div className="disclaimer-icon">⚠️</div>
              <div className="disclaimer-content">
                <strong>Tentative Estimate Only</strong>
                <p>These are approximate costs based on typical market rates. Actual prices may vary depending on specific conditions found during inspection. Contact us for an exact quote.</p>
              </div>
            </div>

            <div className="result-header">
              <h2>Your Estimated Cost</h2>
              <p>Based on your property details and testing requirements</p>
            </div>

            <div className="cost-estimate-box">
              <div className="total-range">
                <span className="range-label">Estimated Total Cost</span>
                <span className="range-value">
                  ${result.totalEstimateLow.toLocaleString()} - ${result.totalEstimateHigh.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="cost-breakdown">
              <h3>Cost Breakdown</h3>
              <div className="breakdown-item">
                <span>Professional Inspection</span>
                <span>${result.inspectionBase.toLocaleString()}</span>
              </div>
              {result.testingCost > 0 && (
                <div className="breakdown-item">
                  <span>Laboratory Testing (2 samples included)</span>
                  <span>${result.testingCost.toLocaleString()}</span>
                </div>
              )}
              {result.additionalSamplesCost > 0 && (
                <div className="breakdown-item">
                  <span>Additional Samples ({formData.additionalSamples})</span>
                  <span>${result.additionalSamplesCost.toLocaleString()}</span>
                </div>
              )}
              {result.modifier > 1.0 && (
                <div className="breakdown-note">
                  <small>* Complex access area increases inspection time by {((result.modifier - 1) * 100).toFixed(0)}%</small>
                </div>
              )}
            </div>

            <div className="insurance-coverage">
              <h3>Insurance Coverage Analysis</h3>
              {(() => {
                const coverage = getCoverageMessage(result.coverageLevel);
                return (
                  <div className="coverage-result" style={{ borderLeftColor: coverage.color }}>
                    <div className="coverage-probability" style={{ color: coverage.color }}>
                      {coverage.probability}
                    </div>
                    <p>{coverage.message}</p>
                  </div>
                );
              })()}
            </div>

            {formData.visibleMold === 'yes' && result.remediationLow > 0 && (
              <div className="remediation-warning">
                <h3>⚠️ Potential Remediation Costs</h3>
                <p>If mold is confirmed, professional remediation typically costs:</p>
                <div className="remediation-range">
                  ${result.remediationLow.toLocaleString()} - ${result.remediationHigh.toLocaleString()}
                </div>
                <p className="warning-note">
                  <strong>Important:</strong> Delaying testing can lead to more extensive damage.
                  Untreated mold can depreciate property value by up to 37% and cost significantly
                  more to remediate as it spreads.
                </p>
              </div>
            )}

            <div className="result-actions">
              <a href="/contact" className="btn btn-primary">Schedule Inspection</a>
              <a href="tel:+17866022217" className="btn btn-secondary">Call (786) 602-2217</a>
              <button className="btn btn-reset" onClick={resetCalculator}>
                Calculate Again
              </button>
            </div>

            <div className="disclaimer">
              <small>
                <strong>Important Disclaimer:</strong> This calculator provides tentative estimates only.
                Actual costs can vary significantly based on:
                <ul style={{ marginTop: '0.5rem', marginBottom: '0.5rem', paddingLeft: '1.5rem' }}>
                  <li>Specific conditions discovered during the on-site inspection</li>
                  <li>Extent and type of mold/moisture damage found</li>
                  <li>Accessibility challenges and required safety measures</li>
                  <li>Laboratory testing complexity and additional samples needed</li>
                  <li>Current market rates and availability</li>
                </ul>
                Insurance coverage is subject to your policy terms, cause of damage, and insurer approval.
                This tool is for informational purposes only and does not constitute a binding quote or guarantee of final pricing.
                <strong>Contact us directly for an accurate, customized quote based on a professional assessment.</strong>
              </small>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoldCalculator;
