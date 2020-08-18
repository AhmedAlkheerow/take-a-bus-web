import React from 'react';
import Header from '../components/AboutPage/Header';
import Progress from '../components/AboutPage/ProgressSec';
import Info from '../components/AboutPage/Info';
import Service from '../components/AboutPage/Service';
import Footer from '../components/AboutPage/Footer';
import Testimonial from '../components/AboutPage/Testimonial';

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
