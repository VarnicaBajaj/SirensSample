import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhySound from './components/WhySound';
import SoundDemos from './components/SoundDemos';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
  initPageLoadAnimation,
  initScrollAnimations,
  initParallaxEffects,
  initHoverAnimations,
  cleanupAnimations
} from './animations/pageAnimations';
import { CustomCursor } from './animations/customCursor';
import { SmoothScroll } from './animations/smoothScroll';

function App() {
  useEffect(() => {
    let cursor: CustomCursor | null = null;
    let smoothScroll: SmoothScroll | null = null;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (!isMobile) {
      cursor = new CustomCursor();
    } else {
      document.body.classList.add('no-custom-cursor');
    }

    smoothScroll = new SmoothScroll();

    const timer = setTimeout(() => {
      initPageLoadAnimation();
      initScrollAnimations();
      initParallaxEffects();
      initHoverAnimations();
    }, 100);

    return () => {
      clearTimeout(timer);
      cleanupAnimations();
      if (cursor) cursor.destroy();
      if (smoothScroll) smoothScroll.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <WhySound />
      <SoundDemos />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;