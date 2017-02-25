import React, { Component } from 'react'
import Slider from '../src/slider'

export default class VerticalMode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vertical: false,
    };

    this.click = this.click.bind(this);
  }

  click(e) {
    e.preventDefault();
    this.setState({
      vertical: !this.state.vertical,
    });
  }

  render() {
    const { vertical } = this.state;

    const settings = {
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 3000,
      slidesToShow: vertical ? 4 : 3,
      vertical,
      height: 500,
      verticalSwiping: vertical,
      cssEase: 'linear',
      swipeToSlide: true,
      responsive: [{
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      }, {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }]
    };

    return (
      <div>
        <h2>Vertical Mode</h2>
        <a onClick={this.click} href="#">
         Switch modes
        </a>
        <Slider
          key={Math.random().toString(36).substr(2, 10)}
          { ...settings }
        >
          <div style={{height: 'auto'}}><h3 style={{ height: '300px' }}>1</h3></div>
          <div style={{height: 'auto'}}><h3 style={{ height: '200px' }}>2</h3></div>
          <div style={{height: 'auto'}}><h3 style={{ height: '300px' }}>3</h3></div>
          <div style={{height: 'auto'}}><h3 style={{ height: '300px' }}>4</h3></div>
        </Slider>
      </div>
    );
  }
}
          /*
           *<div style={{height: 'auto'}}><h3 style={{ height: '200px' }}>5</h3></div>
           *<div style={{height: 'auto'}}><h3 style={{ height: '200px' }}>6</h3></div>
           *<div style={{height: 'auto'}}><h3 style={{ height: '300px' }}>7</h3></div>
           *<div style={{height: 'auto'}}><h3 style={{ height: '400px' }}>8</h3></div>
           */
