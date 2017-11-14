import React from 'react';
import ImageSlider from './ImageSlider';
import MenuBar from './menuBar';
import VideoPlayer from './videoSection';

export default () => {
  return (
    <div>
      <MenuBar />
      <ImageSlider />
      <VideoPlayer /> 
    </div>
  )
}