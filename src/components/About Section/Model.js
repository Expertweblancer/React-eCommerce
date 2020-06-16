import React, {Component} from 'react';

class Model extends Component {
    state = {  }
    render() { 
        return ( 
            
    <section id="model_part">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="model_iamge">
                            <img src="images/made_small.png" alt="made" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8">
                        <div className="model_text">
                            <h3>Our Model</h3>
                            <p>Use technology to create a direct to consumer model that makes high end made to order custom jewelry.</p>
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
 
export default Model;