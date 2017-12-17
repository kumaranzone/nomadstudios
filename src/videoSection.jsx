import React from 'react';
import './App.scss';
export default (props) => {
  const {url} = props;
  return (
    <div>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item"src={url} 
          frameborder="0" gesture="media" allowfullscreen>
        </iframe>
      </div>
  </div>
  )
}