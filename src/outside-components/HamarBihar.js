import React from 'react';
import './hamarbihar.css';
import img1 from '../images/hamar-bihar-vtr.jpg';
import img2 from '../images/hamar-bihar-nalanda-vishwavidyalaya.jpg';
import img3 from '../images/hamar-bihar-madhubani-kala-chitrakari.jpg';
import img4 from '../images/hamar-bihar-mahatma-gandhi-setu-pul.jpg';
import img5 from '../images/hamar-bihar-sonpur-pashu-mela.jpeg';
import img6 from '../images/hamar-bihar-chhath-puja.jpg';


const image_data = [
  {
    key: "101",
    img: img3
  },
  {
    key: "102",
    img: img6
  },
  {
    key: "103",
    img: img5
  },
  {
    key: "104",
    img: img2
  },
  {
    key: "105",
    img: img4
  },
  {
    key: "105",
    img: img1
  }
];



const HamarBihar = () => {
  return (
    <>
      <div style={{ width: document.body.scrollWidth, padding: '2% 0%', overflowX: 'scroll', display: 'flex' }}>

        {
          image_data.map((data) => {
            return (
              <>
                <div style={{ position: 'relative', flexShrink: '0', width: '27rem', marginLeft: '2%' }}>
                  <img src={data.img} style={{ width: '100%', height: '100%' }} />
                </div>
              </>
            );
          })
        }

        {/* <div style={{ flexShrink: '0', width: '23rem', marginLeft: '2%' }}>
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
        </div> */}
      </div>
    </>
  );
}

export default HamarBihar;