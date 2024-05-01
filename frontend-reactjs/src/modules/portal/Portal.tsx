import React from 'react';
import Navbar from './Navbar.tsx';
import FooterComponents from './FooterComponents.tsx';
import Carousel from './components/Carousel.tsx';

function Portal() {
  return (
    <div>
      <Navbar />
      <Carousel/>
      {/* <FooterComponents /> */}
    </div>
  );
}

export default Portal;
