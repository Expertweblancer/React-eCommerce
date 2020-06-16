import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Topbar extends Component {
    state = {  }
    render() { 
        return ( 
            <section id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-4 col-4">
                                    <div className="search">
                                        <i className="fas fa-search"></i>
                                        <span>Search</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-4">
                                    <div className="header_text">
                                        <p>Share Edelweiss,Earn Money</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-right col-4">
                                    <div className="search">
                                        <i className="fas fa-user"></i>
                                        <span>Sign in/Join</span>
                                        <Link to="/cart" className="ml-auto">
                                        <i className="fas fa-shopping-cart"></i>
                                        <span>Cart 0</span>
                                        </Link>
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
 
export default Topbar;