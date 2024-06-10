import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './E-ComProject/Components/NavBar/NavBar';
import Footer from './E-ComProject/Components/Footer/Footer';
import CategoryDetail from './E-ComProject/Components/CategoryDetail/CategoryDetail';
import MyCart from './E-ComProject/Components/ShoppingCart/MyCart';
import AllItems from './AllItems/AllItems';
function App() {
  return (
    <BrowserRouter>
        <Routes>
        
        <Route path="/" element={<Navbar />} />
        <Route path="/cate/:category" element={<CategoryDetail />} />
        <Route path='mycart' element={<MyCart />}/>
        <Route path='all' element={<AllItems />} />
        </Routes>
        <Footer />


        
        </BrowserRouter>
  );
}

export default App;
