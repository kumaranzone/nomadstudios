import React from 'react';
import Slider from 'react-slick';
import './App.scss';

class MultiSlider extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
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
      // dots: true,
      infinite: true,
      // speed: 7000,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
     //  adaptiveHeight: true,
    };
    return (
      <div className="slider-container">
        <Slider {...settings1}>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <a href="#"><img src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/model-1-1.jpg" alt="slide-1-img-1" className="img-responsive" /></a>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3">
            <a href="#"><img src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/model-1-4.jpg" alt="slide-1-img-2" className="img-responsive" /></a>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3">
            <a href="#"><img src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/model-1-5.jpg" alt="slide-1-img-3" className="img-responsive" /></a>
          </div>

          {/* <div>
            <a href="#"><img src="http://placehold.it/300/002d5a/fff/&text=6" className="img-responsive" /></a>
          </div> */}
        </Slider>
        <br/>
        <Slider {...settings2}>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <a href="#"><img src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/model-2-1.jpg" className="img-responsive" /></a>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3">
            <a href="#"><img src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/model-2-2.jpg" className="img-responsive" /></a>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3">
            <a href="#"><img src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/menu/model-2-3.jpg" className="img-responsive" /></a>
          </div>

          {/* <div className="col-xs-12 col-sm-6 col-md-3">
            <a href="#"><img src="http://placehold.it/300/002d5a/fff/&text=6" className="img-responsive" /></a>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-2">
            <a href="#"><img src="http://placehold.it/300/002d5a/fff/&text=7" className="img-responsive" /></a>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-2">
            <a href="#"><img src="http://placehold.it/300/002d5a/fff/&text=8" className="img-responsive" /></a>
          </div> */}
        </Slider>
      </div>
    );
  }
}
export default MultiSlider;