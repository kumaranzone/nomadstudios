import React, {PropTypes} from 'react';
import {withRouter} from 'react-router-dom';
import './App.scss';

class MenuBar extends React.Component {
  redirectToRoute = (event, url) => {
    event.preventDefault();
    this.props.history.push(url)
  }

  render(){
    return(
      <div>
        <div id="test" className="vmenu">
          <ul class="list-group">

            <li href="#item-2" onClick={(e) => this.redirectToRoute(e, '/fashion-boudoir')} className="list-group-item list-item-text" data-toggle="collapse">Fashion and Boudoir</li>
            

            <li href="#item-3" onClick={(e) => this.redirectToRoute(e, '/product')} class="list-group-item list-item-text" data-toggle="collapse">Product Photography</li>


            <li href="#item-6" onClick={(e) => this.redirectToRoute(e, '/baby')} className="list-group-item list-item-text" data-toggle="collapse">Baby - Precious Memories</li>
            
            <li href="#item-1" onClick={(e) => this.redirectToRoute(e, '/prewedding')} className="list-group-item list-item-text" data-toggle="collapse">Pre-wedding Photography</li>
           
            <li href="#item-7" class="list-group-item list-item-text" data-toggle="collapse">Travel and Conceptual</li>
            
            </ul>
          </div>
          {/* <div className="btn-group-sm" role="group" aria-label="..." style={{padding: 5}}>
            <button type="button" class="btn btn-default" onClick={(e) => this.redirectToRoute(e, '/fashion-boudoir')}>Fashion and Boudoir</button>
            <button type="button" class="btn btn-default" onClick={(e) => this.redirectToRoute(e, '/baby')}>Baby</button>
            <button type="button" class="btn btn-default" onClick={(e) => this.redirectToRoute(e, '/product')}>Product</button>
            <button type="button" class="btn btn-default" onClick={(e) => this.redirectToRoute(e, '/prewedding')}>Pre-Wedding</button>
        </div> */}
        <ul class="nav nav-pills">
          <li role="presentation" onClick={(e) => this.redirectToRoute(e, '/fashion-boudoir')}><a href="#">Boudoir</a></li>
          <li role="presentation" onClick={(e) => this.redirectToRoute(e, '/baby')}><a href="#">Baby</a></li>
          <li role="presentation" onClick={(e) => this.redirectToRoute(e, '/product')}><a href="#">Product</a></li>
          <li role="presentation" onClick={(e) => this.redirectToRoute(e, '/prewedding')}><a href="#">Pre-Wedding</a></li>
        </ul>
    </div>
    )
  }
}

export default withRouter (MenuBar);