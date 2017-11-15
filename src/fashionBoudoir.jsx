import React from 'react';
import MultiSlider from './reactSlider';
import VideoPlayer from './videoSection';

export default () => {
  return(
    <div className="col-md-12">
      <MultiSlider />
      <VideoPlayer /> 
    </div>
  )
}