import React from "react";
import Home from './home/Home';
import Login from './login/Login';
import Product from './product/Product';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
        <div>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/login" element={<Login/>}></Route>
              <Route exact path="/product" element={<Product/>}></Route>
            </Routes>
          </Router>
         
        </div>
  );
  }

export default App;
