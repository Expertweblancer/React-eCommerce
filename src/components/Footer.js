import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <section id="footer_part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer_icon">
                                <ul>
                                    <li><Link to="https://www.facebook.com/edelweissjewelry" target="_blank"><i className="fab fa-facebook-square"></i></Link></li>
                                    <li><Link to="https://www.instagram.com/edelweissjewelry/" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                                    <li><Link to="https://www.linkedin.com/company/edelweiss-jewelry/about/" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
                                    <li><Link to="https://www.pinterest.com/Edelweiss_Jewelry/" target="_blank"><i className="fab fa-pinterest"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="footer_link">
                                        <p>OUR PROMISES</p>
                                        <ul>
                                            <li><Link to="/"><i className="fas fa-circle"></i>Excptional Product</Link></li>
                                            <li> <Link to="/"><i className="fas fa-circle"></i>Approachable Prices</Link></li>
                                            <li> <Link to="/"><i className="fas fa-circle"></i>Unamtched Experience</Link></li>
                                        </ul>



                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="footer_link">
                                        <p>EDELWEISS JOURNEY</p>
                                        <ul>
                                            <li><Link to="/">Start Custom</Link></li>
                                            <li> <Link to="/">Shop Boutique</Link></li>
                                            <li> <Link to="/">Upload on Image</Link></li>
                                            <li> <Link to="/">Heirloom Modernization</Link></li>
                                            <li> <Link to="/">Visit Your Account</Link></li>
                                        </ul>

                                    </div>

                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="footer_link">
                                        <p>EXPLORE</p>
                                        <ul>
                                            <li><Link to="/">Share Edelweiss ,Earn Money</Link></li>
                                            <li> <Link to="/">Read And Write Customer Reviews</Link></li>
                                            <li> <Link to="/">About The Company</Link></li>
                                            <li> <Link to="/">Partners</Link></li>
                                            <li> <Link to="/">Diamond Guide</Link></li>
                                            <li> <Link to="/">Edelweiss Blog</Link></li>
                                        </ul>

                                    </div>

                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="footer_link">
                                        <p>CONNECT</p>
                                        <ul>
                                            <li><Link to="/">Become an <span>Edelweiss Insider</span> to reiceve special updates and offers</Link></li>
                                            <li>
                                                <form className="down">
                                                    <input type="email" placeholder="Email Address" aria-label="Email Address" />

                                                </form>
                                            </li>
                                            <li><Link to="/"><button className="tap">Join</button></Link> </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="cards">
                                <div className="cash_card">
                                    <Link to="/"> <img src="images/amex.jpg" alt="amex" className="img-fluid" /></Link>
                                </div>
                                <div className="cash_card">
                                    <Link to="/"> <img src="images/pay.jpg" alt="amex" className="img-fluid" /></Link>
                                </div>
                                <div className="cash_card">
                                    <Link to="/"> <img src="images/daag.jpg" alt="amex" className="img-fluid" /></Link>
                                </div>
                                <div className="cash_card">
                                    <Link to="/"> <img src="images/g-pay.jpg" alt="amex" className="img-fluid" /></Link>
                                </div>
                                <div className="cash_card">
                                    <Link to="/"> <img src="images/master-card.jpg" alt="amex" className="img-fluid" /></Link>
                                </div>
                                <div className="cash_card">
                                    <Link to="/"> <img src="images/visa-card.jpg" alt="amex" className="img-fluid" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="copyright_text">
                                <p>Copyright @ 2020 Edelweiss Jewelry</p>
                            </div>

                            <div className="ask_me">
                                <div className="ask_image">
                                    <img src="images/sleep.png" alt="" />
                                </div>
                                <ul>
                                    <li><Link to="/"></Link>Ask Me A Question!</li>
                                    <li><Link to="/"> <i>Leave Us A Message</i></Link></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default Footer;