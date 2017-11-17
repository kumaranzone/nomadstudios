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
            
            <li href="#item-1" onClick="window.location='detail/prewedding.html'" className="list-group-item list-item-text" data-toggle="collapse">Pre-wedding Photography</li>

            <li href="#item-3" class="list-group-item list-item-text" data-toggle="collapse">Product Photography</li>


            <li href="#item-6" onClick="window.location='detail/baby.html'" className="list-group-item list-item-text" data-toggle="collapse">Baby - Precious Memories</li>
            
            <li href="#item-7" class="list-group-item list-item-text" data-toggle="collapse">Travel and Conceptual</li>
            
            </ul>
          </div>
          <div class="btn-group-sm" role="group" aria-label="..." style={{padding: 5}}>
            <button type="button" class="btn btn-default" onClick={(e) => this.redirectToRoute(e, '/fashion-boudoir')}>Fashion and Boudoir</button>
            <button type="button" class="btn btn-default">Baby</button>
            <button type="button" class="btn btn-default">Product</button>
            <button type="button" class="btn btn-default">Pre-Wedding</button>
            {/* <button type="button" class="btn btn-default">Travel</button> */}
        </div>
    </div>
    )
  }
}

export default withRouter (MenuBar);