import React from 'react';
import ImageSlider from './ImageSlider';
import MenuBar from './menuBar';
import VideoPlayer from './videoSection';

export default () => {
  return (
    <div>
      <MenuBar />
      <ImageSlider />
      <VideoPlayer url="https://www.youtube.com/embed/BN4e9uaE9b0" /> 
    </div>
  )
}