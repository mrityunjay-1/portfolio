import React from 'react';
import HamarBihar from '../outside-components/HamarBihar';
import lovelyplant from "../images/lovely-plant.png";
import myimage from '../images/my_profie_img.jpg';
import '../css/homepage.css';
import ListAltIcon from '@material-ui/icons/ListAlt';
import cv from './cv-mrityunjay-kumar.pdf';
import axios from 'axios';

const HomePage = () => {

  const get_my_resume = () => {
    try {
      axios.get(cv, { responseType: 'blob' })
        .then(res => {
          // console.log(res);
          const url = window.URL.createObjectURL(new Blob([res.data], { type: "application/octetstream" }));

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

          <div style={{ display: 'grid', placeItems: 'center', padding: '4%' }}>
            <img src={myimage} style={{ borderRadius: '4rem', width: '70%', filter: "drop-shadow(3px 3px 10px grey)" }} /> <br />
          </div>

          <div className="homepage-main-div-child-1-child-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column', paddingTop: '2%' }}>
            <div style={{ minWidth: '38rem', padding: '4%', borderLeft: '1rem solid blue', borderRadius: '0.5rem', backgroundColor: 'rgba(0, 0, 0, 0.6' }}>
              <h1 style={{ color: 'white', fontSize: '4rem' }}> Mrityunjay Kumar </h1>
              <p style={{ color: 'white', fontSize: '1.4rem' }}> Making online presence through websites </p>
            </div>
            <div></div>

            <div style={{ padding: '4%', display: 'grid', placeItems: 'center' }}>
              <button className="resume-button" onClick={get_my_resume}> <span> My Resume </span> <span>&nbsp; <ListAltIcon fontSize="large" />  </span></button>
            </div>
          </div>

          {/* Hamar Bihar Section */}
          <div className="hamar-bihar">
            <HamarBihar />
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