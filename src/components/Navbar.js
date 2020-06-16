import React, {Component} from 'react';
import logo from '../logo.png'
import {Link} from 'react-router-dom';
export default class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" className="img-fluid" width="200px" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
    
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Engagement
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/">How the Custom Process works</Link>
                                <Link className="dropdown-item" to="/">Past Custom Rings</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/">Made-to-Order Rigns</Link>
                                <Link className="dropdown-item" to="/">Women's Wedding Bands</Link>
                                <Link className="dropdown-item" to="/">Man's Wedding Bands</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Custom Jewelry
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/product">All Items</Link>
                                <div className="dropdown-divider"></div>

                                <Link className="dropdown-item" to="/product">Rings</Link>
                                <Link className="dropdown-item" to="/product">Necklaces</Link>
                                <Link className="dropdown-item" to="/product">Bracelets</Link>
                                <Link className="dropdown-item" to="/product">Earrings</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
    
                    </ul>
    
                </div>
            </div>
        </nav>
         );
    }
}