import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';

const App = () => {
  return (
    <div className='bg-slate-200'>
      <Header></Header>
      <Hero></Hero>
      <Products/>
    </div>
  );
};

export default App;