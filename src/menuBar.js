import React from 'react';
import './App.scss';

export default class MenuBar extends React.Component {

  render(){
    return(
      <div id="test" class="vmenu">
      <ul class="list-group">

        <li href="#item-2" onClick="window.location='detail/boudoir.html'" class="list-group-item list-item-text" data-toggle="collapse">Fashion and Boudoir</li>
        
        <li href="#item-1" onClick="window.location='detail/prewedding.html'" class="list-group-item list-item-text" data-toggle="collapse">Pre-wedding Photography</li>

        <li href="#item-3" class="list-group-item list-item-text" data-toggle="collapse">Product Photography</li>


        <li href="#item-6" onClick="window.location='detail/baby.html'" class="list-group-item list-item-text" data-toggle="collapse">Baby - Precious Memories</li>
        
        <li href="#item-7" class="list-group-item list-item-text" data-toggle="collapse">Travel and Conceptual</li>
        
        </ul>
    </div>
    )
  }
}