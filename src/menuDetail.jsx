import React from 'react';
import MultiSlider from './reactSlider';
import VideoPlayer from './videoSection';

const preWeddingImages = [
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/wedding/couple4.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/wedding/couple2.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/wedding/couple21.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/wedding/couple1.jpg',
]

const preWeddingImages1 = [
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/wedding/couple21.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/wedding/couple1.jpg',
]

const fashionBoudoirImages = [
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/boudoir/1I1A8013.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/boudoir/1I1A8025.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/model-2-1.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/model-2-2.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/model-2-3.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/boudoir/1I1A6857.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/boudoir/1I1A6568.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/boudoir/1I1A6614.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/boudoir/1I1A6625.jpg',
  
]

const fashionBoudoirImages1 = [
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/boudoir/1I1A6857.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/boudoir/1I1A6568.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/boudoir/1I1A6614.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/boudoir/1I1A6625.jpg',
]

const babyImages = [
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/baby/1.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/baby/3.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/baby/4.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/baby/3.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/baby/4.jpg',
]
const babyImages1 = [
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/baby/3.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/baby/4.jpg',
]

const productImages1 = [
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/product/1I1A6660.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/product/1I1A6701.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/product/1I1A6704.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/product/1I1A8102.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/boudoir/1I1A6897.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/boudoir/1I1A6897-2.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/product/1I1A7124.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/product/1I1A7151.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/product/1I1A7165.jpg',
]

const productImages = [
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/boudoir/1I1A6897.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/boudoir/1I1A6897-2.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/product/1I1A7124.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/product/1I1A7151.jpg',
  'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/product/1I1A7165.jpg',
]

const getImagesForSlider = (props) => {
  const { pathname } = props.location;
  const route = pathname.split('/')[1];
  switch (route) {
    case 'prewedding':
      return { images: preWeddingImages, images1:preWeddingImages1, video:'https://www.youtube.com/embed/5zLLBCNBDV4'}
      break;
    case 'fashion-boudoir':
      return { images: fashionBoudoirImages, images1: fashionBoudoirImages1, video:'https://www.youtube.com/embed/Uq3_1EIMV9U'}
      break;
    case 'baby':
      return { images: babyImages, video:'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/video/baby_original.mp4'}
      break;
    case 'product':
      return { images: productImages, images1:productImages1, video:'https://www.youtube.com/embed/JQmrwWuwU4o'}
  }
}
export default (props) => {
  const items = getImagesForSlider(props);
  return (
    <div className="col-md-12 col-sm-10">
      <div className="row">
        <div className="col-md-12">
          <MultiSlider sliderImages1={items.images} sliderImages2={items.images1 ? items.images1 : null } />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6" style={{margin: '0 auto', float: 'initial'}}>
          <VideoPlayer url={items.video} />
        </div>
      </div>
    </div>
  )
}