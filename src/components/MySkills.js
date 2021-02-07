import React from 'react';
import '../css/myskills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faReact, faJsSquare, faNodeJs, faPhp, faLaravel } from '@fortawesome/free-brands-svg-icons';

// my skills - json data
const my_skills = [
  {
    icon1: faHtml5,
    skill1: "HTML",
    value1: 70,
    icon2: faCss3Alt,
    skill2: "css",
    value2: 70
  }, {
    icon1: faJsSquare,
    skill1: "Javascript",
    value1: 70,
    icon2: faReact,
    skill2: "React Js",
    value2: 70
  }, {
    icon1: faNodeJs,
    skill1: "Node Js",
    value1: 70,
    icon2: faPhp,
    skill2: "php",
    value2: 70
  }, {
    icon1: faLaravel,
    skill1: "Laravel",
    value1: 70,
    icon2: faReact,
    skill2: "React native",
    value2: 70
  },
];

// my education - json data
const my_education = [
  {
    class: "class - X",
    percentage: "76.8%",
    school: "NBS Mills High School, Bagaha - Bihar",
    year: 2015
  }, {
    class: "class - XII",
    percentage: "75.4%",
    school: "Munshi Singh College, Motihari - Bihar",
    year: 2017
  }, {
    class: "B.Tech. Computer Science & Engineering",
    percentage: "CGPA - 7.52",
    school: "Lovely Professional University, Phagwara - Punjab",
    year: 2022
  }
];


const MySkills = () => {
  return (
    <>
      <div>
        <div className="myskills-main-div">
          <div className="myskills-main-div-header">
            <p style={{ textAlign: 'center', color: 'black' }} > why choose me </p> <br />
            <h1 style={{ textAlign: 'center' }}> My Expertise Area </h1>
          </div>
          <hr style={{ margin: '1% 0%' }} />

          <div className="myskills-main-div-body">
            {/* Skills Divs */}
            {
              my_skills.map((data) => {
                return (
                  <>
                    <div>
                      <div style={{ width: '45%', fontSize: '2.2rem' }}>
                        <FontAwesomeIcon icon={data.icon1} /> <span> {data.skill1} </span> <span style={{ float: "right", fontSize: '1.5rem', color: 'grey' }}> {data.value1}% </span>
                        <br /> <meter min="0" max="100" value={data.value1} style={{ width: "100%" }} ></meter>
                      </div>
                      <div style={{ width: '45%', fontSize: '2.2rem' }}>
                        <FontAwesomeIcon icon={data.icon2} /> <span> {data.skill2} </span> <span style={{ float: "right", fontSize: '1.5rem', color: 'grey' }}> {data.value1}% </span>
                        <br /> <meter min="0" max="100" value={data.value2} style={{ width: "100%" }} ></meter>
                      </div>
                    </div>
                  </>
                );
              })
            }


            <div style={{ width: '100%', display: 'flex', flexFlow: 'column', paddingTop: '4%' }}>
              {/* My Education Heading */}

              <div style={{ width: '100%', fontSize: '1.4em' }}>
                <h1 style={{ textAlign: 'center', color: 'brown' }}><FontAwesomeIcon icon={faGraduationCap} /> My Education </h1>
              </div>

              <hr style={{ margin: '1% 0%' }} />
              {/* My Education Body */}

              <div className="my-education">
                {
                  my_education.map((data) => {
                    return (
                      <>
                        <div className="class-x">
                          <div>
                            <span style={{ fontSize: '2rem' }}> {data.class} </span> <br /> <br />
                            <span style={{ fontSize: '1.4rem', color: 'grey' }}> {data.school} </span>
                          </div>
                          <div>
                            <span style={{ fontSize: '2rem' }}> {data.percentage} </span> <br /> <br />
                            <span style={{ fontSize: '1.4rem', color: 'grey' }}> {data.year} </span>
                          </div>
                        </div>
                      </>
                    );
                  })
                }

              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;