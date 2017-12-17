import React from 'react';
import ImageSlider from './ImageSlider';
import MenuBar from './menuBar';
import VideoPlayer from './videoSection';

export default () => {
  return (
    <div>
      <MenuBar />
      <ImageSlider />
      <div className="col-md-6" style={{margin: '0 auto', float: 'initial'}}><VideoPlayer url="https://www.youtube.com/embed/BN4e9uaE9b0" /></div>
    </div>
  )
}