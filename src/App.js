import React from 'react';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Page404 from './components/Page404';
import './css/index.css';
import HomeIcon from '@material-ui/icons/Home';


const App = () => {
  return (
    <>
      <div className="class-app-main-div">
        {/* DIV - 1 Side Bar */}

        <div className="class-app-main-div-child-1">
          <div className="side-nav">
            <div> <HomeIcon style={{ color: 'white' }} fontSize="large" size={25} /> </div>
            <div> <NavLink to="/" className="nav-link"> Home </NavLink> </div>
          </div>
          <div className="side-nav">
            <div> <HomeIcon style={{ color: 'white' }} fontSize="large" size={25} /> </div>
            <div> <NavLink to="/" className="nav-link"> Home </NavLink> </div>
          </div>
          <div className="side-nav">
            <div> <HomeIcon style={{ color: 'white' }} fontSize="large" size={25} /> </div>
            <div> <NavLink to="/" className="nav-link"> Home </NavLink> </div>
          </div>
          <div className="side-nav">
            <div> <HomeIcon style={{ color: 'white' }} fontSize="large" size={25} /> </div>
            <div> <NavLink to="/" className="nav-link"> Home </NavLink> </div>
          </div>
          <div className="side-nav">
            <div> <HomeIcon style={{ color: 'white' }} fontSize="large" size={25} /> </div>
            <div> <NavLink to="/" className="nav-link"> Home </NavLink> </div>
          </div>
        </div>

        {/* DIV - 2 main workspace */}

        <div className="class-app-main-div-child-2">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/*" component={Page404} />
          </Switch>
        </div>
      </div>
    </>
  );
}
export default App;