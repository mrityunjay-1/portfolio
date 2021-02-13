import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import '../css/contactpage.css';

const reducer = (state, action) => {

}

const ContactMe = () => {
  const [form, dispacth] = useReducer(reducer, [{ name: "" }, { email: "" }, { subject: "" }, { message: "" }]);

  return (
    <>
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
                <div> <input type="text" value={form[0].name} onChange={(value) => { console.log(value); }} /> </div>
              </div>
              <div>
                <div className="field-title"> Email </div>
                <div> <input type="text" value={form[0].name} onChange={(value) => { console.log(value); }} /> </div>
              </div>
              <div>
                <div className="field-title"> Subject </div>
                <div> <input type="text" value={form[0].name} onChange={(value) => { console.log(value); }} /> </div>
              </div>
              <div>
                <div className="field-title"> Message </div>
                <div> <textarea value={form[0].name} onChange={(value) => { console.log(value); }} > </textarea> </div>
              </div>
              <div style={{ margin: '4% 0%', display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ width: '30%' }}> <input style={{ padding: '0.8rem', fontWeight: 'bold', backgroundColor: "brown", color: 'white' }} type="submit" value="Submit" onClick={() => { console.log("Submit"); }} /> </div>
              </div>
            </div>
          </div>
          {/* <div className="contact-page-main-div-child-2">
            2
          </div> */}
        </div>
      </div>
    </>
  );
}

export default ContactMe;