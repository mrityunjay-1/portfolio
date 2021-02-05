import React from 'react';
import lovelyplant from "../images/lovely-plant.png";
import myimage from '../images/my_profie_img.png';
import '../css/homepage.css';

const HomePage = () => {
  return (
    <>
      <div className="homepage-main-div">
        <div className="homepage-main-div-child-1">
          <div>
            <img src={myimage} style={{ width: 'auto', filter: "drop-shadow(3px 3px 10px grey)" }} /> <br />
          </div>
          <div style={{ padding: "6% 1%" }}>
            <h1 style={{ border: '0.6rem solid blue', boxShadow: '0.2rem 0.2rem 0.5rem grey', backgroundColor: 'white', padding: '3%', borderRadius: '2rem', fontSize: '4rem', textShadow: '0.2rem 0.2rem 0.5rem grey', textAlign: 'center' }}> Mrityunjay Kumar </h1>
            <p style={{ color: 'blue', textAlign: 'center', fontSize: '2.5rem' }}> Making Online presence through websites </p>
          </div>
        </div>
        <div className="homepage-main-div-child-2">
          <img src={lovelyplant} style={{ filter: "drop-shadow(15px 0px 10px grey)", width: '100%', height: '100%' }} />
        </div>
      </div>
    </>
  );
};

export default HomePage;