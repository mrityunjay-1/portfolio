import React from 'react';
import './hamarbihar.css';
import img1 from '../images/hamar-bihar-vtr.jpg';
import img2 from '../images/hamar-bihar-nalanda-vishwavidyalaya.jpg';
import img3 from '../images/hamar-bihar-madhubani-kala-chitrakari.jpg';

const HamarBihar = () => {
  return (
    <>
      <div style={{ width: document.body.scrollWidth, padding: '2% 0%', overflowX: 'scroll', display: 'flex' }}>
        <div style={{ flexShrink: '0', width: '23rem', marginLeft: '2%' }}>
          <img src={img1} style={{ width: '100%' }} />
        </div>
        <div style={{ flexShrink: '0', width: '23rem', marginLeft: '2%' }}>
          <img src={img2} style={{ width: '100%' }} />
        </div>
        <div style={{ flexShrink: '0', width: '23rem', marginLeft: '2%' }}>
          <img src={img3} style={{ width: '100%' }} />
        </div>
        <div style={{ flexShrink: '0', width: '23rem', marginLeft: '2%' }}>
          <img src={img1} style={{ width: '100%' }} />
        </div>
        <div style={{ flexShrink: '0', width: '23rem', margin: '0% 2%' }}>
          <img src={img2} style={{ width: '100%' }} />
        </div>
      </div>
    </>
  );
}

export default HamarBihar;