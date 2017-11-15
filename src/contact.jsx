import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import './App.scss';

const sendEmail = (e) => {
  e.preventDefault();
  window.location.href = "mailto:nomadstudios9@gmail.com?body=Regarding Business&subject=Contacting for business";
}
export default () => {
  return (
      <div className="container">
        <div className="row">
            <div className="contact-section">
              <div className="card">
               <p>For Business related queries, please contact</p>
                <img src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/ganesh.jpg" alt="Avatar" />
                <div className="content">
                  <h2><b>Ganesh Krishnan</b></h2>
                  <p>JP Nagar - Bangalore</p>
                  <p><i className="fa fa-phone" aria-hidden="true"></i> &nbsp;<b>9902326052</b></p>
                  <p><i className="fa fa-envelope" aria-hidden="true" onClick={()=>sendEmail}></i> &nbsp; <a  onClick={(e)=>sendEmail(e)}>nomadstudios9@gmail.com</a></p>
                </div>
              </div>
            </div>
        </div>
      </div>
  )
}