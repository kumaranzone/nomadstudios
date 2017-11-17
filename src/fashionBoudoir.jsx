import React from 'react';
import MultiSlider from './reactSlider';
import VideoPlayer from './videoSection';

const ImagesForSlider1 = [
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/model-2-1.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/model-2-2.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/model-2-3.jpg',
]

export default () => {
  return(
    <div className="col-md-12">
      <MultiSlider sliderImages1={ImagesForSlider1} />
      <VideoPlayer /> 
    </div>
  )
}