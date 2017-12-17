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
        <img src={src} alt="slide-1-img-3" className="img-responsive sliderHeight" />
      </div>
    )
  }
  render(){
    const {sliderImages1, sliderImages2} = this.props;
   
    const settings1 = {
      infinite: true,
      slidesToShow: 2,
      autoplay:true,
      autoplaySpeed: 4000,
      slidesToScroll: 2,
      waitForAnimate:true,
    };
    const settings2 = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      waitForAnimate:true,
      dots:false,
    };
    return (
      <div className="slider-container screen-flow" style={{margin: '0 auto', float: 'initial'}}>
       { sliderImages1 && <Slider {...settings2}>
        { this.SliderItems(sliderImages1) }
        </Slider>
       }
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
      </div>
    );
  }
}
export default MultiSlider;