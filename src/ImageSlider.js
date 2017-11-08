import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import './App.scss';

/**
 * A simple example of `ImageSlider`, with three images and icons
 * provided. The selected `ImageSlider` is determined by application
 * state (for instance, by the URL).
 */
class ImageSlider extends Component {
  state = {
    selectedIndex: 0
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <div id="imageCarousel" class="carousel slide" data-ride="carousel" data-interval="4000">
        <ol className="carousel-indicators">
          <li data-target="#imageCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#imageCarousel" data-slide-to="1"></li>
          <li data-target="#imageCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner"  role="listbox">
          <div className="item active">
            <img
              src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/model1/1.jpg"
              className="Slider"
              />
            <div className="carousel-caption d-none d-md-block">
              <h3>PORTRAIT</h3>
            </div>
          </div>
          <div className="item">
            <img
              src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/model1/4.jpg"
              className="Slider"
              />
            <div className="carousel-caption d-none d-md-block">
              <h3>PORTRAIT</h3>
            </div>
          </div>
        </div>
        <a className="left carousel-control" href="#imageCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#imageCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default ImageSlider;