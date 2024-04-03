import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Aboutus from "./Aboutus/Aboutus";
import Whyus from "./Aboutus/Whyus";
import Infrastucture from "./Aboutus/Infrastucture";
import Contact from "./contactus/Contact";
import Footer from "./components/Footer";
import Quality from "./our_precision/Quality";
import Products from "./products/Products";
import Head from "./components/Head";
import LoginForm from "./Login/LoginForm";
import Add_products from "./products/Add_products";


function App() {
  return (
    <BrowserRouter>
    {/* <Head/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/why-us" element={<Whyus/>} />
        <Route path="/infrastructure" element={<Infrastucture/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/quality" element={<Quality/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/add_product" element={<Add_products/>} />

      </Routes>
      <Footer/>
      
    </BrowserRouter>
  );
}

export default App;
