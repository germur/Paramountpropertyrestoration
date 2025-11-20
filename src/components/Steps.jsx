import styles from './Steps.module.css'

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
            <h2 className={styles.stepTiitlePrinci}>Your Florida Remodeling Project – Simplified in 4 Steps</h2>
            <div className={styles.stepsContainer}>
                {steps.map((step, index) => (
                    <div key={index} className={styles.step}>
                        <div className={styles.stepNumber}>
                            {String(step.number).padStart(2, '0')}
                        </div>
                        <div className={styles.stepContent}>
                            <h3 className={styles.stepTittle}>{step.title}</h3>
                            <p className={styles.stepText}>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Steps;