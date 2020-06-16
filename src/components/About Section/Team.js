import React, {Component} from 'react';

class Team extends Component {
    state = {  }
    render() { 
        return ( 
            
    <section id="team_part">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="team_text">
                    <h3>Your Jewelry Team</h3>
                    <ul>
                        <li>A full team of experts available to you at </li>
                        <li>wholesale prices via our direct to consumer model</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="team_topic">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="team_pic">
                                <img src="images/team1.png" alt="t1" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <div className="team_preview">
                                <h4>Jewelry Experts</h4>
                                <p>Our founder, Ryan Karolak is a 10-year veteran in the high jewelry industry with extensive experience creating jewelry for royalty, celebrities, high-end auction houses, and luxury brands. Driven by the lack of access to the world’s best resources and craftsmen, he pursued an MBA at New York University to learn how to offer the highest-quality jewelry to the masses via an affordable and accessible model. In creating Edelweiss in 2017, Ryan leveraged cutting-edge technology to develop a direct-to-consumer model that seamlessly meets clients' needs and expectations. He personally selected each Edelweiss team member to assure the highest level of customer service, innovation, collaboration, and long-lasting client relationships.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team_topic">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="team_pic">
                                <img src="images/team2.png" alt="t2" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <div className="team_preview">
                                <h4>Master Jewelers</h4>
                                <p>Led by expert craftsman Alex Yarnikh, our team of award winning master jewelers are true artists in the craft, making Edelweiss the envy of the industry. Many have a lifelong passion for jewelry, and began honing their skills by mimicking famous designs from prestigious collections such as the House of Ramonov and House of Windsor. Today, in the world’s jewelry-making hub of New York City, their work is routinely seen on red carpets, at royal weddings, in exclusive auction houses, and luxury brand boutiques. Edelweiss not only brings their exceptional talents to you, it does so at a steep discount, compared to other jewelers the world over.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team_topic">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="team_pic">
                                <img src="images/team3.png" alt="t3" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8">
                            <div className="team_preview">
                                <h4>Master Designers</h4>
                                <p>Selected for their outstanding design achievements and experience in world-class programs like the GIA Institute, our master designers offer consumers endless choice in creating bespoke jewelry. Whether it's refining a timeless classic, or innovating and pushing the boundaries of conventional design, they deftly collaborate with you to craft a unique, meaningful piece that lasts a lifetime. And, via our unique online tool, our designers effortlessly breathe life into our clients’ concepts and/or visions, regardless of where they are in the world.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>

         );
    }
}
 
export default Team;