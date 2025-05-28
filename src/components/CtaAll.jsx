import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../styles/components/CtaAll.css';

const CtaAll = () => {
    return (
        <section>
            <div className="cnt-cardCTAservices">
                <div className="cardCTAservices">
                    <h2 className="titleCardCTAServ">Designing the Future of Architecture Today</h2>
                    <p className="textCardCTAServ">Crafting Spaces That Reflect Your Dreams</p>
                    <div className="btn-fatherCTAbtn">
                        <button className="btn-OneCtaServices">
                            Contact Us
                            <i className="arrowCtaServices bi bi-arrow-up-right"></i>
                        </button>
                        <button className="btn-TwoCtaServices">
                            Our Services
                            <i className="arrowCtaServices bi bi-arrow-up-right"></i>
                        </button>
                    </div>
                    <div className="team-section">
                        <div className="team-images">
                            <img src="/images/avatarOne.png" alt="Person 1" className="team-member one" />
                            <img src="/images/avatarTwo.png" alt="Person 2" className="team-member two" />
                            <img src="/images/avatarThree.png" alt="Person 3" className="team-member three" />
                        </div>
                        <h2 className='tittleH2Team'>Shaping Spaces, Inspiring Futures</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaAll;
