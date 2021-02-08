import React from 'react';
import '../css/myprojects.css';
import { NavLink } from 'react-router-dom';
// import img1 from 'https://examscuriosity.000webhostapp.com/ema.jpg';
// import img2 from 'https://examscuriosity.000webhostapp.com/exa.png';
// import img3 from 'https://examscuriosity.000webhostapp.com/images/calc.png';

const my_projects = [
  {
    key: "project101",
    name: "Task Manager",
    discription: "Through this application a user can track his/her daily based tasks.",
    image: "",
    technology_used: ["Nodejs", "Expressjs", "mongoDB", "Handlebars"]
  }, {
    key: "project102",
    name: "Expense Manager",
    image: "",
    technology_used: ["Nodejs", "Expressjs", "mongoDB", "Handlebars"]
  }, {
    key: "project103",
    name: "Expense Manager",
    image: "",
    technology_used: ["Nodejs", "Expressjs", "mongoDB", "Handlebars"]
  }, {
    key: "project104",
    name: "Expense Manager",
    image: "",
    technology_used: ["Nodejs", "Expressjs", "mongoDB", "Handlebars"]
  }, {
    key: "project105",
    name: "Expense Manager",
    image: "",
    technology_used: ["Nodejs", "Expressjs", "mongoDB", "Handlebars"]
  }, {
    key: "project106",
    name: "Expense Manager",
    image: "",
    technology_used: ["Nodejs", "Expressjs", "mongoDB", "Handlebars"]
  }, {
    key: "project107",
    name: "Expense Manager",
    image: "",
    technology_used: ["Nodejs", "Expressjs", "mongoDB", "Handlebars"]
  }, {
    key: "project108",
    name: "Expense Manager",
    image: "",
    technology_used: ["Nodejs", "Expressjs", "mongoDB", "Handlebars"]
  }, {
    key: "project109",
    name: "Expense Manager",
    image: "",
    technology_used: ["Nodejs", "Expressjs", "mongoDB", "Handlebars"]
  }, {
    key: "project110",
    name: "Expense Manager",
    image: "",
    technology_used: ["Nodejs", "Expressjs", "mongoDB", "Handlebars"]
  }
];

const MyProjects = () => {
  return (
    <>
      <div className="my-projects-main-div">
        {/* header */}
        <div className="my-projects-main-div-header"> <h1> My Projects </h1> <div style={{ zIndex: '-999', position: 'absolute', width: '100%', height: '100%', background: 'rgba(255, 255, 255, 0.9)', filter: 'blur(8px)' }}></div> </div>
        {/* body */}
        <div className="my-projects-main-div-body">
          {
            my_projects.map((data) => {
              return (
                <>
                  <div class="project-card">
                    <div class="project-image-container">
                      <img src="https://examscuriosity.000webhostapp.com/exa.png" style={{ width: '100%', height: '100%' }} />
                      <img src="https://examscuriosity.000webhostapp.com/images/hanoitower.png" style={{ width: '100%', height: '100%' }} />
                      <img src="https://examscuriosity.000webhostapp.com/images/hanoitower.png" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div class="project-data-container">
                      <h1 style={{ fontSize: '2.5rem' }}> {data.name} </h1>
                      <p> {data.discription} </p>
                      <div class="technology-used" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {
                          data.technology_used.map((technology) => <h2 style={{ borderRadius: '0.5rem', padding: '1%', backgroundColor: 'lightgrey', margin: '0.5% 0.5%' }}> {technology} </h2>)
                        }
                      </div>
                      <div className="outside-links" style={{ marginTop: '2%' }}>
                        <a target="_blank" style={{ textDecoration: 'none', color: 'black', fontSize: '1.5rem' }} href="https://github.com/mrityunjay-1" > <span style={{ padding: '1%', backgroundColor: 'lightgrey', margin: '0% 0.5%' }}> Source Code </span> </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          }
        </div>
      </div>
    </>
  );
}

export default MyProjects;