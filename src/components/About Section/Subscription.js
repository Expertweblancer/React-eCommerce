 
import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class Subscription extends Component {
    state = {  }
    render() { 
        return ( 
            
    <section id="subscribe_part">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="subs">
                    <h5>Follow Us</h5>
                    <p>Subscribe to Newsletter</p>
                    <ul>
                        <li><Link to="https://www.facebook.com/edelweissjewelry" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                         <li><Link to="https://www.instagram.com/edelweissjewelry/" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                         <li><Link to="https://www.linkedin.com/company/edelweiss-jewelry/about/" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
                        <li><Link to="https://www.pinterest.com/Edelweiss_Jewelry/" target="_blank"><i className="fab fa-pinterest-p"></i></Link></li>
                        <li>
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Type your email address" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="trial">
        <h5>Now offering 30-day Rentals on <span>Edelweiss Boutique</span> items</h5>
    </div>
</section>
         );
    }
}
 
export default Subscription;