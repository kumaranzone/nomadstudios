import React from 'react';
import Slider from 'react-slick';
import './App.scss';

class MultiSlider extends React.Component {
  constructor(props){
    super(props);
  }

  SliderItems = (sliderImages) => {
    if (!sliderImages) return;
    return sliderImages.map((src)=>
      <div>
        <a href="#"><img src={src} alt="slide-1-img-3" className="img-responsive" /></a>
      </div>
    )
  }
  render(){

    const ImagesForSlider1 = [
      'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/model-2-1.jpg',
      'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/model-2-2.jpg',
      'https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/model-2-3.jpg',
    ]
    const settings1 = {
      //dots: true,
      //speed: 500,
      infinite: true,
      slidesToShow: 2,
      autoplay:true,
      autoplaySpeed: 4000,
      slidesToScroll: 1,
    };
    const settings2 = {
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div className="slider-container">
       {/*  <Slider {...settings1}>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <a href="#"><img src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/model-1-1.jpg" alt="slide-1-img-1" className="img-responsive" /></a>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3">
            <a href="#"><img src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/model-1-4.jpg" alt="slide-1-img-2" className="img-responsive" /></a>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3">
            <a href="#"><img src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/model-1-5.jpg" alt="slide-1-img-3" className="img-responsive" /></a>
          </div>

          <div>
            <a href="#"><img src="http://placehold.it/300/002d5a/fff/&text=6" className="img-responsive" /></a>
          </div> 
        </Slider>*/}
        <Slider {...settings2}>
          { this.SliderItems(ImagesForSlider1) }
        </Slider>
      </div>
    );
  }
}
export default MultiSlider;