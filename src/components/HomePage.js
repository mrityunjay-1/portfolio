import React from 'react';
import MySkills from './MySkills';
import lovelyplant from "../images/lovely-plant.png";
import myimage from '../images/my_profie_img.jpg';
import '../css/homepage.css';
import cv from '../images/cv-mrityunjay-kumar.pdf';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {

  const get_my_resume = () => {
    try {
      axios.get(cv, { responseType: 'blob' })
        .then(res => {
          const url = window.URL.createObjectURL(new Blob([res.data], { type: "application/pdf" }));

          let a = document.createElement("a");
          a.setAttribute("href", url);
          a.setAttribute("download", "cv-mrityunjay-kumar.pdf");

          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);

        });
    } catch (e) {
      // console.log(e);
    }
  }


  return (
    <>
      <div className="homepage-main-div">
        <div className="homepage-main-div-child-1">

          <div className="center">
            <img src={myimage} style={{ borderRadius: '8rem', width: '70%', filter: "drop-shadow(3px 3px 10px grey)" }} /> <br />
          </div>

          <div className="homepage-main-div-child-1-child-2">
            <div style={{ minWidth: '38rem', padding: '4%', borderRadius: '0 1rem 1rem 0', borderLeft: '0.6rem solid brown', backgroundColor: 'rgba(255, 255, 255' }}>
              <p style={{ color: 'white', fontSize: '1.2rem', color: 'grey' }}> Hello, I am </p>
              <h1 style={{ color: 'brown', fontSize: '4rem' }}> Mrityunjay Kumar </h1>
            </div>
            <div></div>

            <div className="resume-button-container">
              <button className="resume-button" onClick={get_my_resume}> <span> Resume </span> <span>&nbsp;  </span></button>
              <div className="resume-icon" onClick={get_my_resume}> <FontAwesomeIcon icon={faDownload} /> </div>
            </div>
          </div>


        </div>
        {/* <div className="homepage-main-div-child-2">
          <img src={lovelyplant} style={{ filter: "drop-shadow(15px 0px 10px grey)", width: '100%', height: '100%' }} />
        </div> */}


      </div>
      <MySkills />
    </>
  );
};

export default HomePage;