import { useState } from 'react';
import '../styles/components/AcordeonServices.css';

// Banco de preguntas categorizadas
const faqData = {
    storm: [
        {
            id: 'storm-1',
            question: 'What should I do right after storm damage?',
            answer: 'Ensure safety, shut off utilities if needed, document damage with photos, and call us for emergency tarping and board-up.'
        },
        {
            id: 'storm-2',
            question: 'Do you provide emergency roof tarping and board-up?',
            answer: 'Yes. We secure roofs and openings immediately to prevent additional water intrusion and theft.'
        },
        {
            id: 'storm-3',
            question: 'Can you remove fallen trees and debris?',
            answer: 'We safely remove branches, trees, and exterior debris to clear access and reduce hazards.'
        },
        {
            id: 'storm-4',
            question: 'What if water entered the house during the storm?',
            answer: 'We perform water extraction, structural drying, and antimicrobial treatment to prevent mold growth.'
        },
        {
            id: 'storm-5',
            question: 'How long does storm restoration take?',
            answer: 'Minor repairs can take a few days; major exterior and interior rebuilds may take several weeks depending on scope and materials'
        },
        {
            id: 'storm-6',
            question: 'Do you work with insurance claims?',
            answer: 'Yes. We document damages, provide estimates, and coordinate with your insurer to streamline the process.'
        },
        {
            id: 'storm-7',
            question: 'Is it safe to stay in the property after storm damage?',
            answer: 'It depends on structural stability, electrical safety, and contamination. We assess safety during our inspection.'
        },
        {
            id: 'storm-8',
            question: 'What areas do you serve?',
            answer: 'We serve Orlando, Miami, Tampa, and surrounding communities for emergency response and full restoration.'
        }
    ],
    mold: [
        {
            id: 'mold-1',
            question: 'How do I know if I have mold?',
            answer: 'Common signs include musty odors, visible spots, humidity issues, and allergy-like symptoms. An inspection and testing confirm presence and type.'
        },
        {
            id: 'mold-2',
            question: 'Is black mold dangerous?',
            answer: 'Some species can trigger respiratory issues and allergies. We use strict PPE, containment, and HEPA filtration to remove it safely.'
        },
        {
            id: 'mold-3',
            question: 'What does mold remediation include?',
            answer: `• Inspection, moisture mapping & lab testing.
            • Containment barriers & negative air/HEPA filtration.
            • Removal of contaminated materials & deep cleaning.
            • Antimicrobial treatment & source correction.`
        },
        {
            id: 'mold-4',
            question: 'Do you test mold before and after?', answer: 'Yes. Pre- and post-remediation tests verify scope and confirm success (clearance testing).'
        },
        {
            id: 'mold-5',
            question: 'How long does remediation take?',
            answer: 'Most projects take 1–5 days depending on size, materials, and humidity levels.'
        },
        {
            id: 'mold-6',
            question: 'Will mold come back?',
            answer: 'Not if the moisture source is fixed. We address leaks, improve ventilation, and set humidity targets to prevent recurrence.'
        },
        {
            id: 'mold-7',
            question: 'Is mold removal covered by insurance?',
            answer: 'Coverage varies. Sudden water events may be covered; ongoing leaks or maintenance issues often are not. We help with documentation.'
        },
        {
            id: 'mold-8',
            question: 'Is it safe to stay in my home during remediation?',
            answer: 'We isolate work areas and use HEPA filtration. For large projects or sensitive individuals, temporary relocation may be recommended.'
        }
    ],
    water: [
        {
            id: 'water-1',
            question: 'How fast should water damage restoration start?',
            answer: 'Ideally within 24 hours. Early extraction and drying reduce structural damage and the risk of mold growth.'
        },
        {
            id: 'water-2',
            question: 'What does the water damage process include?',
            answer: 'Our process includes: emergency inspection & moisture mapping, water extraction, cleaning & sanitizing, odor control, repairs, and finish restoration.'
        },
        {
            id: 'water-3',
            question: 'Do you handle floods, leaks, and burst pipes?',
            answer: 'Yes. We respond to storm flooding, appliance failures, roof leaks, slab leaks, and burst supply lines.'
        },
        {
            id: 'water-4',
            question: 'Can you prevent mold after water damage?',
            answer: 'Yes. We control humidity, remove wet materials when needed, and apply antimicrobial treatments to prevent mold.'
        },
        {
            id: 'water-5',
            question: 'How long does structural drying take?',
            answer: 'Typically 2–5 days, depending on materials, saturation, ventilation, and indoor humidity. We monitor progress daily.'
        },
        {
            id: 'water-6',
            question: 'Will my insurance cover water damage?',
            answer: 'Many policies cover sudden or accidental water events. Flooding from storms may require separate flood insurance. We assist with documentation for your claim.'
        },
        {
            id: 'water-7',
            question: 'What items can be saved after water damage?',
            answer: 'Non-porous items often clean well. Porous materials like carpet padding, insulation, and MDF may need replacement based on contamination level.'
        },
        {
            id: 'water-8',
            question: 'Is the property safe during restoration?',
            answer: 'Absolutely. We isolate affected areas, use safe equipment, and follow industry best practices to protect occupants and workers.'
        },
        {
            id: 'water-9',
            question: 'What should I do first after a flood?',
            answer: 'Stay safe, shut off electricity if needed, and call for emergency water removal. Avoid entering rooms with standing water.'
        },
        {
            id: 'water-10',
            question: 'What happens if flood water isn\'t removed quickly?',
            answer: 'Mold, structural damage, and electrical hazards escalate within days, turning small repairs into major reconstruction.'
        }
    ],
    fire: [
        {
            id: 'fire-1',
            question: 'How quickly should fire damage restoration begin?',
            answer: 'It’s best to start fire damage restoration within 24–48 hours to prevent further structural damage, limit smoke and soot penetration, and reduce the risk of mold growth from firefighting water.'
        },
        {
            id: 'fire-2',
            question: 'What does the fire damage restoration process include?',
            answer: `Our process typically includes:
            • Emergency board-up and property securing.
            • Water extraction and drying (from firefighting).
            • Smoke and soot cleanup from surfaces and air.
            • Structural repairs and rebuilding as needed.`
        },
        {
            id: 'fire-3',
            question: 'Can smoke odor be completely removed?',
            answer: 'Yes. We use advanced deodorization techniques such as thermal fogging, ozone treatment, and HEPA air filtration to completely remove smoke odors from structures and contents.'
        },
        {
            id: 'fire-4',
            question: 'Will my belongings be restored or replaced?',
            answer: 'We evaluate all items individually. Many belongings can be cleaned and restored using specialized equipment. Severely damaged items may need replacement, and we can help document them for insurance claims.'
        },
        {
            id: 'fire-5',
            question: 'Do you work with insurance companies?',
            answer: 'Yes, we work directly with most insurance providers to speed up the claims process, handle required documentation, and ensure the restoration aligns with your policy coverage.'
        },
        {
            id: 'fire-6',
            question: 'Is fire damage covered by my insurance?',
            answer: 'Most standard homeowner’s insurance policies cover fire damage, including smoke and water damage caused by firefighting. Coverage details vary, so we recommend reviewing your policy with your insurer.'
        },
        {
            id: 'fire-7',
            question: 'How long does fire damage restoration take?',
            answer: 'Restoration timelines depend on the extent of the damage. Minor cases can take a few days, while major structural repairs can take several weeks. We provide a detailed timeline after inspection.'
        },
        {
            id: 'fire-8',
            question: 'Is my property safe to enter after a fire?',
            answer: 'Never enter without clearance from fire officials. Structural instability, lingering smoke, and hazardous debris can pose serious risks. We assess safety before beginning any work.'
        }
    ],
    kitchen: [
        {
            id: 'kitchen-1',
            question: 'How long should a full kitchen remodel take?',
            answer: 'A comprehensive kitchen remodel generally takes between 6 to 12 weeks. This timeframe includes initial design, material sourcing, demolition, installation, and final inspections. Be aware that custom orders or local permitting processes in Florida may influence the timeline.'
        },
        {
            id: 'kitchen-2',
            question: 'How long does it take to replace kitchen cabinets and countertops?',
            answer: 'Replacing kitchen cabinets and countertops is a significant part of a remodel. Typically, cabinet installation can take 3-5 days, while countertop installation by professionals is usually completed within 1-2 days. These times can vary based on complexity and material availability.'
        },
        {
            id: 'kitchen-3',
            question: 'In what order should you remodel a kitchen?',
            answer: `The optimal order for a kitchen remodel is:
            1. Planning & Design: Finalize your layout, materials, and secure permits.
            2. Demolition: Remove old cabinets, flooring, etc.
            3. Rough-in Work: Install new plumbing and electrical lines.
            4. Insulation & Drywall: Prepare walls for finishes.
            5. Flooring: Install new kitchen flooring.
            6. Cabinetry: Install your chosen kitchen cabinets.
            7. Countertops: Install new kitchen countertops.
            8. Backsplash & Appliances: Install backsplash and integrate appliances.
            9. Painting & Finishing Touches: Final coat of paint, light fixtures, and hardware.`
        },
        {
            id: 'kitchen-4',
            question: 'How much is too much to spend on a kitchen remodel?',
            answer: 'What\'s "too much" for a kitchen remodel is subjective, but a good rule of thumb is to consider your home\'s value and the expected ROI. In Florida, homeowners often see a 60-70% return on investment for kitchen remodels. Avoid overspending on features that don\'t align with your neighborhood\'s home values or your long-term plans. Our team can help you define a realistic budget that maximizes value.'
        },
        {
            id: 'kitchen-5',
            question: 'How often should you renovate your kitchen?',
            answer: 'The frequency of kitchen renovation depends on wear and tear, trends, and functionality needs. Generally, a kitchen may need a cosmetic update every 5-7 years (paint, fixtures), and a more significant remodel every 10-15 years to address aging systems, improve efficiency, or align with modern living.'
        },
        {
            id: 'kitchen-6',
            question: 'Do cabinets go in before or after flooring?',
            answer: 'For a kitchen remodel, it\'s generally recommended to install the flooring first, particularly if you\'re using hardwood, laminate, or tile. This ensures a seamless look, prevents damage to newly installed cabinets, and simplifies future flooring replacement if needed. However, we\'ll advise the best approach for your specific project.'
        },
        {
            id: 'kitchen-7',
            question: 'Should cabinets be lighter or darker than countertops?',
            answer: `The choice between lighter or darker kitchen cabinets and countertops depends entirely on your aesthetic goals.
            • Lighter cabinets/darker countertops: Creates contrast and a grounded feel.
            • Darker cabinets/lighter countertops: Offers a striking, elegant look.
            • All light/all dark: Creates a cohesive, spacious, or dramatic effect.
            Our design team can help you explore color palettes and material combinations to achieve your desired style.`
        },
        {
            id: 'kitchen-8',
            question: 'How quickly can you renovate a kitchen?',
            answer: 'While a full kitchen remodel takes 6-12 weeks, minor kitchen renovations can be completed much faster. Updates like painting, replacing the backsplash, or upgrading fixtures can often be done in 1-2 weeks. We focus on efficient project management to minimize disruption to your daily life.'
        },
        {
            id: 'kitchen-9',
            question: 'How long does it take professionals to install countertops?',
            answer: 'Once your kitchen countertops are fabricated and ready, professional installation typically takes one to two full days. The exact time depends on the material, the complexity of the layout (e.g., curves, multiple seams, sink cutouts), and the overall size of your kitchen.'
        },
        {
            id: 'kitchen-10',
            question: 'How many hours does it take to install kitchen cabinets?',
            answer: 'Installing kitchen cabinets for a typical kitchen usually takes professionals between 24 to 40 hours of labor, spread over several days. This includes assembling, leveling, securing, and installing hardware. Custom or complex cabinet systems may require more time.'
        }
    ],
    bathroom: [
        {
            id: 'bath-1',
            question: 'What is a realistic budget for a bathroom remodel?',
            answer: `A realistic budget for a bathroom remodel in Florida ranges from $8,000 (basic refresh) to $25,000+ (full remodel). Costs depend on:
            • Materials: Tile, fixtures, cabinetry.
            • Labor: Plumbing, electrical, demolition.
            • Scope: Cosmetic updates vs. structural changes.
            Explore our Bathroom Cost Guide for a detailed breakdown.`
        },
        {
            id: 'bath-2',
            question: 'What is the meaning of bathroom remodel?',
            answer: 'A bathroom remodel involves structural or layout changes (e.g., moving plumbing, replacing walls). Unlike renovation (cosmetic updates), remodeling transforms functionality.'
        },
        {
            id: 'bath-3',
            question: 'How much should it cost to renovate a bathroom?',
            answer: `In Florida, average costs are:
            • Basic: $5,000–$10,000 (paint, fixtures, regrouting).
            • Mid-Range: $10,000–$20,000 (new tile, vanity, lighting).
            • Luxury: $25,000+ (layout changes, premium materials).`
        },
        {
            id: 'bath-4',
            question: 'Can you remodel a bathroom for $5000?',
            answer: `Yes, for minor updates:
            • Refinish bathtub ($800–$1,500).
            • Replace fixtures ($300–$1,000).
            • Update lighting ($200–$800).
            Not feasible for full remodels or layout changes.`
        },
        {
            id: 'bath-5',
            question: 'Can I renovate my bathroom for $10,000?',
            answer: `Yes! A $10,000 budget covers:
            • Mid-grade tile ($2,000–$4,000).
            • New vanity ($1,500–$3,000).
            • Standard shower installation ($2,500–$4,000).`
        },
        {
            id: 'bath-6',
            question: 'What is the most expensive part of a bathroom remodel?',
            answer: `• Labor (30–40% of budget).
            • Plumbing/Electrical Work (moving pipes, rewiring).
            • Custom Features (heated floors, smart showers).`
        },
        {
            id: 'bath-7',
            question: 'How long does it take to fully renovate a bathroom?',
            answer: `• Basic: 1–2 weeks.
            • Full Remodel: 3–6 weeks (permits, custom materials).
            Delays common in Florida due to humidity inspections.`
        },
        {
            id: 'bath-8',
            question: 'Is redoing a bathroom a good investment?',
            answer: `Yes! Florida homeowners see 60–70% ROI. Top value-boosters:
            • Walk-in showers.
            • Energy-efficient fixtures.
            • Neutral, modern designs.`
        },
        {
            id: 'bath-9',
            question: 'How much to replace a bath with a shower?',
            answer: `• Basic: $2,500–$4,500 (prefab shower kit).
            • Custom: $5,000–$10,000 (tile, glass doors, drainage).
            Includes demolition, disposal, and waterproofing.`
        },
        {
            id: 'bath-10',
            question: 'What comes first in bathroom remodeling?',
            answer: `1. Demolition (remove old fixtures).
            2. Plumbing/Electrical Rough-In.
            3. Waterproofing (critical for Florida humidity).
            4. Tile & Flooring.`
        },
        {
            id: 'bath-11',
            question: 'What is the difference between renovation and remodel?',
            answer: `• Renovation: Surface updates (paint, hardware).
            • Remodel: Structural changes (new layout, plumbing).`
        },
        {
            id: 'bath-12',
            question: 'How to remodel a bathroom in 7 steps?',
            answer: `1. Plan & Budget.
            2. Demolition.
            3. Plumbing/Electrical.
            4. Waterproofing.
            5. Install Tile/Fixtures.
            6. Paint & Finish.
            7. Final Inspection.
            Download our 7-Step Checklist →`
        },
        {
            id: 'bath-13',
            question: 'What adds the most value to a bathroom?',
            answer: `• Walk-In Showers (75% ROI).
            • Double Vanities (especially for master baths).
            • Energy-Efficient Ventilation (Florida humidity control).`
        },
        {
            id: 'bath-14',
            question: 'What is the best way to pay for a bathroom remodel?',
            answer: `• Cash: Avoid interest (ideal for $5k–$15k projects).
            • Home Equity Loan: Low rates for large projects ($20k+).
            • Financing Partners: We offer 0% APR for 12 months.`
        },
        {
            id: 'bath-15',
            question: 'Are one day shower remodels worth it?',
            answer: `Pros: Minimal disruption, lower labor costs.
            Cons: Limited customization (prefab kits only).
            Best for: Rental properties, quick upgrades.`
        }
    ],
    bedroom: [
        {
            id: 'bed-1',
            question: 'How long does a bedroom remodel typically take in Florida?',
            answer: 'The duration of a bedroom remodel in Florida depends on the scope. A cosmetic refresh might take 1-3 weeks. More extensive remodels involving layout changes, custom built-ins, or en-suite bathroom additions can range from 4 to 8 weeks, depending on permitting and material availability.'
        },
        {
            id: 'bed-2',
            question: 'What is the average cost of remodeling a bedroom in Florida?',
            answer: 'The cost of a bedroom remodel in Florida varies significantly. Basic updates might start around $5,000, while a luxurious master suite renovation could easily exceed $30,000. Factors like custom cabinetry, flooring, lighting, and smart home technology integration all influence the final budget.'
        },
        {
            id: 'bed-3',
            question: 'Do I need a general contractor for a bedroom remodel?',
            answer: 'For minor updates (paint, light fixtures), you might not need one. However, for significant bedroom remodels involving structural changes, wall removal, or extensive electrical/plumbing work (e.g., adding an en-suite bathroom), hiring a licensed general contractor in Florida is highly recommended to manage complexity and ensure code compliance.'
        },
        {
            id: 'bed-4',
            question: 'What are the best ways to maximize space in a small bedroom remodel?',
            answer: `To maximize space in a small bedroom remodel, consider:
            • Custom built-in storage and shelving.
            • Wall-mounted furniture or floating desks.
            • Light color palettes to make the room feel larger.
            • Strategic lighting to brighten corners.
            • Sliding barn doors or pocket doors instead of traditional swing doors.`
        },
        {
            id: 'bed-5',
            question: 'Can you integrate smart home features into my bedroom remodel?',
            answer: 'Absolutely! We specialize in incorporating smart home technology into bedroom remodels for enhanced comfort and convenience. This includes automated lighting and shades, smart thermostats for climate control, integrated sound systems, and even smart security features, all controllable from your device.'
        },
        {
            id: 'bed-6',
            question: 'What kind of flooring is best for a bedroom?',
            answer: 'Popular and comfortable flooring options for bedrooms include hardwood, carpet (for warmth and sound dampening), engineered wood, and luxury vinyl plank (LVP). The best choice depends on your personal preference for comfort, aesthetics, and maintenance.'
        },
        {
            id: 'bed-7',
            question: 'How can I improve the energy efficiency of my bedroom during a remodel?',
            answer: `To boost the energy efficiency of your bedroom, consider:
            • Upgrading to energy-efficient windows and insulation.
            • Installing a smart thermostat for zoned climate control.
            • Switching to LED lighting.
            • Exploring options for solar window treatments or passive solar design if applicable.`
        },
        {
            id: 'bed-8',
            question: 'What is the typical ROI for a bedroom remodel in Florida?',
            answer: 'A thoughtfully executed bedroom remodel in Florida, especially a master suite, can offer a strong return on investment (ROI), often ranging from 40-70%. Key enhancements that boost ROI include updated bathrooms (if en-suite), improved closet space, and modern, neutral designs.'
        },
        {
            id: 'bed-9',
            question: 'What should I consider for a child\'s bedroom remodel?',
            answer: `For a child's bedroom remodel, consider:
            • Durability and easy-to-clean materials.
            • Flexible designs that can grow with the child.
            • Integrated storage solutions (built-in desks, shelving).
            • Safety features and non-toxic materials.
            • Future-proofing for technology integration as they grow.`
        },
        {
            id: 'bed-10',
            question: 'How do you ensure my new bedroom feels like a true sanctuary?',
            answer: 'We focus on a holistic approach to create your ideal sanctuary. This includes optimizing natural light, selecting calming color palettes, integrating soundproofing, designing personalized storage, and offering smart home integrations for ultimate control over lighting, temperature, and entertainment, ensuring a peaceful and comfortable retreat.'
        }
    ],
    'living-dining': [
        {
            id: 'living-1',
            question: 'How long does a living and dining room remodel typically take?',
            answer: 'The duration of a living and dining room remodel varies based on scope. Cosmetic updates (paint, flooring) might take 2-4 weeks. More extensive remodels involving layout changes or structural work can range from 6 to 12 weeks, depending on permitting and material availability in Florida.'
        },
        {
            id: 'living-2',
            question: 'What is the average cost of remodeling a living and dining room in Florida?',
            answer: 'The cost of a living and dining room remodel in Florida can vary significantly, typically from $10,000 (for minor updates) to $50,000+ (for full transformations). Factors influencing cost include material selections (flooring, lighting, built-ins) and the extent of structural or electrical work.'
        },
        {
            id: 'living-3',
            question: 'What are the benefits of an open concept living and dining area?',
            answer: 'Open concept living and dining areas create a more spacious, modern, and versatile environment. Benefits include improved natural light, better flow for entertaining, and increased visual connectivity between spaces. It often makes homes feel larger and more inviting.'
        },
        {
            id: 'living-4',
            question: 'Do I need a general contractor for a living and dining room remodel?',
            answer: 'For significant living and dining room remodels involving wall removal, structural changes, or extensive electrical/plumbing work, hiring a licensed general contractor in Florida is highly recommended. We ensure proper coordination of trades, adherence to codes, and a smooth project flow.'
        },
        {
            id: 'living-5',
            question: 'Can you help with interior design and material selection for my living and dining space?',
            answer: 'Absolutely! Our team includes experienced designers who will guide you through material selection (flooring, paint, lighting, finishes) and furniture placement, ensuring your living and dining room remodel reflects your personal style and maximizes functionality.'
        },
        {
            id: 'living-6',
            question: 'Can smart home technology be integrated into living and dining areas?',
            answer: 'Yes! Smart home technology seamlessly integrates into living and dining areas to enhance comfort and convenience. This includes automated lighting, smart climate control, integrated audio-visual systems, and even voice-activated controls. We can help design a truly connected space.'
        },
        {
            id: 'living-7',
            question: 'What kind of flooring is best for a living and dining room remodel?',
            answer: 'Popular and durable flooring options for living and dining rooms include hardwood, engineered wood, luxury vinyl plank (LVP), and large format tile. The best choice depends on your lifestyle, aesthetic preference, and budget. We\'ll help you select a material that stands the test of time.'
        },
        {
            id: 'living-8',
            question: 'How can I make my living room more energy-efficient?',
            answer: `To make your living room more energy-efficient, consider:
            • Upgrading to energy-efficient windows.
            • Improving insulation in walls and ceilings.
            • Installing smart thermostats.
            • Utilizing LED lighting.
            • Exploring potential for solar-powered solutions for lighting or climate control if feasible for your home's structure.`
        },
        {
            id: 'living-9',
            question: 'What is the typical ROI for a living and dining room remodel in Florida?',
            answer: 'A well-executed living and dining room remodel in Florida can offer a strong return on investment (ROI), often ranging from 50-80%. Enhancements that boost ROI include creating open concepts, improving flow, adding built-in storage, and upgrading lighting.'
        },
        {
            id: 'living-10',
            question: 'How do you ensure minimal disruption during the remodeling process?',
            answer: 'We prioritize minimizing disruption during your living and dining room remodel. This includes careful planning, isolating work areas, protecting your belongings, maintaining a clean site, and adhering to strict timelines. Our goal is a smooth, efficient, and respectful construction process.'
        }
    ],
    'home-additions': [
        {
            id: 'addition-1',
            question: 'How long does a home addition take to build in Florida?',
            answer: 'The timeline for a home addition in Florida varies greatly depending on its size, complexity, and permitting requirements. Generally, a typical room addition can take 3 to 6 months, while larger projects like second stories might take 6 to 12 months or more. We provide a detailed project timeline upfront.'
        },
        {
            id: 'addition-2',
            question: 'What is the average cost of a home addition in Florida?',
            answer: 'The average cost of a home addition in Florida can range widely, typically from $80,000 to $200,000+, depending on the size, materials, and features like new plumbing or HVAC. Factors like custom finishes or smart home technology integration can influence the final budget. We offer transparent, detailed estimates.'
        },
        {
            id: 'addition-3',
            question: 'Do I need a general contractor for a home addition?',
            answer: 'Absolutely. A home addition is a complex project involving structural changes, multiple trades (plumbing, electrical, HVAC), and strict building codes. A licensed general contractor in Florida is essential to manage the entire process, ensure quality, and handle all necessary permits and inspections.'
        },
        {
            id: 'addition-4',
            question: 'What types of home additions do you specialize in?',
            answer: 'We specialize in a wide range of home additions, including new bedrooms, expanded living rooms, master suites, in-law suites, sunrooms, home offices, and second-story additions. Our goal is to seamlessly integrate the new space with your existing home.'
        },
        {
            id: 'addition-5',
            question: 'How can a home addition improve my property value in Florida?',
            answer: 'A well-planned and executed home addition can significantly increase your property value in Florida. Expanding usable living space, especially with highly functional areas like a new master suite or a dedicated home office, typically yields a strong return on investment (ROI) for homeowners.'
        },
        {
            id: 'addition-6',
            question: 'Can you integrate energy-efficient features into my home addition?',
            answer: 'Yes! We are committed to building energy-efficient home additions. We can incorporate features like high-performance insulation, energy-efficient windows, LED lighting, and even solar panel readiness to help reduce your utility bills and environmental footprint in Florida.'
        },
        {
            id: 'addition-7',
            question: 'What is the first step in starting a home addition project?',
            answer: 'The first step is a consultation to discuss your vision, needs, and budget. During this meeting, we assess your property, answer your questions, and provide insights into design possibilities and the overall process. It\'s a no-obligation way to start planning your home expansion.'
        },
        {
            id: 'addition-8',
            question: 'How do you ensure the new addition blends with my existing home?',
            answer: 'Our design and construction teams prioritize seamless integration. We carefully match exterior finishes, roofing, and architectural styles to ensure your home addition looks as though it was always part of your original home. Interior finishes and flow are also meticulously planned for cohesion.'
        },
        {
            id: 'addition-9',
            question: 'What are the benefits of adding a second story versus a ground-level addition?',
            answer: 'Adding a second story is ideal when lot size is limited, preserving yard space. It can also offer better views and a distinct separation of living areas. A ground-level addition might be simpler structurally but consumes more of your lot. We\'ll help you determine the best approach for your specific property.'
        },
        {
            id: 'addition-10',
            question: 'Can I incorporate smart home technology into my new addition?',
            answer: 'Absolutely. We specialize in integrating smart home technology into new constructions and additions. From automated lighting and climate control to advanced security systems and AI-driven home management, we can design a modern, connected living space tailored to your preferences.'
        }
    ],
    mitigation: [
        {
            id: 'mitigation-1',
            question: 'What are mitigation services?',
            answer: 'Mitigation services limit property damage before full restoration begins. This includes water extraction, mold containment, fire board-ups, and storm tarping to prevent further loss.'
        },
        {
            id: 'mitigation-2',
            question: 'What is the difference between mitigation and restoration?',
            answer: 'Mitigation reduces the impact of damage immediately—like drying water or boarding windows—while restoration repairs and rebuilds the property to pre-loss condition.'
        },
        {
            id: 'mitigation-3',
            question: 'Why is mitigation important?',
            answer: 'Acting fast with mitigation saves money, reduces risks, and prevents small problems (like leaks or smoke) from becoming major structural issues.'
        },
        {
            id: 'mitigation-4',
            question: 'Does insurance cover mitigation?',
            answer: 'Most policies cover mitigation services as part of property loss claims, since they are critical to reducing overall damage.'
        }
    ],
    general: [
        {
            id: 'gen-1',
            question: '¿Ofrecen garantía en sus trabajos?',
            answer: 'Sí, todos nuestros trabajos incluyen garantía de 1 año en mano de obra y respetamos las garantías de los fabricantes en materiales.'
        },
        {
            id: 'gen-2',
            question: '¿Trabajan con seguros de hogar?',
            answer: 'Sí, tenemos experiencia trabajando con la mayoría de las compañías de seguros y podemos ayudar con la documentación necesaria.'
        },
        {
            id: 'gen-3',
            question: '¿Ofrecen financiamiento?',
            answer: 'Trabajamos con varias opciones de financiamiento para hacer su proyecto más accesible. Consulte por planes de 6, 12 o 24 meses.'
        }
    ]
};

// Componente de Accordion Item
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="accordionItem">
            <button
                className="accordionButton"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <h3 className="accordionQuestion">{question}</h3>
                <span className={`accordionIcon ${isOpen ? 'iconOpen' : ''}`}>
                    <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
                </span>
            </button>
            <div
                className={`accordionContent ${isOpen ? 'contentOpen' : ''}`}
            >
                <div className="accordionAnswer">
                    {answer}
                </div>
            </div>
        </div>
    );
};

// Componente principal FAQ
const FAQ = ({
    category = 'general',
    title = 'Preguntas Frecuentes',
    categories = [], // Array de categorías si quieres mezclar
    customQuestions = [], // Para preguntas personalizadas
    showTitle = true,
    maxItems = null, // Limitar número de preguntas mostradas
    className = '' // Clase adicional para personalización
}) => {
    const [openItem, setOpenItem] = useState(null);

    // Obtener las preguntas según la configuración
    const getQuestions = () => {
        // Si hay preguntas personalizadas, usarlas
        if (customQuestions.length > 0) {
            return customQuestions;
        }

        // Si hay múltiples categorías, combinarlas
        if (categories.length > 0) {
            return categories.flatMap(cat => faqData[cat] || []);
        }

        // Si no, usar la categoría única
        return faqData[category] || faqData.general;
    };

    const questions = getQuestions();
    const displayQuestions = maxItems ? questions.slice(0, maxItems) : questions;

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <div className={`faqContainer ${className}`}>
            {showTitle && (
                <h2 className="faqTitle">
                    {title}
                </h2>
            )}
            <div className="accordionWrapper">
                {displayQuestions.map((item) => (
                    <AccordionItem
                        key={item.id}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openItem === item.id}
                        onClick={() => toggleItem(item.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQ;
export { faqData };
