import React, {Component} from 'react';
class Banner extends Component {
    state = {  }
    render() { 
        return ( 
            

    <section id="banner_part">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">
                    </div>
                    <div className="col-lg-6">
                        <div className="banner_text">
                            <div className="banner_logo">
                                <img src="images/banner_logo.png" alt="banner_logo" className="img-fluid" width="50px;" />
                            </div>
                            <div className="banner_topic">
                                <h2>Edelweiss for Designers</h2>
                                <h5>Easiest way to <span>design</span> and <span>sell</span> your own jewelry line.</h5>
                                <ul>
                                    <li>No investment or experience necessary.</li>
                                    <li>In 3 weeks create your own jewelry line and store.</li>
                                </ul>
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
 
export default Banner;