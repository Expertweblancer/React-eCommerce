import React, {Component} from 'react';

class Mission extends Component {
    state = {  }
    render() { 
        return ( 
            <section id="mission_part">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="mission_text">
                                <div className="mission_topic">
                                    <h2>Our Mission</h2>
                                    <p>Inspired by the Edelweiss tradition, we aspire to make unique luxury jewelry approachable, fun, and affordable.</p>
                                    <div className="banner_logo">
                                        <img src="images/about_banner_logo.png" alt="about_banner_logo" className="img-fluid" width="50px;" />
                                    </div>
                                    <ul>
                                        <li>Long ago, suitors journeyed high within the Alps to find rare edelweiss flowers to present as tokens of their true devotion.</li>
                                        <li>Today, we present similar treasures to you. An extraordinary jewelry piece holds value beyond gems and metals; it represents a milestone in your life story. Edelweiss partners with you to commemorate life’s special moments.</li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-6">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
         );
    }
}
 
export default Mission;