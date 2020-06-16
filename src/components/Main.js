import React, {Component} from 'react';
import Banner from './Main/banner';
import Design from './Main/design';
import Sell from './Main/sell';
import Testimonial from './About Section/Testimonial';
import Subscription from './About Section/Subscription';
class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Banner />
                <Design />
                <Sell />
                <Testimonial />
                <Subscription />
            </React.Fragment>
         );
    }
}
 
export default Main;