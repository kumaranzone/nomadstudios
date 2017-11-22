import React from 'react';
import MultiSlider from './reactSlider';
import VideoPlayer from './videoSection';

const preWeddingImages = [
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/wedding/couple1.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/wedding/couple2.jpg',
]

const fashionBoudoirImages = [
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/model-2-1.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/model-2-2.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/model-2-3.jpg',
]

const babyImages = [
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/baby/1.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/baby/3.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/baby/4.jpg',
]
const babyImages1 = [
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/baby/3.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/baby/4.jpg',
]

const productImages = [
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/product/1I1A6660.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/product/1I1A6701.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/product/1I1A6704.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/product/1I1A8102.jpg',
]

const productImages1 = [
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/product/1I1A7124.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/product/1I1A7151.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/product/1I1A7165.jpg',
]

const getImagesForSlider = (props) => {
  const { pathname } = props.location;
  const route = pathname.split('/')[1];
  switch (route) {
    case 'prewedding':
      return { images: preWeddingImages, video:'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/video/Couple.mp4'}
      break;
    case 'fashion-boudoir':
      return { images: fashionBoudoirImages, video:'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/video/baby.mp4'}
      break;
    case 'baby':
      return { images: babyImages, video:'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/video/baby_original.mp4'}
      break;
    case 'product':
      return { images: productImages, images1:productImages1, video: 'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/video/baby_original.mp4'}
  }
}
export default (props) => {
  const items = getImagesForSlider(props);
  return (
    <div className="col-md-12">
      <MultiSlider sliderImages1={items.images} sliderImages2={items.images1 ? items.images1 : null } />
      <VideoPlayer url={items.video} /> 
    </div>
  )
}