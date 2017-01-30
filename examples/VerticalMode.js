import React, { Component } from 'react'
import Slider from '../src/slider'

export default class VerticalMode extends Component {
  render() {
    const settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      vertical: true,
      height: 500,
    };
    return (
      <div>
        <h2>Vertical Mode</h2>
        <Slider {...settings}>
          <div style={{height: 'auto'}}><h3 style={{ height: '300px' }}>1</h3></div>
          <div style={{height: 'auto'}}><h3 style={{ height: '200px' }}>1</h3></div>
          <div style={{height: 'auto'}}><h3 style={{ height: '800px' }}>1</h3></div>
          <div style={{height: 'auto'}}><h3 style={{ height: '300px' }}>1</h3></div>
          <div style={{height: 'auto'}}><h3 style={{ height: '200px' }}>1</h3></div>
          <div style={{height: 'auto'}}><h3 style={{ height: '500px' }}>1</h3></div>
          <div style={{height: 'auto'}}><h3 style={{ height: '300px' }}>1</h3></div>
          <div style={{height: 'auto'}}><h3 style={{ height: '400px' }}>1</h3></div>
        </Slider>
      </div>
    );
  }
}
