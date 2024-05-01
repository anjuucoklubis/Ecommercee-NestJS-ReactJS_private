import React from 'react';
import Navbar from './components/Navbar.tsx';
import FooterComponents from './components/FooterComponents.tsx';
import Carousel from './components/Carousel.tsx';
import CardProduct from './components/CardProduct.tsx';

function Landing() {
  return (
    <div>
      <Navbar />
      <Carousel/>
      <CardProduct/>
      <FooterComponents />
    </div>
  );
}

export default Landing;
