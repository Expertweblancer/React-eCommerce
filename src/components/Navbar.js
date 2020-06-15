import React, {Component} from 'react';
import logo from '../logo.png'
import {Link} from 'react-router-dom';
import {ButtonContainer} from './button'
export default class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="logo navbar-brand" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav align-items-center" >
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                Engagement
                            </Link>
                        </li>
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                Jewelry
                            </Link>
                        </li>
                        <li className="nav-item ml-5">
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
                
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mx-2">
                        <i className="fa fa-user-o"> </i>
                        </span>

                        <span className="mx-2">
                        <i className="fa fa-cart-plus"> </i>
                        </span>
                   
                       
                    </ButtonContainer>
                </Link>
            </nav>
         );
    }
}

 