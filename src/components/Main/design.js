import React, {Component} from 'react';
class Design extends Component {
    state = {  }
    render() { 
        return ( 
            <section id="design_part">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="design_topic">
                                    <h5>Design</h5>
                                    <ul>
                                        <li>From inspiration to final design,</li>
                                        <li>Edelweiss helps make your ideas come to life</li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-sm-12 col-md-4">
                                        <div className="vector_image">
                                            <img src="images/idea.png" alt="idea" className="img-fluid" />
                                            <div className="stick">
                                                <img src="images/magic-stick.png" alt="magic_stick" className="img_fluid" />
                                            </div>
                                            <h5>Upload Ideas</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-12 col-md-4">
                                        <div className="vector_image">
                                            <img src="images/interate.png" alt="interate" className="img-fluid" />
                                            <div className="stick">
                                                <img src="images/magic-stick.png" alt="magic_stick" className="img_fluid" />
                                            </div>
                                            <h5>Iterate Designs</h5>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-12 col-md-4">
                                        <div className="vector_image">
                                            <img src="images/finalize.png" alt="finalize" className="img-fluid" />

                                            <h5>Finalize Designs</h5>
                                        </div>
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
 
export default Design;