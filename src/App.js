
import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Design from './Pages/Design';
import ShoppingCart from './Pages/ShoppingCart';
import Profile from "./Pages/Profile"
import ProductEach from './Pages/ProductEach';
import Wishlist from './Pages/Wishlist';
import AlbumProductList from './Pages/AlbumProductList';
import LightStickProductList from './Pages/LightStickProductList';
import PhotoProductList from './Pages/PhotoProductList';


import About from './Pages/About';

function App() {
  return (
    <Router>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/design" element={<Design/>}/>
              <Route path="/shoppingcart" element={<ShoppingCart/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/product" element={<ProductEach/>}/>
              <Route path="/albumProducts" element={<AlbumProductList/>}/>
              <Route path="/lightProducts" element={<LightStickProductList/>}/>
              <Route path="/photoProducts" element={<PhotoProductList/>}/>
              <Route path="/wishlist" element={<Wishlist/>}/>

              <Route path="/aboutus" element={<About/>}/>
              
            
             
            </Routes>

      
      

      </Router>
  );
}

export default App;
