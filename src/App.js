import React, { useState } from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import MySkills from './components/MySkills';
import Page404 from './components/Page404';
import './css/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCode, faProjectDiagram, faIdCard, faBars } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  {
    icon: faHome,
    to: ""
  }, {
    icon: faCode,
    to: "skills"
  }, {
    icon: faProjectDiagram,
    to: "projects"
  }, {
    icon: faIdCard,
    to: "email"
  }, {
    icon: faIdCard,
    to: "contact me"
  },
];


const App = () => {
  // const [sideBar, setSideBar] = useState("jeevan");

  const hideShow = () => {
    document.querySelector(".class-app-main-div-child-1").classList.toggle("active");
    // if (sideBar == "jeevan") {
    //   document.querySelector(".class-app-main-div-child-1").classList.add("active");
    //   setSideBar("mrityu");
    // }
    // else {
    //   document.querySelector(".class-app-main-div-child-1").classList.remove("active");
    //   setSideBar("jeevan");
    // }
  };

  // function hide() {
  //   document.querySelector(".class-app-main-div-child-1").classList.remove("active");
  //   // setSideBar("jeevan");
  // }

  return (
    <>


      <div className="class-app-main-div">

        {/* DIV - 1 Side Bar */}

        <div className="class-app-main-div-child-1">
          {/* NavLinks from json data */}

          {navLinks.map((data) => {
            return (
              <>
                <NavLink to={`/${data.to}`} className="nav-link" onClick={hideShow} >
                  <div className="side-nav">
                    <div> <FontAwesomeIcon style={{ color: 'black', fontSize: '2rem' }} icon={data.icon} /> </div>
                    <div> <span className="nav-link"> {data.to === "" ? "Home" : data.to} </span> </div>
                  </div>
                </NavLink>
              </>
            );
          })}

          <button onClick={hideShow} className="times"> &times; </button>
        </div>

        {/* DIV - 2 main workspace */}

        <div className="class-app-main-div-child-2">
          <div class="my-svg"></div>
          <div class="my-svg2"></div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/portfolio" component={HomePage} />
            <Route exact path="/skills" component={MySkills} />
            <Route exact path="/*" component={Page404} />
          </Switch>
        </div>
      </div>

      <div className="hamburger" onClick={hideShow}> <FontAwesomeIcon icon={faBars} style={{ color: 'white', fontSize: '4.2rem', border: '0.1rem solid white', borderRadius: '0.1rem', padding: '15%' }} /> </div>

    </>
  );
}
export default App;