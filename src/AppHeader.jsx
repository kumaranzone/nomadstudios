import React from 'react';
import {
  Link
} from 'react-router-dom';
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
         <a className="navbar-brand logo" href="/"><span>Nomad Studios</span></a>
        </div>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="nav navbar-nav navbar-right navBarButtons">
            <li>
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li >
                <Link className="nav-link" to="#">Services</Link>
            </li>
            <li >
                <Link className="nav-link" to="#">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}