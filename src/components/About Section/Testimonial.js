import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Testimonial extends Component {
    state = {  }
    render() { 
        return ( 
            
    <section id="testimonial_part">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-4 col-sm-4">
                        <div className="testi_big">
                            <img src="images/love_big.png" alt="love" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-8">
                        <div className="testi_right">
                            <h3>Customers Love Us </h3>
                            <p>“I loved a Tiffany’s ring, but Tiffany’s could not make the customizations I wanted and were always outside my budget. So, I uploaded the Tiffany’s ring and described what I wanted and Edelweiss delivered the perfect design within my budget.”</p>
                            <h6>— Chris G. and Anna H. New York, New York USA</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-12">
                <div className="row  comment-slider">
                    <div className="col-lg-4">
                        <div className="comments text-center">
                            <div className="client_image">
                                <img src="images/love1.png" alt="l1" className="img-fluid" />
                            </div>
                            <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                            </ul>
                            <h5> fell in love with my ring instantly, but so did my friends. My friends and I all have similar designs, but its clear that I did not go to Blue Nile or James Allen like they did. The Edelweiss ring looks like art comparatively!”
                            </h5>
                            <h6>Susan H. and Dave C.</h6>
                            <h6>Atlanta, Ga. USA</h6>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="comments text-center">
                            <div className="client_image">
                                <img src="images/love2.png" alt="l2" className="img-fluid" />
                            </div>
                            <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                            </ul>
                            <h5>“My mother passed away and I inherited her engagement ring. I knew when I wanted to propose I wanted to use this ring. Most of the jewelers I went to would not accept working on an heirloom piece. Once I got in touch with Edelweiss everything changed. I worked with them on designs as I traveled for work and was able to build on our families legacy with a one of a kind engagement ring. Thanks Edelweiss!” </h5>
                            <h6> Steven S. and Katie H.</h6>
                            <h6>Chicago, Il. USA</h6>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="comments text-center">
                            <div className="client_image">
                                <img src="images/love3.png" alt="l3" className="img-fluid" />
                            </div>
                            <ul>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                            </ul>
                            <h5>“I was looking at 3ct diamond rings. I knew quality mattered, but I was dismayed looking for rings that fit my budget at well known luxury brands. I uploaded what I wanted to Edelweiss and within a few days I received three design options that fit my budget. They helped me get my dream ring!”</h5>
                            <h6> Greg J. and Tina Y.</h6>
                            <h6>San Francisco, Ca. USA</h6>

                        </div>
                    </div>

                </div>
                <i className="fas fa-chevron-left left"></i>
                <i className="fas fa-chevron-right right"></i>
            </div>
            <div className="click">
                <Link to="/"> Explore Reviews</Link>
            </div>

        </div>
    </div>
</section>
         );
    }
}
 
export default Testimonial;