// src/utils/contentEnricher.js

// Genera contenido rico basado en el tipo de servicio y datos básicos
export function enrichSubserviceContent(subData, groupData) {
  const enrichedContent = { ...subData };
  
  // ===== HERO ENRIQUECIDO =====
  if (!enrichedContent.hero) {
    enrichedContent.hero = generateHero(subData, groupData);
  }
  
  // ===== PROCESS/STEPS =====
  if (!enrichedContent.process && !enrichedContent.steps) {
    enrichedContent.process = generateProcess(subData, groupData);
  }
  
  // ===== WHY ESSENTIAL =====
  if (!enrichedContent.whyEssential) {
    enrichedContent.whyEssential = generateWhyEssential(subData, groupData);
  }
  
  // ===== HIGHLIGHTS =====
  if (!enrichedContent.highlights) {
    enrichedContent.highlights = generateHighlights(subData, groupData);
  }
  
  // ===== RISKS =====
  if (!enrichedContent.risks) {
    enrichedContent.risks = generateRisks(subData, groupData);
  }
  
  // ===== MICRO BENEFITS =====
  if (!enrichedContent.microBenefits) {
    enrichedContent.microBenefits = generateMicroBenefits(subData, groupData);
  }
  
  // ===== FLORIDA SCENARIOS =====
  if (!enrichedContent.floridaScenarios) {
    enrichedContent.floridaScenarios = generateFloridaScenarios(subData, groupData);
  }
  
  // ===== WHY CHOOSE US =====
  if (!enrichedContent.whyChooseUs) {
    enrichedContent.whyChooseUs = generateWhyChooseUs(subData, groupData);
  }
  
  // ===== EMERGENCY SIGNS =====
  if (!enrichedContent.emergencySigns) {
    enrichedContent.emergencySigns = generateEmergencySigns(subData, groupData);
  }
  
  // ===== FAQ =====
  if (!enrichedContent.faqs) {
    enrichedContent.faqs = generateFAQs(subData, groupData);
  }
  
  return enrichedContent;
}

// ===== GENERADORES ESPECÍFICOS =====

function generateHero(subData, groupData) {
  const heroTemplates = {
    water: {
      title: `${subData.title}? We Extract Water & Restore Homes Fast`,
      description: `Emergency ${subData.title.toLowerCase()} services in Florida. 24/7 response, certified technicians, and complete restoration to prevent further damage.`,
      cta: "Get Emergency Help",
      iconRow: [
        { icon: "🚨", text: "24/7 Response" },
        { icon: "🛡️", text: "Licensed & Insured" },
        { icon: "⚡", text: "Fast Action" }
      ]
    },
    fire: {
      title: `${subData.title} Restoration - Complete Recovery`,
      description: `Professional ${subData.title.toLowerCase()} cleanup and restoration. Smoke odor removal, soot cleanup, and structural restoration across Florida.`,
      cta: "Start Recovery Now",
      iconRow: [
        { icon: "🔥", text: "Fire Certified" },
        { icon: "🧽", text: "Complete Cleanup" },
        { icon: "🏠", text: "Full Restoration" }
      ]
    },
    mold: {
      title: `Professional ${subData.title} Services in Florida`,
      description: `Certified ${subData.title.toLowerCase()} using advanced detection methods. Protect your family's health with thorough mold assessment and safe remediation.`,
      cta: "Schedule Inspection",
      iconRow: [
        { icon: "🔬", text: "Certified Inspectors" },
        { icon: "🏥", text: "Health-Safe Methods" },
        { icon: "📋", text: "Detailed Reports" }
      ]
    },
    storm: {
      title: `${subData.title} - Emergency Storm Response`,
      description: `Rapid ${subData.title.toLowerCase()} across Florida. From roof tarping to complete reconstruction, we restore your property after severe weather.`,
      cta: "Get Storm Help",
      iconRow: [
        { icon: "🌪️", text: "Storm Specialists" },
        { icon: "⚡", text: "Emergency Response" },
        { icon: "🛠️", text: "Complete Repairs" }
      ]
    },
    mitigation: {
      title: `Professional ${subData.title} Services`,
      description: `Expert ${subData.title.toLowerCase()} to minimize property damage. Quick response and proven techniques to protect your Florida property.`,
      cta: "Get Protection Now",
      iconRow: [
        { icon: "🛡️", text: "Damage Prevention" },
        { icon: "⏱️", text: "Quick Response" },
        { icon: "💰", text: "Cost Savings" }
      ]
    }
  };
  
  return heroTemplates[groupData.template] || heroTemplates.water;
}

function generateProcess(subData, groupData) {
  const processTemplates = {
    water: {
      title: "Our Water Damage Process",
      steps: [
        {
          title: "Emergency Assessment",
          text: "We inspect the extent of water damage and identify the source to prevent further flooding.",
          icon: "fa-solid fa-clipboard-check"
        },
        {
          title: "Water Extraction",
          text: "Powerful pumps and vacuums remove standing water quickly and efficiently.",
          icon: "fa-solid fa-tint"
        },
        {
          title: "Drying & Dehumidification",
          text: "Industrial equipment dries affected areas and removes moisture from the air.",
          icon: "fa-solid fa-wind"
        },
        {
          title: "Cleanup & Restoration",
          text: "We clean, sanitize, and restore your property to pre-damage condition.",
          icon: "fa-solid fa-broom"
        }
      ]
    },
    fire: {
      title: "Fire Damage Recovery Process",
      steps: [
        {
          title: "Safety Assessment",
          text: "We evaluate structural integrity and safety before beginning restoration work.",
          icon: "fa-solid fa-hard-hat"
        },
        {
          title: "Smoke & Soot Removal",
          text: "Specialized equipment removes smoke residue and soot from all surfaces.",
          icon: "fa-solid fa-spray-can"
        },
        {
          title: "Odor Elimination",
          text: "Advanced techniques eliminate smoke odors completely from your property.",
          icon: "fa-solid fa-air-freshener"
        },
        {
          title: "Reconstruction",
          text: "We rebuild and restore damaged areas to their original condition.",
          icon: "fa-solid fa-hammer"
        }
      ]
    },
    mold: {
      title: "Mold Assessment Process",
      steps: [
        {
          title: "Visual Inspection",
          text: "Comprehensive visual examination to identify visible mold and moisture issues.",
          icon: "fa-solid fa-eye"
        },
        {
          title: "Testing & Sampling",
          text: "Air and surface samples are collected for laboratory analysis.",
          icon: "fa-solid fa-vial"
        },
        {
          title: "Lab Analysis",
          text: "Professional laboratory testing identifies mold types and concentration levels.",
          icon: "fa-solid fa-microscope"
        },
        {
          title: "Detailed Report",
          text: "You receive a comprehensive report with findings and recommendations.",
          icon: "fa-solid fa-file-alt"
        }
      ]
    },
    storm: {
      title: "Storm Damage Response",
      steps: [
        {
          title: "Emergency Securing",
          text: "We secure your property with tarps and boarding to prevent further damage.",
          icon: "fa-solid fa-shield"
        },
        {
          title: "Damage Assessment",
          text: "Complete evaluation of storm damage for insurance and repair planning.",
          icon: "fa-solid fa-clipboard-list"
        },
        {
          title: "Water Removal",
          text: "Extract any water infiltration and begin the drying process immediately.",
          icon: "fa-solid fa-tint-slash"
        },
        {
          title: "Restoration",
          text: "Full repair and reconstruction of your storm-damaged property.",
          icon: "fa-solid fa-tools"
        }
      ]
    },
    mitigation: {
      title: "Damage Mitigation Process",
      steps: [
        {
          title: "Rapid Response",
          text: "Quick assessment and immediate action to stop damage progression.",
          icon: "fa-solid fa-bolt"
        },
        {
          title: "Damage Containment",
          text: "Isolate affected areas to prevent spread to undamaged portions.",
          icon: "fa-solid fa-border-all"
        },
        {
          title: "Stabilization",
          text: "Stabilize the environment and materials to prevent further deterioration.",
          icon: "fa-solid fa-balance-scale"
        },
        {
          title: "Documentation",
          text: "Thorough documentation for insurance claims and restoration planning.",
          icon: "fa-solid fa-camera"
        }
      ]
    }
  };
  
  return processTemplates[groupData.template] || processTemplates.water;
}

function generateWhyEssential(subData, groupData) {
  const templates = {
    water: {
      title: "Why Fast Water Action is Critical",
      items: [
        {
          icon: "⏰",
          title: "24-48 Hour Window",
          description: "Mold begins growing within 24-48 hours of water exposure."
        },
        {
          icon: "🏠",
          title: "Structural Damage",
          description: "Water weakens building materials, causing expensive structural issues."
        },
        {
          icon: "💰",
          title: "Insurance Claims",
          description: "Delays can complicate insurance coverage and reduce payouts."
        }
      ]
    },
    mold: {
      title: "Why Professional Mold Inspection Matters",
      items: [
        {
          icon: "🏥",
          title: "Health Protection",
          description: "Hidden mold can cause serious respiratory issues and allergic reactions."
        },
        {
          icon: "🔍",
          title: "Hidden Detection",
          description: "Professional equipment finds mold in walls, HVAC systems, and other hidden areas."
        },
        {
          icon: "📋",
          title: "Documentation",
          description: "Official reports needed for remediation planning and insurance claims."
        }
      ]
    },
    fire: {
      title: "Why Professional Fire Restoration is Essential",
      items: [
        {
          icon: "☣️",
          title: "Toxic Residues",
          description: "Smoke and soot contain harmful chemicals that require professional removal."
        },
        {
          icon: "🏠",
          title: "Hidden Damage",
          description: "Fire damage can affect areas not immediately visible to untrained eyes."
        },
        {
          icon: "⏱️",
          title: "Time-Sensitive",
          description: "Smoke residue becomes permanent if not treated quickly and properly."
        }
      ]
    },
    storm: {
      title: "Why Immediate Storm Response Matters",
      items: [
        {
          icon: "🌧️",
          title: "Water Infiltration",
          description: "Storm damage creates openings that allow water to cause additional damage."
        },
        {
          icon: "🔐",
          title: "Security Risks",
          description: "Damaged doors and windows compromise your property's security."
        },
        {
          icon: "📅",
          title: "Insurance Deadlines",
          description: "Most insurance policies have strict deadlines for reporting storm damage."
        }
      ]
    },
    mitigation: {
      title: "Why Quick Mitigation Saves Money",
      items: [
        {
          icon: "💸",
          title: "Cost Prevention",
          description: "Early mitigation prevents minor issues from becoming major expenses."
        },
        {
          icon: "⚡",
          title: "Rapid Escalation",
          description: "Damage spreads quickly without professional intervention."
        },
        {
          icon: "🎯",
          title: "Targeted Action",
          description: "Professional assessment identifies exactly what needs immediate attention."
        }
      ]
    }
  };
  
  return templates[groupData.template] || templates.water;
}

function generateHighlights(subData, groupData) {
  const baseHighlights = [
    "Licensed & insured professionals",
    "24/7 emergency response available",
    "Advanced equipment & techniques",
    "Direct insurance billing",
    "Florida-certified technicians",
    "Comprehensive damage assessment",
    "Free initial consultation",
    "Guaranteed workmanship"
  ];
  
  const serviceSpecific = {
    water: [
      "Industrial-grade water extraction",
      "Moisture detection technology",
      "Mold prevention protocols"
    ],
    fire: [
      "Smoke odor elimination",
      "Soot removal specialists",
      "Contents cleaning & restoration"
    ],
    mold: [
      "EPA-approved testing methods",
      "Detailed laboratory analysis",
      "Health-focused approach"
    ],
    storm: [
      "Emergency roof tarping",
      "Storm damage specialists",
      "Complete reconstruction services"
    ],
    mitigation: [
      "Rapid damage containment",
      "Prevention-focused approach",
      "Cost-effective solutions"
    ]
  };
  
  return [
    ...baseHighlights.slice(0, 5),
    ...(serviceSpecific[groupData.template] || []),
    ...baseHighlights.slice(5)
  ];
}

function generateRisks(subData, groupData) {
  const riskTemplates = {
    water: [
      "Mold growth within 24-48 hours",
      "Structural damage to floors, walls, and foundation",
      "Electrical hazards from water infiltration",
      "Contamination from sewage or flood water",
      "Permanent staining and odors",
      "Insurance claim complications"
    ],
    fire: [
      "Smoke odor becoming permanent",
      "Soot damage spreading to unaffected areas",
      "Corrosion of metals and electronics",
      "Health risks from toxic residues",
      "Secondary water damage from firefighting",
      "Loss of valuable contents"
    ],
    mold: [
      "Respiratory health problems",
      "Allergic reactions and sensitivities",
      "Structural damage from prolonged growth",
      "Spread to HVAC system contaminating entire property",
      "Decreased property value",
      "Legal liability for tenant health issues"
    ],
    storm: [
      "Water infiltration leading to mold",
      "Further structural damage from weather exposure",
      "Security risks from damaged openings",
      "Utility disruptions and safety hazards",
      "Complete loss if not secured quickly",
      "Insurance claim time limits"
    ],
    mitigation: [
      "Minor damage becoming major repairs",
      "Exponential cost increases over time",
      "Health hazards from prolonged exposure",
      "Property value depreciation",
      "Insurance coverage complications",
      "Business or living disruption extending indefinitely"
    ]
  };
  
  return riskTemplates[groupData.template] || riskTemplates.water;
}

function generateMicroBenefits(subData, groupData) {
  return {
    title: "What You Get",
    benefits: [
      {
        icon: "🔍",
        title: "Thorough Assessment",
        description: "Complete evaluation of all affected areas"
      },
      {
        icon: "📋",
        title: "Detailed Documentation",
        description: "Photos, measurements, and reports for insurance"
      },
      {
        icon: "🛡️",
        title: "Prevention Plan",
        description: "Strategies to prevent future occurrences"
      },
      {
        icon: "💰",
        title: "Cost Transparency",
        description: "Clear pricing with no hidden fees"
      },
      {
        icon: "⚡",
        title: "Fast Response",
        description: "Quick action to minimize damage"
      },
      {
        icon: "🤝",
        title: "Insurance Help",
        description: "We work directly with your insurance company"
      }
    ]
  };
}

function generateFloridaScenarios(subData, groupData) {
  return {
    title: "Common Florida Situations",
    scenarios: [
      {
        icon: "🌀",
        title: "Hurricane Season",
        description: `${subData.title} issues spike during Florida's hurricane season from June through November.`
      },
      {
        icon: "☔",
        title: "Rainy Season",
        description: `Heavy summer rains create perfect conditions for ${subData.title.toLowerCase()} problems.`
      },
      {
        icon: "🌡️",
        title: "High Humidity",
        description: `Florida's year-round humidity accelerates damage and requires specialized techniques.`
      },
      {
        icon: "🏖️",
        title: "Coastal Properties",
        description: `Salt air and coastal weather create unique challenges for ${subData.title.toLowerCase()}.`
      }
    ]
  };
}

function generateWhyChooseUs(subData, groupData) {
  return [
    "Over 10 years serving Florida properties",
    "IICRC-certified restoration technicians",
    "State-of-the-art equipment and techniques",
    "24/7 emergency response team",
    "Direct insurance billing and claims assistance",
    "Licensed, bonded, and fully insured",
    "Comprehensive warranty on all work",
    "Local Florida expertise and knowledge"
  ];
}

function generateEmergencySigns(subData, groupData) {
  const signTemplates = {
    water: {
      title: "Emergency Water Damage Signs",
      signs: [
        {
          icon: "💧",
          title: "Standing Water",
          description: "Any amount of standing water in your property"
        },
        {
          icon: "💨",
          title: "Musty Odors",
          description: "Smell of mold or mildew indicating hidden moisture"
        },
        {
          icon: "🎨",
          title: "Staining",
          description: "Water stains on walls, ceilings, or floors"
        },
        {
          icon: "🌊",
          title: "Warping",
          description: "Buckled floors, warped walls, or sagging ceilings"
        }
      ]
    },
    fire: {
      title: "Fire Damage Warning Signs",
      signs: [
        {
          icon: "💨",
          title: "Smoke Odor",
          description: "Persistent smoke smell throughout the property"
        },
        {
          icon: "⚫",
          title: "Soot Residue",
          description: "Black residue on walls, furniture, or belongings"
        },
        {
          icon: "🔥",
          title: "Heat Damage",
          description: "Warped materials, melted items, or discoloration"
        },
        {
          icon: "💧",
          title: "Water Damage",
          description: "Secondary water damage from firefighting efforts"
        }
      ]
    },
    mold: {
      title: "Mold Inspection Warning Signs",
      signs: [
        {
          icon: "👁️",
          title: "Visible Growth",
          description: "Any visible mold growth, regardless of size"
        },
        {
          icon: "🤧",
          title: "Health Symptoms",
          description: "Respiratory issues, allergies, or unexplained illness"
        },
        {
          icon: "💦",
          title: "Water History",
          description: "Previous water damage, leaks, or flooding"
        },
        {
          icon: "👃",
          title: "Musty Smells",
          description: "Persistent moldy or earthy odors"
        }
      ]
    },
    storm: {
      title: "Storm Damage Warning Signs",
      signs: [
        {
          icon: "🏠",
          title: "Roof Damage",
          description: "Missing shingles, holes, or visible roof damage"
        },
        {
          icon: "🪟",
          title: "Broken Windows",
          description: "Cracked or shattered windows and glass doors"
        },
        {
          icon: "💧",
          title: "Water Intrusion",
          description: "Water entering through storm-damaged areas"
        },
        {
          icon: "🌪️",
          title: "Debris Impact",
          description: "Damage from flying debris or fallen trees"
        }
      ]
    },
    mitigation: {
      title: "When You Need Mitigation",
      signs: [
        {
          icon: "🚨",
          title: "Fresh Damage",
          description: "Any new damage that could worsen without intervention"
        },
        {
          icon: "💧",
          title: "Active Leaks",
          description: "Ongoing water infiltration or moisture problems"
        },
        {
          icon: "⚡",
          title: "Electrical Issues",
          description: "Water near electrical systems or damaged wiring"
        },
        {
          icon: "🏗️",
          title: "Structural Concerns",
          description: "Compromised structural elements requiring stabilization"
        }
      ]
    }
  };
  
  return signTemplates[groupData.template] || signTemplates.water;
}

function generateFAQs(subData, groupData) {
  const faqTemplates = {
    water: [
      { q: "How quickly can you respond to water emergencies?", a: "We provide 24/7 emergency response and typically arrive within 60-90 minutes of your call." },
      { q: "Do you work with insurance companies?", a: "Yes, we work directly with all major insurance companies and can help with your claim process." },
      { q: "How long does water damage restoration take?", a: "Timeline varies based on damage extent, but most projects complete within 3-7 days." },
      { q: "Can you prevent mold growth?", a: "Yes, our rapid response and professional drying techniques prevent mold growth when action is taken quickly." }
    ],
    fire: [
      { q: "Can smoke odor be completely eliminated?", a: "Yes, we use advanced ozone treatment and other techniques to completely eliminate smoke odors." },
      { q: "What items can be restored after fire damage?", a: "Many items can be restored including furniture, electronics, and personal belongings using specialized cleaning techniques." },
      { q: "How do you handle insurance claims?", a: "We document everything thoroughly and work directly with your insurance adjuster to ensure proper coverage." },
      { q: "Is it safe to stay in the property during restoration?", a: "This depends on the extent of damage. We'll assess and advise on safety for your specific situation." }
    ],
    mold: [
      { q: "How accurate are mold inspections?", a: "Our certified inspectors use advanced equipment and laboratory testing for highly accurate results." },
      { q: "How much does a mold inspection cost?", a: "Inspection costs vary by property size and testing needs. We provide free initial assessments." },
      { q: "Do you provide remediation services too?", a: "Yes, if mold is found, we can provide complete remediation services by our certified team." },
      { q: "How long do mold test results take?", a: "Laboratory results typically take 24-48 hours for standard testing." }
    ],
    storm: [
      { q: "Do you provide emergency storm response?", a: "Yes, we offer 24/7 emergency response for storm damage including emergency tarping and securing." },
      { q: "Can you help with insurance storm claims?", a: "Absolutely. We document all damage thoroughly and work directly with insurance adjusters." },
      { q: "How quickly should storm damage be addressed?", a: "Storm damage should be secured immediately to prevent further damage. Contact us right away." },
      { q: "Do you handle both interior and exterior storm damage?", a: "Yes, we provide complete storm damage restoration for both interior and exterior damage." }
    ],
    mitigation: [
      { q: "What is damage mitigation?", a: "Mitigation involves taking immediate action to prevent further damage and stabilize the situation." },
      { q: "How quickly do you respond for mitigation?", a: "We provide 24/7 emergency mitigation services and respond immediately to prevent further damage." },
      { q: "Does insurance cover mitigation services?", a: "Most insurance policies cover reasonable mitigation costs. We work directly with your insurer." },
      { q: "What's the difference between mitigation and restoration?", a: "Mitigation stops damage from getting worse; restoration returns your property to pre-damage condition." }
    ]
  };
  
  return faqTemplates[groupData.template] || faqTemplates.water;
}