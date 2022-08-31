import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
//import Footer from './components/Footer';
import {Route,Routes} from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    )
  }
}
export default App;
