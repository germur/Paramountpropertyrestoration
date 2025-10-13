import { useState } from 'react';
import '../styles/components/AcordeonServices.css';

// Banco de preguntas categorizadas EXPANDIDO - RECUPERADO
const faqData = {
    storm: [
        {
            id: 'storm-1',
            question: 'What should I do right after storm damage?',
            answer: 'Ensure safety first - stay away from downed power lines and unstable structures. Shut off utilities if needed, document damage with photos for insurance, and call us immediately at (786) 602-2217 for emergency tarping and board-up services.'
        },
        {
            id: 'storm-2',
            question: 'Do you provide emergency roof tarping and board-up?',
            answer: 'Yes, we provide 24/7 emergency services. We secure damaged roofs with heavy-duty tarps and board up broken windows/openings immediately to prevent additional water intrusion, theft, and further structural damage.'
        },
        {
            id: 'storm-3',
            question: 'Can you remove fallen trees and debris?',
            answer: 'Absolutely. Our crews safely remove fallen branches, trees, and exterior debris to clear access points and reduce safety hazards. We handle both residential and commercial properties throughout Florida.'
        },
        {
            id: 'storm-4',
            question: 'What if water entered the house during the storm?',
            answer: 'We perform immediate water extraction using industrial pumps and vacuums, followed by structural drying with dehumidifiers and air movers. We also apply antimicrobial treatment to prevent mold growth - critical in Florida\'s humid climate.'
        },
        {
            id: 'storm-5',
            question: 'How long does storm restoration take?',
            answer: 'Timeline varies by damage scope. Minor repairs (tarping, board-up, water extraction) happen within 24-48 hours. Major exterior and interior rebuilds may take 4-12 weeks depending on materials availability and permit requirements.'
        },
        {
            id: 'storm-6',
            question: 'Do you work with insurance claims?',
            answer: 'Yes, we\'re experienced with all major insurance providers. We document damages with detailed photos and reports, provide accurate estimates, and coordinate directly with your insurer to streamline the claims process.'
        },
        {
            id: 'storm-7',
            question: 'Is it safe to stay in the property after storm damage?',
            answer: 'Safety depends on structural stability, electrical integrity, and contamination levels. Our certified inspectors assess habitability during our initial inspection and provide clear recommendations for temporary relocation if needed.'
        },
        {
            id: 'storm-8',
            question: 'What areas do you serve for storm response?',
            answer: 'We serve all of Central and South Florida including Orlando, Miami, Tampa, Fort Lauderdale, and surrounding communities. Our emergency response teams are strategically located for rapid deployment during storm events.'
        },
        {
            id: 'storm-9',
            question: 'Do you handle wind damage to siding and windows?',
            answer: 'Yes, we repair and replace damaged siding, windows, doors, and exterior fixtures. We work with high-quality, hurricane-rated materials that meet Florida building codes for enhanced storm resistance.'
        },
        {
            id: 'storm-10',
            question: 'Can you help with FEMA claims and documentation?',
            answer: 'Absolutely. We assist with FEMA paperwork, provide required documentation and estimates, and help navigate both insurance and federal disaster relief programs to maximize your recovery assistance.'
        }
    ],
    mold: [
        {
            id: 'mold-1',
            question: 'How do I know if I have mold in my Florida home?',
            answer: 'Common signs include musty odors, visible black/green spots on walls or ceilings, increased humidity, and allergy-like symptoms (sneezing, headaches). Professional inspection with moisture mapping and lab testing confirms presence, type, and concentration levels.'
        },
        {
            id: 'mold-2',
            question: 'Is black mold dangerous to my family?',
            answer: 'Certain mold species (like Stachybotrys) can trigger respiratory issues, allergies, and other health problems, especially in children and sensitive individuals. We use strict PPE protocols, containment barriers, and HEPA filtration to remove it safely.'
        },
        {
            id: 'mold-3',
            question: 'What does professional mold remediation include?',
            answer: 'Our comprehensive process includes: (1) Thorough inspection, moisture mapping & lab testing, (2) Containment barriers & negative air pressure with HEPA filtration, (3) Safe removal of contaminated materials & deep cleaning, (4) Antimicrobial treatment & moisture source correction, (5) Final clearance testing.'
        },
        {
            id: 'mold-4',
            question: 'Do you test for mold before and after remediation?',
            answer: 'Yes, absolutely. Pre-remediation testing identifies mold types and concentrations to determine scope of work. Post-remediation clearance testing by an independent lab verifies successful removal and confirms safe indoor air quality levels.'
        },
        {
            id: 'mold-5',
            question: 'How long does mold remediation take in Florida?',
            answer: 'Most residential projects take 2-5 days depending on affected area size, materials involved, and humidity levels. Large commercial projects or extensive contamination may take 1-2 weeks. Florida\'s climate requires extra drying time.'
        },
        {
            id: 'mold-6',
            question: 'Will mold come back after remediation?',
            answer: 'Not if the underlying moisture source is properly fixed. We address root causes like leaks, poor ventilation, or humidity issues. We also recommend maintaining indoor humidity below 60% and provide ongoing prevention strategies specific to Florida homes.'
        },
        {
            id: 'mold-7',
            question: 'Is mold removal covered by homeowners insurance?',
            answer: 'Coverage varies by policy and cause. Sudden water events (burst pipes, storm damage) are often covered; ongoing leaks or maintenance issues typically aren\'t. We help document everything for your insurance claim and work with adjusters.'
        },
        {
            id: 'mold-8',
            question: 'Is it safe to stay in my home during mold remediation?',
            answer: 'We isolate work areas with plastic sheeting and use negative air pressure with HEPA filtration to prevent cross-contamination. For large projects, extensive contamination, or sensitive family members, temporary relocation may be recommended for safety.'
        },
        {
            id: 'mold-9',
            question: 'Can you prevent mold in Florida\'s humid climate?',
            answer: 'Yes, through proper moisture control: fixing leaks promptly, improving ventilation, using dehumidifiers, regular HVAC maintenance, and sealing air leaks. We provide customized prevention plans for Florida\'s unique climate challenges.'
        },
        {
            id: 'mold-10',
            question: 'Do you handle mold in HVAC systems?',
            answer: 'Yes, we clean and remediate mold in air ducts, coils, and HVAC components using specialized equipment. We also recommend duct sealing and UV light installation to prevent future mold growth in your air system.'
        }
    ],
    water: [
        {
            id: 'water-1',
            question: 'How fast should water damage restoration start?',
            answer: 'Water extraction should begin within 24 hours, ideally within 1-4 hours. In Florida\'s humid climate, mold can start growing within 24-48 hours. Early response significantly reduces structural damage, content loss, and remediation costs.'
        },
        {
            id: 'water-2',
            question: 'What does your water damage restoration process include?',
            answer: 'Our comprehensive process includes: Emergency inspection & moisture mapping, water extraction using industrial pumps, content cleaning & pack-out services, structural drying with dehumidifiers & air movers, antimicrobial treatment, odor control, and complete reconstruction if needed.'
        },
        {
            id: 'water-3',
            question: 'Do you handle all types of water damage?',
            answer: 'Yes, we handle Category 1 (clean water from pipes), Category 2 (gray water from appliances), and Category 3 (black water from sewage/flooding). We respond to burst pipes, appliance failures, roof leaks, slab leaks, and storm flooding throughout Florida.'
        },
        {
            id: 'water-4',
            question: 'How do you prevent mold after water damage?',
            answer: 'We control humidity levels below 60%, remove wet porous materials when necessary, apply EPA-approved antimicrobial treatments, and monitor moisture levels daily. Our industrial dehumidifiers and air movers create optimal drying conditions even in Florida\'s humidity.'
        },
        {
            id: 'water-5',
            question: 'How long does structural drying take?',
            answer: 'Typically 3-5 days for most residential properties, but can extend to 7-10 days depending on materials affected, saturation levels, outside humidity, and ventilation. We monitor progress with moisture meters and thermal imaging cameras daily.'
        },
        {
            id: 'water-6',
            question: 'Will my homeowners insurance cover water damage?',
            answer: 'Most policies cover sudden or accidental water damage (burst pipes, appliance failures). Gradual leaks and flooding from storms may require separate coverage. We document everything thoroughly and work directly with insurance adjusters to streamline your claim.'
        },
        {
            id: 'water-7',
            question: 'What belongings can be saved after water damage?',
            answer: 'Non-porous items (glass, metal, plastic) usually clean well. Porous materials depend on water category and exposure time. We provide content cleaning, pack-out services, and document restoration. Severely contaminated items may need replacement.'
        },
        {
            id: 'water-8',
            question: 'Is my property safe during water damage restoration?',
            answer: 'Absolutely. We isolate affected areas, use professional-grade equipment, follow IICRC standards, and maintain clear safety protocols. We protect unaffected areas and ensure safe conditions for occupants and workers throughout the process.'
        },
        {
            id: 'water-9',
            question: 'What should I do immediately after discovering water damage?',
            answer: 'Stay safe - shut off electricity to affected areas, stop the water source if possible, remove valuable items from wet areas, document damage with photos, and call us immediately at (786) 602-2217 for emergency response.'
        },
        {
            id: 'water-10',
            question: 'What happens if flood water isn\'t removed quickly?',
            answer: 'In Florida\'s climate, delays lead to rapid mold growth, structural deterioration, electrical hazards, and contamination issues. What starts as a simple extraction can escalate into major reconstruction costing 3-5 times more within just days.'
        }
    ],
    fire: [
        {
            id: 'fire-1',
            question: 'How quickly should fire damage restoration begin?',
            answer: 'Fire damage restoration should start within 24-48 hours to prevent further structural damage, limit smoke and soot penetration into porous materials, and reduce the risk of mold growth from firefighting water - especially critical in Florida\'s humid environment.'
        },
        {
            id: 'fire-2',
            question: 'What does fire damage restoration include?',
            answer: 'Our comprehensive service includes: Emergency board-up and property securing, water extraction and drying from firefighting efforts, smoke and soot cleanup from all surfaces and air systems, odor removal using advanced techniques, structural repairs, and complete rebuilding as needed.'
        },
        {
            id: 'fire-3',
            question: 'Can smoke odor be completely eliminated?',
            answer: 'Yes, we use advanced deodorization techniques including thermal fogging, ozone treatment, hydroxyl generators, and HEPA air filtration to completely eliminate smoke odors from structures, HVAC systems, and contents. The process may take several days for complete removal.'
        },
        {
            id: 'fire-4',
            question: 'Can my belongings be restored after fire damage?',
            answer: 'Many items can be restored using specialized cleaning techniques, ultrasonic cleaning, and ozone treatment. We evaluate each item individually and provide content cleaning, pack-out services, and storage. Severely damaged items are documented for insurance replacement.'
        },
        {
            id: 'fire-5',
            question: 'Do you work with fire insurance claims?',
            answer: 'Yes, we work directly with all major insurance providers. We document damages thoroughly, provide detailed estimates, handle required paperwork, and coordinate with adjusters to ensure your restoration aligns with policy coverage and expedites the claims process.'
        },
        {
            id: 'fire-6',
            question: 'Is fire damage covered by homeowners insurance?',
            answer: 'Most standard homeowner\'s insurance policies cover fire damage, including smoke damage and water damage caused by firefighting efforts. Coverage details vary by policy, so we recommend reviewing your specific coverage with your insurance agent.'
        },
        {
            id: 'fire-7',
            question: 'How long does fire damage restoration take?',
            answer: 'Timeline depends on damage extent. Minor smoke cleaning may take 1-2 weeks. Major structural fires requiring reconstruction can take 3-6 months. We provide detailed timelines after thorough inspection and work efficiently to minimize displacement time.'
        },
        {
            id: 'fire-8',
            question: 'Is my property safe to enter after a fire?',
            answer: 'Never enter without clearance from fire officials and our safety assessment. Structural instability, lingering smoke toxins, compromised electrical systems, and hazardous debris pose serious risks. We conduct thorough safety evaluations before beginning any work.'
        },
        {
            id: 'fire-9',
            question: 'Do you handle smoke damage without visible fire damage?',
            answer: 'Absolutely. Smoke can travel throughout a property causing damage far from the fire source. We clean smoke residue from walls, ceilings, HVAC systems, and contents, and eliminate odors even in areas with no visible fire damage.'
        },
        {
            id: 'fire-10',
            question: 'Can you restore electronics damaged by smoke?',
            answer: 'We partner with specialized electronics restoration companies to clean and restore computers, TVs, appliances, and other electronic devices affected by smoke and soot. Many items can be successfully restored if addressed quickly.'
        }
    ],
    kitchen: [
        {
            id: 'kitchen-1',
            question: 'How long does a complete kitchen remodel take in Florida?',
            answer: 'A comprehensive kitchen remodel typically takes 8-12 weeks in Florida. This includes design finalization, permits, material sourcing, demolition, installation phases, and final inspections. Custom cabinets, granite countertops, or HOA approvals may extend timelines.'
        },
        {
            id: 'kitchen-2',
            question: 'What\'s the average cost of a kitchen remodel in Florida?',
            answer: 'Kitchen remodels in Florida range from $25,000 (basic updates) to $80,000+ (luxury renovations). Costs depend on size, materials, appliances, and labor. We provide detailed estimates breaking down all costs for transparency and budget planning.'
        },
        {
            id: 'kitchen-3',
            question: 'What\'s the optimal order for kitchen remodeling?',
            answer: 'The correct sequence is: (1) Planning & permits, (2) Demolition, (3) Rough plumbing/electrical, (4) Drywall & insulation, (5) Flooring, (6) Cabinets, (7) Countertops, (8) Backsplash, (9) Appliances, (10) Painting & finishing touches. This prevents damage and rework.'
        },
        {
            id: 'kitchen-4',
            question: 'How much is too much to spend on a kitchen remodel?',
            answer: 'Generally, don\'t exceed 10-15% of your home\'s value on a kitchen remodel. In Florida, quality remodels typically return 60-75% ROI. We help you maximize value by focusing on features that appeal to your local market and lifestyle needs.'
        },
        {
            id: 'kitchen-5',
            question: 'Should I remodel my kitchen myself or hire professionals?',
            answer: 'While some tasks like painting are DIY-friendly, Florida building codes require licensed professionals for plumbing, electrical, and structural work. We handle permits, inspections, and coordinate all trades to ensure code compliance and warranty coverage.'
        },
        {
            id: 'kitchen-6',
            question: 'Do cabinets go in before or after flooring?',
            answer: 'For most flooring types (tile, hardwood, LVP), we install flooring first, then cabinets. This creates a seamless look, protects cabinets during installation, and simplifies future flooring replacement. However, we adapt to specific project requirements.'
        },
        {
            id: 'kitchen-7',
            question: 'What kitchen features add the most value in Florida?',
            answer: 'High-value features include: granite or quartz countertops, stainless steel appliances, soft-close cabinet hardware, under-cabinet lighting, tile backsplashes, and energy-efficient appliances. We focus on timeless designs that appeal to Florida buyers.'
        },
        {
            id: 'kitchen-8',
            question: 'Can you work around my schedule to minimize disruption?',
            answer: 'Yes, we understand kitchen disruption affects daily life. We can schedule work in phases, set up temporary cooking areas, work evenings/weekends when needed, and coordinate deliveries to minimize impact on your routine.'
        },
        {
            id: 'kitchen-9',
            question: 'Do you handle kitchen design and material selection?',
            answer: 'Absolutely. Our design team helps with layout optimization, material selection, color coordination, and 3D renderings. We guide you through cabinet styles, countertop options, backsplash designs, and lighting to achieve your vision within budget.'
        },
        {
            id: 'kitchen-10',
            question: 'What permits do I need for kitchen remodeling in Florida?',
            answer: 'Most kitchen remodels require building permits for electrical, plumbing, or structural changes. We handle all permit applications, inspections, and ensure code compliance. Simple cosmetic updates typically don\'t require permits.'
        },
        {
            id: 'kitchen-11',
            question: 'Can you accommodate special dietary needs or accessibility?',
            answer: 'Yes, we design kitchens for various needs including wheelchair accessibility (ADA compliance), aging in place features, kosher kitchens, and specialized storage for dietary restrictions. We customize every aspect to your lifestyle requirements.'
        },
        {
            id: 'kitchen-12',
            question: 'How do you handle unexpected issues during renovation?',
            answer: 'We conduct thorough pre-construction inspections to minimize surprises. When unexpected issues arise (plumbing, electrical, structural), we immediately notify you, provide options with costs, and adjust timelines transparently. Our experience prevents most issues.'
        }
    ],
    bathroom: [
        {
            id: 'bath-1',
            question: 'What\'s a realistic budget for bathroom remodeling in Florida?',
            answer: 'Florida bathroom remodels range from $8,000 (cosmetic updates) to $35,000+ (luxury renovations). Costs include materials (tile, fixtures, vanities), labor (plumbing, electrical), and permits. We provide detailed breakdowns to help you prioritize features within your budget.'
        },
        {
            id: 'bath-2',
            question: 'How long does a bathroom remodel take to complete?',
            answer: 'Most bathroom remodels take 2-4 weeks. Simple updates (fixtures, vanity, paint) take 1-2 weeks. Full remodels with tile work, plumbing changes, or custom features take 3-5 weeks. Permit approval and material delivery can affect timelines.'
        },
        {
            id: 'bath-3',
            question: 'Do I need permits for bathroom remodeling in Florida?',
            answer: 'Yes, most bathroom remodels require permits for plumbing, electrical, or structural changes. We handle all permit applications, inspections, and code compliance. This protects your investment and ensures proper resale documentation.'
        },
        {
            id: 'bath-4',
            question: 'Can you remodel a small bathroom to feel larger?',
            answer: 'Absolutely. We use space-maximizing strategies: floating vanities, large mirrors, light colors, recessed lighting, corner showers, pocket doors, and strategic tile patterns. These techniques can make small bathrooms feel 30-50% larger.'
        },
        {
            id: 'bath-5',
            question: 'What\'s the most expensive part of bathroom remodeling?',
            answer: 'Labor typically represents 40-50% of costs, especially plumbing and electrical work. Moving plumbing locations significantly increases costs. Custom tile work, high-end fixtures, and structural changes also drive up expenses.'
        },
        {
            id: 'bath-6',
            question: 'Is bathroom remodeling a good investment in Florida?',
            answer: 'Yes, bathroom remodels typically return 60-75% ROI in Florida. Master bathroom upgrades, walk-in showers, double vanities, and modern fixtures add significant value and appeal to buyers in the Florida market.'
        },
        {
            id: 'bath-7',
            question: 'Can you replace a tub with a walk-in shower?',
            answer: 'Yes, tub-to-shower conversions are very popular in Florida. We handle plumbing modifications, waterproofing, tile work, and glass installation. This typically takes 3-5 days and increases accessibility while modernizing the space.'
        },
        {
            id: 'bath-8',
            question: 'What flooring works best in Florida bathrooms?',
            answer: 'Porcelain tile, luxury vinyl plank (LVP), and natural stone perform best in Florida\'s humidity. These materials resist moisture, are easy to clean, and maintain their appearance. We avoid hardwood and recommend proper ventilation for any flooring.'
        },
        {
            id: 'bath-9',
            question: 'Do you handle bathroom ventilation and humidity control?',
            answer: 'Yes, proper ventilation is critical in Florida. We install appropriately-sized exhaust fans, ensure proper ductwork, and may recommend additional humidity control measures. This prevents mold, protects finishes, and maintains air quality.'
        },
        {
            id: 'bath-10',
            question: 'Can you work around my schedule to minimize disruption?',
            answer: 'We understand bathroom access is essential. We can work in phases, coordinate with your schedule, provide temporary solutions, and prioritize getting at least one bathroom functional quickly in multi-bathroom homes.'
        },
        {
            id: 'bath-11',
            question: 'What bathroom features are trending in Florida?',
            answer: 'Popular features include: walk-in showers with rain heads, floating vanities, quartz countertops, LED mirrors, smart toilets, heated floors, and coastal/spa-inspired designs. We help you choose timeless features that add value.'
        },
        {
            id: 'bath-12',
            question: 'Do you provide design services and 3D renderings?',
            answer: 'Yes, our design team creates detailed plans, material selections, and 3D renderings so you can visualize your new bathroom before construction begins. This ensures you love the final result and minimizes changes during construction.'
        }
    ],
    bedroom: [
        {
            id: 'bed-1',
            question: 'How long does a bedroom remodel take in Florida?',
            answer: 'Bedroom remodels typically take 2-6 weeks depending on scope. Cosmetic updates (paint, flooring, lighting) take 1-2 weeks. Adding closets, en-suite bathrooms, or structural changes can take 4-8 weeks including permits and inspections.'
        },
        {
            id: 'bed-2',
            question: 'What\'s the average cost of bedroom remodeling in Florida?',
            answer: 'Bedroom remodels range from $5,000 (basic updates) to $40,000+ (master suite transformations). Costs depend on size, materials, built-ins, and whether you\'re adding bathrooms or closets. We provide detailed estimates for budget planning.'
        },
        {
            id: 'bed-3',
            question: 'Can you add a master bathroom to an existing bedroom?',
            answer: 'Yes, we frequently add en-suite bathrooms to create master suites. This involves plumbing installation, electrical work, ventilation, waterproofing, and permits. The investment significantly increases home value and functionality.'
        },
        {
            id: 'bed-4',
            question: 'What flooring works best for Florida bedrooms?',
            answer: 'Popular options include hardwood, luxury vinyl plank (LVP), engineered wood, and carpet. LVP performs well in Florida\'s humidity, hardwood adds value, and carpet provides comfort. We help you choose based on lifestyle and preferences.'
        },
        {
            id: 'bed-5',
            question: 'Can you design custom closets and storage solutions?',
            answer: 'Absolutely. We design and build custom walk-in closets, reach-in closet systems, built-in wardrobes, and creative storage solutions. Custom storage maximizes space efficiency and adds significant value to bedrooms.'
        },
        {
            id: 'bed-6',
            question: 'Do bedroom remodels require permits in Florida?',
            answer: 'Permits are required for electrical work, adding bathrooms, structural changes, or room additions. Cosmetic updates typically don\'t require permits. We handle all permit applications and ensure code compliance for your protection.'
        },
        {
            id: 'bed-7',
            question: 'Can you integrate smart home technology in bedrooms?',
            answer: 'Yes, we install smart lighting controls, automated window treatments, climate control systems, built-in charging stations, and integrated sound systems. Smart features enhance comfort and add modern appeal to your bedroom.'
        },
        {
            id: 'bed-8',
            question: 'What\'s the ROI for bedroom remodeling in Florida?',
            answer: 'Master bedroom remodels typically return 50-70% ROI in Florida. Adding bathrooms, improving closet space, and modernizing finishes significantly increase home value and marketability to Florida buyers.'
        },
        {
            id: 'bed-9',
            question: 'Can you soundproof bedrooms for better sleep?',
            answer: 'Yes, we use soundproofing techniques including insulation upgrades, acoustic panels, solid doors, weatherstripping, and window treatments. These improvements create peaceful sleeping environments and add privacy.'
        },
        {
            id: 'bed-10',
            question: 'Do you handle bedroom additions and expansions?',
            answer: 'Yes, we design and build bedroom additions, expand existing bedrooms, and convert other spaces into bedrooms. This involves structural work, permits, and ensuring the addition blends seamlessly with your existing home.'
        },
        {
            id: 'bed-11',
            question: 'Can you create teen or children\'s bedroom designs?',
            answer: 'Absolutely. We design age-appropriate bedrooms with durable materials, creative storage, study areas, and flexible designs that grow with children. We focus on safety, functionality, and fun while maintaining resale value.'
        },
        {
            id: 'bed-12',
            question: 'What bedroom trends are popular in Florida homes?',
            answer: 'Popular trends include coastal and tropical themes, large windows for natural light, ceiling fans, built-in seating, accent walls, and spa-like master suites. We help you choose timeless designs that reflect Florida living.'
        }
    ],
    'living-dining': [
        {
            id: 'living-1',
            question: 'How long does a living and dining room remodel take?',
            answer: 'Living and dining room remodels typically take 4-8 weeks depending on scope. Open concept conversions, flooring, and cosmetic updates take 3-5 weeks. Major structural changes, built-ins, or additions can take 6-12 weeks including permits.'
        },
        {
            id: 'living-2',
            question: 'What does an open concept remodel cost in Florida?',
            answer: 'Open concept remodels range from $15,000-$50,000+ depending on structural requirements. Costs include wall removal, beam installation, flooring, electrical work, and permits. We provide structural engineering when needed for safety and code compliance.'
        },
        {
            id: 'living-3',
            question: 'Can you remove walls to create open concept spaces?',
            answer: 'Yes, but we first determine if walls are load-bearing through structural analysis. Load-bearing walls require engineered beams for safe removal. We handle permits, structural engineering, and ensure all work meets Florida building codes.'
        },
        {
            id: 'living-4',
            question: 'What flooring works best for living and dining areas?',
            answer: 'Popular options include hardwood, luxury vinyl plank (LVP), porcelain tile, and engineered wood. These materials handle Florida\'s humidity, provide durability for high-traffic areas, and offer design flexibility for seamless flow between spaces.'
        },
        {
            id: 'living-5',
            question: 'Do you provide interior design services?',
            answer: 'Yes, our design team helps with space planning, material selection, color coordination, lighting design, and furniture placement. We create cohesive designs that maximize functionality while reflecting your personal style preferences.'
        },
        {
            id: 'living-6',
            question: 'Can you add built-in entertainment centers?',
            answer: 'Absolutely. We design and build custom entertainment centers, built-in bookcases, window seats, and storage solutions. Built-ins maximize space efficiency, add character, and increase home value significantly.'
        },
        {
            id: 'living-7',
            question: 'What\'s the ROI for living room remodeling in Florida?',
            answer: 'Living and dining room remodels typically return 60-80% ROI in Florida. Open concept layouts, modern finishes, and improved flow are highly valued by Florida buyers and significantly enhance marketability.'
        },
        {
            id: 'living-8',
            question: 'Can you improve natural lighting in living spaces?',
            answer: 'Yes, we can add windows, skylights, sliding glass doors, or expand existing openings. We also use design techniques like light colors, mirrors, and strategic lighting to maximize natural light and create brighter, more inviting spaces.'
        },
        {
            id: 'living-9',
            question: 'Do living room remodels require permits in Florida?',
            answer: 'Permits are required for electrical work, structural changes, wall removal, or window additions. Cosmetic updates typically don\'t require permits. We handle all permitting and ensure compliance with local building codes.'
        },
        {
            id: 'living-10',
            question: 'Can you integrate smart home technology?',
            answer: 'Yes, we install smart lighting systems, automated window treatments, climate control, built-in sound systems, and charging stations. Smart home integration enhances convenience and adds modern appeal to your living spaces.'
        },
        {
            id: 'living-11',
            question: 'How do you minimize disruption during remodeling?',
            answer: 'We work in phases to maintain livable spaces, protect furniture and belongings, use dust barriers, maintain clear pathways, and coordinate schedules to minimize impact on your daily routine and family life.'
        },
        {
            id: 'living-12',
            question: 'What living room trends are popular in Florida?',
            answer: 'Popular trends include coastal and tropical themes, large sliding glass doors, vaulted ceilings, neutral color palettes, natural materials, and indoor-outdoor living integration that takes advantage of Florida\'s climate.'
        }
    ],
    'home-additions': [
        {
            id: 'addition-1',
            question: 'How long does a home addition take in Florida?',
            answer: 'Home additions typically take 4-8 months depending on size and complexity. Room additions take 3-5 months, while second stories or major expansions can take 6-12 months. Timeline includes permits, construction, and final inspections.'
        },
        {
            id: 'addition-2',
            question: 'What\'s the average cost of home additions in Florida?',
            answer: 'Home additions range from $100-$300 per square foot in Florida. A 400 sq ft room addition costs $40,000-$120,000 depending on features, materials, and complexity. We provide detailed estimates based on your specific project requirements.'
        },
        {
            id: 'addition-3',
            question: 'Do I need an architect for my home addition?',
            answer: 'For major additions, structural changes, or complex projects, yes. We work with licensed architects and engineers to ensure proper design, structural integrity, and code compliance. Simple additions may only require construction drawings.'
        },
        {
            id: 'addition-4',
            question: 'What types of home additions do you build?',
            answer: 'We build room additions, master suites, in-law suites, home offices, sunrooms, family rooms, second stories, garage conversions, and enclosed patios. Each addition is designed to blend seamlessly with your existing home architecture.'
        },
        {
            id: 'addition-5',
            question: 'Will a home addition increase my property value?',
            answer: 'Quality additions typically return 50-80% ROI in Florida. Bedrooms, bathrooms, and living spaces add the most value. We focus on additions that enhance functionality while appealing to Florida buyers and maintaining architectural harmony.'
        },
        {
            id: 'addition-6',
            question: 'What permits do I need for home additions in Florida?',
            answer: 'Most additions require building permits, and possibly electrical, plumbing, and mechanical permits. We handle all permit applications, structural engineering, inspections, and ensure compliance with local building codes and HOA requirements.'
        },
        {
            id: 'addition-7',
            question: 'Can you match my existing home\'s architecture?',
            answer: 'Absolutely. We carefully analyze your home\'s style, materials, rooflines, and details to ensure seamless integration. Our goal is making additions look like original construction, maintaining your home\'s character and value.'
        },
        {
            id: 'addition-8',
            question: 'Do you handle foundation work for additions?',
            answer: 'Yes, we handle all foundation requirements including concrete slabs, stem walls, and pile foundations where needed. Florida\'s soil conditions and building codes require specific foundation approaches that we\'re experienced with.'
        },
        {
            id: 'addition-9',
            question: 'Can you add a second story to my home?',
            answer: 'Yes, if your existing foundation and structure can support the additional load. We conduct structural analysis, provide engineering when needed, and ensure the second story integrates properly with your existing home design.'
        },
        {
            id: 'addition-10',
            question: 'How do you handle utilities for home additions?',
            answer: 'We extend electrical, plumbing, HVAC, and other utilities from your existing systems or upgrade them as needed. This includes proper sizing calculations to ensure your systems can handle the additional load efficiently.'
        },
        {
            id: 'addition-11',
            question: 'Can I live in my home during the addition construction?',
            answer: 'Yes, in most cases. We plan construction to minimize disruption, maintain access to essential areas, use dust barriers, and coordinate schedules around your family\'s needs. Some phases may require temporary relocation of specific rooms.'
        },
        {
            id: 'addition-12',
            question: 'What should I consider before adding to my home?',
            answer: 'Consider lot size, setback requirements, HOA restrictions, utility capacity, architectural compatibility, budget, timeline, and your long-term plans. We help evaluate all factors to ensure your addition meets your needs and adds value.'
        }
    ],
    mitigation: [
        {
            id: 'mitigation-1',
            question: 'What exactly are emergency mitigation services?',
            answer: 'Mitigation services are immediate actions taken to limit and prevent further property damage after disasters. This includes water extraction, structural drying, emergency board-up, roof tarping, mold containment, and debris removal. Call us 24/7 at (786) 602-2217 for emergency response.'
        },
        {
            id: 'mitigation-2',
            question: 'What\'s the difference between mitigation and restoration?',
            answer: 'Mitigation is the immediate emergency response to prevent further damage - like extracting water or boarding up windows. Restoration is the complete repair and rebuilding process that follows, returning your property to pre-loss condition.'
        },
        {
            id: 'mitigation-3',
            question: 'How quickly do you respond to emergency calls in Florida?',
            answer: 'We provide 24/7 emergency response throughout Central and South Florida. Our teams typically arrive within 1-2 hours for water emergencies and 2-4 hours for other disasters, depending on location and conditions.'
        },
        {
            id: 'mitigation-4',
            question: 'Why is immediate mitigation so important?',
            answer: 'In Florida\'s humid climate, immediate action prevents exponential damage. Water damage can lead to mold growth within 24-48 hours. Fire damage continues spreading through smoke and soot. Storm damage allows more water intrusion. Fast mitigation saves thousands in repair costs.'
        },
        {
            id: 'mitigation-5',
            question: 'Does insurance cover emergency mitigation services?',
            answer: 'Yes, most homeowner\'s insurance policies cover mitigation services as they\'re essential to minimizing overall claim costs. We work directly with insurance companies and provide detailed documentation to support your claim.'
        },
        {
            id: 'mitigation-6',
            question: 'What equipment do you use for water mitigation?',
            answer: 'We use industrial-grade water extraction pumps, high-velocity air movers, commercial dehumidifiers, moisture meters, thermal imaging cameras, and antimicrobial treatments. Our equipment is specifically designed for Florida\'s challenging humidity conditions.'
        },
        {
            id: 'mitigation-7',
            question: 'Can you prevent mold growth during water mitigation?',
            answer: 'Yes, our rapid water extraction and drying process, combined with antimicrobial treatments and humidity control, prevents mold growth. We monitor moisture levels continuously and maintain indoor humidity below 60% to inhibit mold development.'
        },
        {
            id: 'mitigation-8',
            question: 'Do you provide emergency board-up services?',
            answer: 'Yes, we provide 24/7 emergency board-up for broken windows, damaged doors, and roof openings. We use quality materials and secure fastening to prevent weather intrusion, theft, and additional damage while permanent repairs are planned.'
        },
        {
            id: 'mitigation-9',
            question: 'What areas of Florida do you serve for emergency mitigation?',
            answer: 'We provide emergency mitigation services throughout Central and South Florida including Orlando, Miami, Tampa, Fort Lauderdale, West Palm Beach, and surrounding communities. Our strategic locations enable rapid response statewide.'
        },
        {
            id: 'mitigation-10',
            question: 'How do you document mitigation work for insurance?',
            answer: 'We provide comprehensive documentation including photos, moisture readings, equipment logs, daily progress reports, and detailed invoices. This thorough documentation supports your insurance claim and demonstrates the necessity of our emergency services.'
        }
    ],
    general: [
        {
            id: 'gen-1',
            question: '¿Ofrecen garantía en sus trabajos de restauración y remodelación?',
            answer: 'Sí, todos nuestros trabajos incluyen garantía de 1 año en mano de obra y respetamos las garantías de los fabricantes en materiales. Para servicios de emergencia, garantizamos la efectividad de nuestras técnicas de mitigación.'
        },
        {
            id: 'gen-2',
            question: '¿Trabajan con todas las compañías de seguros?',
            answer: 'Sí, tenemos experiencia trabajando con todas las principales compañías de seguros en Florida. Manejamos la documentación necesaria, coordinamos con ajustadores y agilizamos el proceso de reclamos para nuestros clientes.'
        },
        {
            id: 'gen-3',
            question: '¿Ofrecen opciones de financiamiento para proyectos grandes?',
            answer: 'Trabajamos con varias opciones de financiamiento para hacer su proyecto más accesible. Ofrecemos planes flexibles de 6, 12, 18 y 24 meses con tasas competitivas para proyectos de remodelación y restauración.'
        },
        {
            id: 'gen-4',
            question: '¿Están licenciados y asegurados en Florida?',
            answer: 'Sí, estamos completamente licenciados, asegurados y vinculados en Florida. Mantenemos todas las certificaciones requeridas incluyendo licencias de contratista general, restauración de daños y certificaciones IICRC.'
        },
        {
            id: 'gen-5',
            question: '¿Proporcionan estimados gratuitos?',
            answer: 'Sí, ofrecemos estimados gratuitos para todos nuestros servicios de restauración y remodelación. Para emergencias, respondemos inmediatamente y proporcionamos evaluaciones in situ sin costo inicial.'
        },
        {
            id: 'gen-6',
            question: '¿Cuáles son sus horarios de servicio?',
            answer: 'Nuestros servicios de emergencia están disponibles 24/7/365. Para proyectos de remodelación, trabajamos de lunes a viernes de 7:00 AM a 6:00 PM, con horarios extendidos disponibles según las necesidades del proyecto.'
        }
    ]
};

// Componente de Accordion Item con UI mejorada
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`accordionItem ${isOpen ? 'accordionItem--open' : ''}`}>
            <button
                className="accordionButton"
                onClick={onClick}
                aria-expanded={isOpen}
                type="button"
            >
                <h3 className="accordionQuestion">{question}</h3>
                <span className={`accordionIcon ${isOpen ? 'iconOpen' : ''}`}>
                    <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
                </span>
            </button>
            <div className={`accordionContent ${isOpen ? 'contentOpen' : ''}`}>
                <div className="accordionAnswer">
                    {/* Render multiline answers properly */}
                    {answer.split('\n').map((line, index) => (
                        <p key={index} className="answerParagraph">
                            {line}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Componente principal FAQ optimizado
const FAQ = ({
    category = 'general',
    title = 'Frequently Asked Questions',
    categories = [], // Array de categorías para mezclar
    customQuestions = [], // Para preguntas personalizadas
    showTitle = true,
    maxItems = null, // Limitar número de preguntas
    className = '', // Clase adicional
    searchable = false, // Funcionalidad de búsqueda
    defaultOpen = null // ID de pregunta abierta por defecto
}) => {
    const [openItem, setOpenItem] = useState(defaultOpen);
    const [searchTerm, setSearchTerm] = useState('');

    // Obtener las preguntas según la configuración
    const getQuestions = () => {
        if (customQuestions.length > 0) {
            return customQuestions;
        }

        if (categories.length > 0) {
            return categories.flatMap(cat => faqData[cat] || []);
        }

        return faqData[category] || faqData.general;
    };

    const allQuestions = getQuestions();

    // Filtrar preguntas por término de búsqueda
    const filteredQuestions = searchable && searchTerm
        ? allQuestions.filter(item =>
            item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : allQuestions;

    const displayQuestions = maxItems 
        ? filteredQuestions.slice(0, maxItems) 
        : filteredQuestions;

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        // Close any open item when searching
        if (e.target.value) {
            setOpenItem(null);
        }
    };

    return (
        <div className={`faqContainer ${className}`}>
            {showTitle && (
                <div className="faqHeader">
                    <h2 className="faqTitle">{title}</h2>
                    {searchable && (
                        <div className="faqSearch">
                            <i className="fas fa-search faqSearchIcon"></i>
                            <input
                                type="text"
                                placeholder="Buscar preguntas..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className="faqSearchInput"
                            />
                        </div>
                    )}
                </div>
            )}
            
            <div className="accordionWrapper">
                {displayQuestions.length > 0 ? (
                    displayQuestions.map((item) => (
                        <AccordionItem
                            key={item.id}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openItem === item.id}
                            onClick={() => toggleItem(item.id)}
                        />
                    ))
                ) : (
                    searchable && searchTerm && (
                        <div className="noResults">
                            <p>No se encontraron preguntas que coincidan con "{searchTerm}"</p>
                        </div>
                    )
                )}
            </div>

            {/* Información de contacto para emergencias */}
            {(category === 'water' || category === 'fire' || category === 'storm' || category === 'mitigation') && (
                <div className="emergencyContact">
                    <div className="emergencyBanner">
                        <i className="fas fa-phone-alt emergencyIcon"></i>
                        <div className="emergencyInfo">
                            <h4>¿Necesita ayuda inmediata?</h4>
                            <p>Servicio de emergencia 24/7 disponible</p>
                            <a href="tel:+17866022217" className="emergencyPhone">
                                (786) 602-2217
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FAQ;
export { faqData };