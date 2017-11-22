import React from 'react';
import './App.scss';
export default (props) => {
  const {url} = props;
  return (
    <section className="content-section videoSection">
      <video
        className="embed-responsive-item"
        muted
        autoPlay
        playsInline
        controls
        controlsList="nodownload"
        height="35%"
        width="80%">
        <source
          src={url}
          type="video/mp4"/>
      </video>
    </section>
  )
}