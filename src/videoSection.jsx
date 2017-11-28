import React from 'react';
import './App.scss';
export default (props) => {
  const {url} = props;
  return (
    <div className="col-md-6 col-sm-8" style={{margin: '0 auto', float: 'initial'}}>
      <div className="embed-responsive embed-responsive-4by3">
        <iframe className="embed-responsive-item"src={url} 
          frameborder="0" gesture="media" allowfullscreen>
        </iframe>
      </div>
  </div>
  )
}