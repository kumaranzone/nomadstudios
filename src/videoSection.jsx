import React from 'react';
import './App.scss';
export default () => {
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
          src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/video/baby_original.mp4"
          type="video/mp4"/>
      </video>
    </section>
  )
}