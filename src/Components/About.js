import React from 'react';
import Header from './Header';
import Progress from './ProgressSec';
import Info from './Info';
import Service from './Service';
import Footer from './Footer';
import Testimonial from './Testimonial';

import '../tailwind.css';

export default function AboutUs() {
  return (
    <>
      <Header />
      <Info />
      <Progress />
      <Service />
      <Testimonial />
      <Footer />
    </>
  );
}
