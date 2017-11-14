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
      <div id="imageCarousel" className="carousel slide" data-ride="carousel" data-interval="10000">
        <ol className="carousel-indicators">
          <li data-target="#imageCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#imageCarousel" data-slide-to="1"></li>
          <li data-target="#imageCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner"  role="listbox">
          <div className="item">
              <div
                style={{background:'url("https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/slider/sunflower.jpg") no-repeat center'}}
                // src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/slider/baby1.jpg"
                className="Slider"
                />
            </div> 
          <div className="item active">
            <div 
              // src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/slider/couple-yw.jpg"
              style={{background:'url("https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/slider/couple-yw.jpg") no-repeat center'}}
              className="Slider"
              />
          </div>
          <div className="item">
            <div
              // src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/slider/model-ly.jpg"
              style={{background:'url("https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/slider/eagle.jpg") no-repeat top'}}
              className="Slider"
              />
          </div>
          <div className="item">
            <div
              // src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/slider/baby2.jpg"
              style={{background:'url("https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/slider/couplered.jpg") no-repeat top'}}
              className="Slider"
              />
          </div>

          <div className="item">
            <div
              // src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/slider/baby2.jpg"
              style={{background:'url("https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/slider/watch.jpg") no-repeat center'}}
              className="Slider"
              />
          </div>

           <div className="item">
            <div
              // src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/slider/baby2.jpg"
              style={{background:'url("https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/slider/baby2.jpg") no-repeat center'}}
              className="Slider"
              />
          </div>

          <div className="item">
            <div
              style={{background:'url("https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/slider/ring.jpg") no-repeat center',
            }}
              //src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/slider/model-2p.jpg"
              className="Slider"
              />
          </div> 
          {/* <div className="item">
            <div
              style={{background:'url("https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/slider/.jpg") no-repeat center',
              }}
              // src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/slider/model-snak.jpg"
             className="Slider"
              />
          </div> */}
          
          <div className="item">
            <div
              style={{background:'url("https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/slider/model-2p.jpg") no-repeat center',
            }}
              //src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/slider/model-2p.jpg"
              className="Slider"
              />
          </div> 
          {/* <div className="item">
            <div
              // src="https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/slider/baby2.jpg"
              style={{background:'url("https://s3-us-west-1.amazonaws.com/www.nomadstudios.in/img/slider/couple5.jpg") no-repeat center'}}
              className="Slider"
              />
          </div> */}

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