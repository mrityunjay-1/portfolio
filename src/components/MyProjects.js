import React from 'react';
import '../css/myprojects.css';

const my_projects = [
  {
    key: "project101",
    name: "examscuriosity.com",
    discription: "A php based web application where a user can track and maintain daily based expense, a fare calculator and more stuff.",
    project_images: [
      "https://github.com/mrityunjay-1/projects-images/blob/main/examscuriosity-site-image.png?raw=true",
      "https://github.com/mrityunjay-1/projects-images/blob/main/examscuriosity-site-image2.png?raw=true",
      "https://github.com/mrityunjay-1/projects-images/blob/main/examscuriosity-site-image3.png?raw=true"
    ],
    technology_used: ["php", "html", "css", "javascript"],
    live_demo: "https://examscuriosity.000webhostapp.com",
    source_code: "https://github.com/mrityunjay-1",
  }, {
    key: "project102",
    name: "Weather Checker",
    discription: "Enter your city name and get the weather information right on your screen.",
    project_images: [
      "https://github.com/mrityunjay-1/projects-images/blob/main/weather-app-img-2.png?raw=true",
      "https://github.com/mrityunjay-1/projects-images/blob/main/weather-app-img-1.png?raw=true",
      "https://github.com/mrityunjay-1/projects-images/blob/main/weather-app-img-3.png?raw=true"
    ],
    live_demo: "https://my-weather-application2.herokuapp.com/",
    source_code: "https://github.com/mrityunjay-1/my-weather-application",
    technology_used: ["Nodejs", "Expressjs", "Handlebars", "MapBox weather API"]
  }, {
    key: "project103",
    name: "Live Chat Application",
    project_images: [
      "https://github.com/mrityunjay-1/projects-images/blob/main/live-chat-app-image2.png?raw=true",
      "https://github.com/mrityunjay-1/projects-images/blob/main/live-chat-app-image3.png?raw=true",
      "https://github.com/mrityunjay-1/projects-images/blob/main/live-chat-app-image1.png?raw=true"
    ],
    live_demo: "http://my-chat-application-mrityunjay.herokuapp.com/",
    source_code: "https://github.com/mrityunjay-1/my-chat-application",
    technology_used: ["Nodejs", "Expressjs", "socket.io", "Handlebars"]
  }, {
    key: "project104",
    name: "Expense Manager",
    project_images: [
      "https://examscuriosity.000webhostapp.com/exa.png",
      "https://examscuriosity.000webhostapp.com/images/hanoitower.png",
      "https://examscuriosity.000webhostapp.com/images/hanoitower.png"
    ],
    technology_used: ["Nodejs", "Expressjs", "mongoDB", "Handlebars"]
  }, {
    key: "project105",
    name: "Expense Manager",
    project_images: [
      "https://examscuriosity.000webhostapp.com/exa.png",
      "https://examscuriosity.000webhostapp.com/images/hanoitower.png",
      "https://examscuriosity.000webhostapp.com/images/hanoitower.png"
    ],
    technology_used: ["Nodejs", "Expressjs", "mongoDB", "Handlebars"]
  }, {
    key: "project106",
    name: "Expense Manager",
    project_images: [
      "https://examscuriosity.000webhostapp.com/exa.png",
      "https://examscuriosity.000webhostapp.com/images/hanoitower.png",
      "https://examscuriosity.000webhostapp.com/images/hanoitower.png"
    ],
    technology_used: ["Nodejs", "Expressjs", "mongoDB", "Handlebars"]
  }
  // , {
  //   key: "project107",
  //   name: "Expense Manager",
  //   project_images: [
  //     "https://examscuriosity.000webhostapp.com/exa.png",
  //     "https://examscuriosity.000webhostapp.com/images/hanoitower.png",
  //     "https://examscuriosity.000webhostapp.com/images/hanoitower.png"
  //   ],
  //   technology_used: ["Nodejs", "Expressjs", "mongoDB", "Handlebars"]
  // }, {
  //   key: "project108",
  //   name: "Expense Manager",
  //   project_images: [
  //     "https://examscuriosity.000webhostapp.com/exa.png",
  //     "https://examscuriosity.000webhostapp.com/images/hanoitower.png",
  //     "https://examscuriosity.000webhostapp.com/images/hanoitower.png"
  //   ],
  //   technology_used: ["Nodejs", "Expressjs", "mongoDB", "Handlebars"]
  // }, {
  //   key: "project109",
  //   name: "Expense Manager",
  //   project_images: [
  //     "https://examscuriosity.000webhostapp.com/exa.png",
  //     "https://examscuriosity.000webhostapp.com/images/hanoitower.png",
  //     "https://examscuriosity.000webhostapp.com/images/hanoitower.png"
  //   ],
  //   technology_used: ["Nodejs", "Expressjs", "mongoDB", "Handlebars"]
  // }, {
  //   key: "project110",
  //   name: "Expense Manager",
  //   project_images: [
  //     "https://examscuriosity.000webhostapp.com/exa.png",
  //     "https://examscuriosity.000webhostapp.com/images/hanoitower.png",
  //     "https://examscuriosity.000webhostapp.com/images/hanoitower.png"
  //   ],
  //   technology_used: ["Nodejs", "Expressjs", "mongoDB", "Handlebars"]
  // }
];

const MyProjects = () => {

  return (
    <>
      <div className="my-projects-main-div">
        {/* header */}
        <div className="my-projects-main-div-header"> <h1 style={{ textShadow: "0.2rem 0.1rem 0.5rem lightgrey" }}> My Projects </h1> <div style={{ zIndex: '-999', position: 'absolute', width: '100%', height: '100%', background: 'rgba(255, 255, 255, 0.9)', filter: 'blur(8px)' }}></div> </div>
        {/* body */}
        <div className="my-projects-main-div-body">
          {
            my_projects.map((data) => {
              return (
                <>
                  <div class="project-card">
                    <div class="project-image-container">
                      {
                        data.project_images.map(image => <img src={image} style={{ width: '100%', height: '100%' }} />)
                      }
                    </div>
                    <div class="project-data-container">
                      <h1 style={{}}> {data.name} </h1>
                      <p style={{ fontSize: '1.4rem', padding: '2% 0%' }}> {data.discription} </p>
                      <div class="technology-used" style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {
                          data.technology_used.map((technology) => <h3 style={{ borderRadius: '0.5rem', padding: '1%', backgroundColor: 'lightgrey', margin: '0.5% 0.5%' }}> {technology} </h3>)
                        }
                      </div>
                      <div className="outside-links" style={{ marginTop: '2%' }}>
                        {data.live_demo !== undefined ? <a target="_blank" style={{ textDecoration: 'none', color: 'black' }} href={data.live_demo} > <span style={{ padding: '1%', backgroundColor: 'lightgrey', margin: '0% 0.5%' }}> Live Demo </span> </a> : ""}
                        <a target="_blank" style={{ textDecoration: 'none', color: 'black' }} href={data.source_code} > <span style={{ padding: '1%', backgroundColor: 'lightgrey', margin: '0% 0.5%' }}> Source Code </span> </a>
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