import React, { useState } from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import MySkills from './components/MySkills';
import Page404 from './components/Page404';
import './css/index.css';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import MenuIcon from '@material-ui/icons/Menu';

const App = () => {
  const [sideBar, setSideBar] = useState("jeevan");

  function hide() {
    document.querySelector(".class-app-main-div-child-1").classList.remove("active");
    setSideBar("jeevan");
  }

  return (
    <>
      <div className="class-app-main-div">
        {/* DIV - 1 Side Bar */}

        <div className="class-app-main-div-child-1">

          {/* Nav - 1 For Homepage */}
          <NavLink to="/" className="nav-link" onClick={hide} >
            <div className="side-nav">
              <div> <HomeIcon style={{ color: 'black', fontSize: '2.5rem' }} /> </div>
              <div> <span className="nav-link"> Home </span> </div>
            </div>
          </NavLink>

          {/* Nav - 2 For skills */}
          <NavLink to="/skills" className="nav-link" onClick={hide} >
            <div className="side-nav">
              <div> <DateRangeOutlinedIcon style={{ color: 'black', fontSize: '2.5rem' }} /> </div>
              <div> <span className="nav-link"> Skills </span> </div>
            </div>
          </NavLink>

          {/* Nav - 3 For projects */}
          <NavLink to="/projects" className="nav-link" onClick={hide} >
            <div className="side-nav">
              <div> <ListAltIcon style={{ color: 'black', fontSize: '2.5rem' }} /> </div>
              <div> <span className="nav-link"> My Projects </span> </div>
            </div>
          </NavLink>

          {/* Nav - 4 For email */}
          <NavLink to="/emailme" className="nav-link" onClick={hide} >
            <div className="side-nav">
              <div> <ContactMailIcon style={{ color: 'black', fontSize: '2.5rem' }} /> </div>
              <div> <span className="nav-link"> Email me </span> </div>
            </div>
          </NavLink>

          {/* Nav - 5 For contact */}
          <NavLink to="/contact" className="nav-link" onClick={hide} >
            <div className="side-nav">
              <div> <ContactMailIcon style={{ color: 'black', fontSize: '2.5rem' }} /> </div>
              <div> <span className="nav-link"> Contact me </span> </div>
            </div>
          </NavLink>
        </div>

        {/* DIV - 2 main workspace */}

        <div className="class-app-main-div-child-2">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/portfolio" component={HomePage} />
            <Route exact path="/skills" component={MySkills} />
            <Route exact path="/*" component={Page404} />
          </Switch>
        </div>



      </div>
      <div className="hamburger" onClick={() => {
        if (sideBar == "jeevan") {
          document.querySelector(".class-app-main-div-child-1").classList.add("active");
          setSideBar("mrityu");
        }
        else {
          document.querySelector(".class-app-main-div-child-1").classList.remove("active");
          setSideBar("jeevan");
        }
      }
      }> <MenuIcon style={{ fontSize: '4rem', border: '0.1rem solid black', backgroundColor: 'white', borderRadius: '0.5rem' }} /> </div>

    </>
  );
}
export default App;