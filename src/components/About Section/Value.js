import React, {Component} from 'react';

class Value extends Component {
    state = {  }
    render() { 
        return ( 
            
    <section id="values_part">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="value_text">
                                <div className="ring">
                                    <img src="images/ring.jpg" alt="riing" className="img-fluid" />
                                    <div className="big">
                                    <h3>Values</h3>
                                </div>
                                </div>
                                
                                
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="vector_values_image">
                                        <img src="images/vector_stick.png" alt="vector_s" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="values_topic">
                                        <h5>Easy to Use <span>– Simple.</span></h5>
                                        <p>Work with experts by uploading inspiration, reviewing designs, and purchasing online.</p>
                                    </div>
                                </div>
                            </div>
                                <div className="row">
                                <div className="col-lg-3">
                                    <div className="vector_values_image">
                                        <img src="images/vector_diamond.png" alt="vector_d" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="values_topic">
                                        <h5>High Quality <span>– Foundational.</span></h5>
                                        <p>Create jewelry with the highest quality materials and craftsmanship the world can offer.</p>
                                    </div>
                                </div>
                            </div>
                                <div className="row">
                                <div className="col-lg-3">
                                    <div className="vector_values_image">
                                        <img src="images/vector_price.png" alt="vector_p" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="values_topic">
                                        <h5>Exceptional Price<span>– Affordable.</span></h5>
                                        <p>By removing the costs of having a retail store with inventory, we can offer the highest quality jewelry at 30% less than our luxury jewelry competitors.</p>
                                    </div>
                                </div>
                            </div>
                                <div className="row">
                                <div className="col-lg-3">
                                    <div className="vector_values_image">
                                        <img src="images/vector_necklace.png" alt="vector_n" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="values_topic">
                                        <h5>Expert Design <span>– Unlimited.</span></h5>
                                        <p>Never limited by inventory, Edelweiss experts will work with you to create and edit any timeless or bespoke design until perfect. </p>
                                    </div>
                                </div>
                            </div>
                                <div className="row">
                                <div className="col-lg-3">
                                    <div className="vector_values_image">
                                        <img src="images/vector_dollar.png" alt="vector_dlr" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="values_topic">
                                        <h5>Risk Free <span>– Trusted.</span></h5>
                                        <p>Purchase with confidence with our 30 day money back guarantee, free shipping, and our free cleanings, repairs, and resizing.</p>
                                    </div>
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
 
export default Value;