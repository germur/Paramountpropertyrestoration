import '/src/styles/components/Steps.css'

const Steps = () => {
    const steps = [
        {
            number: 1,
            title: "Free Consultation",
            description: "On-Site Assessment & Custom Proposa",
        },
        {
            number: 2,
            title: "3D Renders",
            description: "Renderings & Material Selection",
        },
        {
            number: 3,
            title: "Follow up",
            description: "Daily Updates via Email",
        },
        {
            number: 4,
            title: "Final Delivery",
            description: "Final Walkthrough & Warranty Handoff",
        },
    ];

    return (
        <div>
            <h2 className='step-tiitlePrinci'>Your Florida Remodeling Project – Simplified in 4 Steps</h2>
            <div className="steps-container">
                {steps.map((step, index) => (
                    <div key={index} className="step">
                        <div className="step-number">
                            {String(step.number).padStart(2, '0')}
                        </div>
                        <div className="step-content">
                            <h3 className='step-tittle'>{step.title}</h3>
                            <p className='step-text'>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Steps;