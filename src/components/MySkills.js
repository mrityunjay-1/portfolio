import React from 'react';
import '../css/myskills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSchool, faUniversity } from '@fortawesome/free-solid-svg-icons'
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
    icon: faSchool,
    class: "Matriculation",
    percentage: "Percentage - 76.8%",
    school: "NBS Mills High School, Bagaha - Bihar",
    year: 2015
  }, {
    icon: faSchool,
    class: "Intermidiate in Science",
    percentage: "Percentage - 75.4%",
    school: "Munshi Singh College, Motihari - Bihar",
    year: 2017
  }, {
    icon: faUniversity,
    class: "B.Tech. - (Computer Science & Engineering)",
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
                    <div class="skills-div">
                      <div style={{ fontSize: '2rem' }}>
                        <FontAwesomeIcon icon={data.icon1} /> <span> {data.skill1} </span> <span style={{ float: "right", fontSize: '1.4rem', color: 'grey' }}> {data.value1}% </span>
                        <br /> <div style={{ width: '100%', height: '1rem', border: '0.1rem solid grey', borderRadius: '2rem' }} > <div style={{ width: `${data.value1}%`, height: '100%', backgroundColor: 'green' }}></div> </div>
                      </div>
                      <div style={{ fontSize: '2.2rem' }}>
                        <FontAwesomeIcon icon={data.icon2} /> <span> {data.skill2} </span> <span style={{ float: "right", fontSize: '1.4rem', color: 'grey' }}> {data.value1}% </span>
                        <br /> <div style={{ width: '100%', height: '1rem', border: '0.1rem solid grey', borderRadius: '2rem' }} > <div style={{ width: `${data.value2}%`, height: '100%', backgroundColor: 'green' }}></div> </div></div>
                    </div>
                  </>
                );
              })
            }


            <div style={{ width: '100%', display: 'flex', flexFlow: 'column', padding: '7% 0%' }}>
              {/* My Education Heading */}

              <div style={{ width: '100%', fontSize: '1.4em' }}>
                <h1 style={{ textAlign: 'center', color: 'brown' }}><FontAwesomeIcon icon={faGraduationCap} /> My Education </h1>
              </div>

              <hr style={{ margin: '1% 0%' }} /> <br /><br />
              {/* My Education Body */}

              <div className="my-education">
                {
                  my_education.map((data) => {
                    return (
                      <>
                        <div>
                          <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', paddingTop: '2%' }}>
                            <span style={{ border: '0.3rem solid blue', padding: '3%', color: 'white', backgroundColor: 'brown', borderRadius: '6rem', fontSize: '2.5rem' }}> <FontAwesomeIcon icon={data.icon} /> </span> <br />
                            <span style={{ textShadow: '0.1rem 0.1rem 0.3rem lightgrey', fontSize: '2.2rem', fontWeight: 'bold', color: 'brown', textAlign: 'center' }}> {data.class} </span> <br />
                            <span style={{ textAlign: 'center', fontSize: '1.4rem', color: 'lightgrey' }}> {data.school} </span> <br />
                          </div>
                          <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
                            <span> {data.percentage} </span> <br />
                            <span style={{ fontSize: '1rem', color: 'grey' }}> {data.year} </span>
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