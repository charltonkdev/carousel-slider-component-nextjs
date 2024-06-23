'use client'
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { fetchPixabayImages } from './utils/fetchPixabayImages';

class CarouselSlider extends Component {
  state = {
    images: [],
  };

  async componentDidMount() {
    const images = await fetchPixabayImages();
    this.setState({ images });
  }

  render() {
    const { images } = this.state;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '30px',
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          },
        },
      ],
    };

    return (
      <div className="w-full mx-auto px-4 py-8">
        {images.length > 0 ? (
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="px-2">
                <div
                  className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-md hover:shadow-xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                  alt={`Slide ${index}`}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default CarouselSlider;