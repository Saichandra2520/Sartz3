import React from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Reviews from './components/reviews/Reviews';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';

const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <Portfolio />
        <About />
        <Reviews />
        <Contact />
        
      </main>

      <Footer />
      <Scrollup/>
    </>
  );
}

export default App;
