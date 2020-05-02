import React, { Component } from 'react';

export default class ColorSelector extends Component {
  
  
  
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}