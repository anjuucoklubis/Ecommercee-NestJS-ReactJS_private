import React from 'react';
import FooterComponents from '../components/FooterComponents.tsx';
import Carousel from './components/Carousel.tsx';
import CardProduct from './components/CardProduct.tsx';
import CategoryProduct from './components/CategoryProduct.tsx';
import Navbar from '../components/Navbar.tsx';

function Landing() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <div style={{marginTop: 35, marginBottom: 20}}>
        <CategoryProduct/>
      </div>
      <div style={{marginTop: 40, marginBottom: 20}}>
        <CardProduct/>
      </div>
      <FooterComponents />
    </div>  
  );
}

export default Landing;
