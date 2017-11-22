import React from 'react';
import ImageSlider from './ImageSlider';
import MenuBar from './menuBar';
import VideoPlayer from './videoSection';

export default () => {
  return (
    <div>
      <MenuBar />
      <ImageSlider />
      <VideoPlayer url="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/video/baby.mp4" /> 
    </div>
  )
}