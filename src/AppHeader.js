import React from 'react';
import './App.scss';
export default () => {
  return (
    <nav className="navbar navbar-default" >
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
         <a className="navbar-brand logo" href="#"><span>Nomad Studios</span></a>
        </div>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="nav navbar-nav navbar-right navBarButtons">
            <li>
                <a className="nav-link" href="#">About</a>
            </li>
            <li >
                <a className="nav-link" href="#">Services</a>
            </li>
            <li >
                <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}