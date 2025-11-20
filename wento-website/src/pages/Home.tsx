import React from 'react';
import Hero from '../sections/Hero';
import Values from '../sections/Values';
import HowItWorks from '../sections/HowItWorks';
import SME from '../sections/SME';
import Courier from '../sections/Courier';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Values />
      <HowItWorks />
      <SME />
      <Courier />
    </>
  );
};

export default Home;
