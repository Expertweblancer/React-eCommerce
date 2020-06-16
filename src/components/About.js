import React, {Component} from 'react';
import Mission from './About Section/Mission';
import Value from './About Section/Value';
import Model from './About Section/Model';
import Standard from './About Section/Standard';
import Team from './About Section/Team';
import Testimonial from './About Section/Testimonial';
import Subscription from './About Section/Subscription';


class About extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Mission />
                <Value />
                <Model />
                <Standard />
                <Team />
                <Testimonial />
                <Subscription />
            </React.Fragment>
         );
    }
}
 
export default About;