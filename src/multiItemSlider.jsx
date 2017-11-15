import React from 'react';
import './multiItemSlider.scss';

export default (props) => {
  return(
    <div>
      <div className="col-md-8">
        <div className="carousel slide" id="carousel-tilenav" data-interval="2000">
          <div className="carousel-inner">

              <div className="item active">
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <a href="#"><img src="http://placehold.it/500/0054A6/fff/&text=1" className="img-responsive" /></a>
                </div>
              </div>

              <div className="item">
               <div className="col-xs-12 col-sm-6 col-md-2">
                  <a href="#"><img src="http://placehold.it/500/002040/eeeeee&text=4" className="img-responsive" /></a>
               </div>
            </div>

            <div className="item">
               <div className="col-xs-12 col-sm-6 col-md-2">
                  <a href="#"><img src="http://placehold.it/500/0054A6/fff/&text=5" className="img-responsive" /></a>
               </div>
            </div>

            <div className="item">
               <div className="col-xs-12 col-sm-6 col-md-2">
                  <a href="#"><img src="http://placehold.it/500/002d5a/fff/&text=6" className="img-responsive" /></a>
               </div>
            </div>

            <a className="left carousel-control" href="#carousel-tilenav" data-slide="prev"><i className="glyphicon glyphicon-chevron-left"></i></a>
            <a className="right carousel-control" href="#carousel-tilenav" data-slide="next"><i className="glyphicon glyphicon-chevron-right"></i></a>

          </div>
        </div>
      </div>
    </div>
  )
}