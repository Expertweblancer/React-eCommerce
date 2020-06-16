import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
  return (
    <React.Fragment>
     <Topbar />
     <Navbar />
     
     <Switch>
       <Route path="/" exact component={Main} />
       <Route path="/product" exact component={ProductList} />
       <Route path="/details" component={Details} />
       <Route path="/cart" component={Cart} />
       <Route patj="/about" component={About}></Route>
       <Route component={Default} />
     </Switch>
     <Footer />
    </React.Fragment>
  );
}

export default App;
