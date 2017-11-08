import React from 'react';
import './App.scss';
export default() => {
  return (
    <section className="content-section videoSection">
      <video
        muted
        autoPlay
        playsInline
        controls
        controlsList="nodownload"
        width="60%"
        height="60%">
        <source
          src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/video/baby.mp4"
          type="video/mp4"/>
      </video>
    </section>
  )
}