import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Sell extends Component {
    state = {  }
    render() { 
        return ( 
            
    <section id="sell_part">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">

                    </div>
                    <div className="col-lg-6">
                        <div className="design_topic">
                            <h5>Sell</h5>
                            <ul>
                                <li>You promote. Edelweiss delivers.</li>
                            </ul>
                        </div>
                        <div className="sell_text">
                            <h5>Promotion</h5>
                            <p>Promote your designs to earn 10% commission. Edelweiss supports your promotions with</p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="diamond_text">
                                        <i className="fas fa-gem"></i>
                                        <span>Designer Profile</span>
                                    </div>
                                    <div className="diamond_text">
                                        <i className="fas fa-gem"></i>
                                        <span>Blog Post</span>
                                    </div>
                                    <div className="diamond_text">
                                        <i className="fas fa-gem"></i>
                                        <span>Social Post</span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="diamond_text">
                                        <i className="fas fa-gem"></i>
                                        <span>Newsletter Template</span>
                                    </div>
                                    <div className="diamond_text">
                                        <i className="fas fa-gem"></i>
                                        <span>Friends and Family Template</span>
                                    </div>
                                    <div className="diamond_text">
                                        <i className="fas fa-gem"></i>
                                        <span>Unique Discount Code</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="delivery_text">
                            <h5>Delivery</h5>
                            <p>Edelweiss provides all the services to design, manufacture, deliver, and manage each sale.</p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="diamond_text">
                                        <i className="fas fa-gem"></i>
                                        <span>Design</span>
                                    </div>
                                    <div className="diamond_text">
                                        <i className="fas fa-gem"></i>
                                        <span>Manufacture</span>
                                    </div>
                                    <div className="diamond_text">
                                        <i className="fas fa-gem"></i>
                                        <span>Ecommerce Development & Hosting</span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="diamond_text">
                                        <i className="fas fa-gem"></i>
                                        <span>Order Fulfilment & Distribution</span>
                                    </div>
                                    <div className="diamond_text">
                                        <i className="fas fa-gem"></i>
                                        <span>Customer Service</span>
                                    </div>
                                    <div className="diamond_text">
                                        <i className="fas fa-gem"></i>
                                        <span>Dedicated Account Supporte</span>
                                    </div>
                                    <div className="diamond_text">
                                        <i className="fas fa-gem"></i>
                                        <span>Repairs and Returns</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="review">
                            <Link to="/product"> Explore Examples</Link>
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
 
export default Sell;