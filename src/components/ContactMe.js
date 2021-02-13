import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import '../css/contactpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const reducer = (state, action) => {
  let data = [...state];
  switch (action.type) {
    case "name":
      data[0] = { name: action.payload };
      return data;
    case "email":
      data[1] = { email: action.payload };
      return data;
    case "subject":
      data[2] = { subject: action.payload };
      return data;
    case "message":
      data[3] = { message: action.payload };
      return data;
    default:
      return state;
  }
}

const ContactMe = () => {
  const [form, dispatch] = useReducer(reducer, [{ name: "" }, { email: "" }, { subject: "" }, { message: "" }]);


  function sendData() {
    // data validation and data sanitization

    try {
      const res = axios.post("/portfolio_contact_me_form", form);
      console.log(res.data);

      document.querySelector(".notification").style.display = "grid";

    } catch (e) {
      console.log(e.message);
    }

    setTimeout(() => {
      document.querySelector(".notification").style.display = "none";
    }, 3000);
  }


  return (
    <>
      <div className="notification" >
        <div style={{}}> <h1 style={{ padding: '3%', backgroundColor: 'black', fontSize: '3rem', color: 'white' }}> Thankyou so much for contacting me. </h1> </div>
      </div>


      <div style={{ backgroundImage: 'linear-gradient(lightblue, cyan)' }}>
        {/* header */}
        <div className="header-div">
          <h1 > Contact me </h1>
        </div>

        {/* body */}

        <div className="contact-page-main-div">
          <div className="contact-page-main-div-child-1">
            <div className="contact-form">
              <div>
                <div className="field-title"> Name </div>
                <div> <input type="text" value={form[0].name} onChange={(e) => { dispatch({ type: "name", payload: e.target.value }) }} /> </div>
              </div>
              <div>
                <div className="field-title"> Email </div>
                <div> <input type="text" value={form[1].name} onChange={(e) => { dispatch({ type: "email", payload: e.target.value }) }} /> </div>
              </div>
              <div>
                <div className="field-title"> Subject </div>
                <div> <input type="text" value={form[2].name} onChange={(e) => { dispatch({ type: "subject", payload: e.target.value }) }} /> </div>
              </div>
              <div>
                <div className="field-title"> Message </div>
                <div> <textarea value={form[3].name} onChange={(e) => { dispatch({ type: "message", payload: e.target.value }) }} > </textarea> </div>
              </div>
              <div style={{ margin: '4% 0%', display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ width: '30%' }}> <input style={{ padding: '0.8rem', fontWeight: 'bold', backgroundColor: "brown", color: 'white' }} type="submit" value="Submit" onClick={sendData} /> </div>
              </div>
            </div>
          </div>

          <div className="contact-page-main-div-child-2">
            <div style={{ width: '30rem', justifyContent: 'center', display: 'flex', borderTop: '0.1rem solid brown', margin: '3% 0%' }}>
              <a href="mailto:kumarmrityunjay7034@gmail.com?Subject=Project" style={{ color: 'blue', padding: '4%' }} target="_blank"> <FontAwesomeIcon style={{ padding: '2%', fontSize: '3.5rem' }} icon={faEnvelope} /> </a>
              <a href="https://github.com/mrityunjay-1" style={{ color: 'blue', padding: '4%' }} target="_blank"> <FontAwesomeIcon style={{ padding: '2%', fontSize: '3.5rem' }} icon={faGithub} /> </a>
              <a href="https://www.linkedin.com/in/mrityunjay-kumar-a42908151" style={{ color: 'blue', padding: '4%' }} target="_blank"> <FontAwesomeIcon style={{ padding: '2%', fontSize: '3.5rem' }} icon={faLinkedin} /> </a>
              <a href="" style={{ color: 'blue', padding: '4%' }} target="_blank"> <FontAwesomeIcon style={{ padding: '2%', fontSize: '3.5rem' }} icon={faTwitterSquare} /> </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;