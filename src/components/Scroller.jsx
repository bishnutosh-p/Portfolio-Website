import React from 'react';
import { SectionWrapper } from '../hoc';

const Scroller = () => {
  // Function to scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This gives a smooth scrolling effect
    });
  };

  return (
    <button 
      onClick={scrollToTop} 
      style={{
        position: 'fixed', // Keeps the button in a fixed position on the page
        bottom: '20px', // Distance from the bottom of the page
        right: '20px', // Distance from the right side of the page
        padding: '10px 15px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)'
      }}
    >
      ↑ Top
    </button>
  );
};

export default SectionWrapper(Scroller,"scroller");