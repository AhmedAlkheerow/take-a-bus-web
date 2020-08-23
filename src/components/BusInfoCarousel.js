import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import BusInfoContainer from './BusInfoContainer';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class BusInfoCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  onKeyDown(event) {
    switch (event.key) {
      case 'ArrowLeft':
        this.slider.slickPrev();
        break;
      case 'ArrowRight':
        this.slider.slickNext();
        break;
      default:
        break;
    }
  }

  render() {
    const settings = {
      dots: false,
      speed: 800,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <div className="grid grid-cols-9 gap-4 mt-10 items-center justify-around">
        <div className="col-span-1 flex justify-center">
          <PreviousArrow
            handlePrevByKey={this.onKeyDown}
            handlePrev={this.previous}
          />
        </div>
        <div className="col-span-7">
          <Slider
            ref={(c) => (this.slider = c)}
            {...settings}
            className="rounded-lg boxshadow"
          >
            <BusInfoContainer
              key={1}
              fillHeart={false}
              dontShowTakeIt={false}
            />
            <BusInfoContainer
              key={2}
              fillHeart={false}
              dontShowTakeIt={false}
            />
            <BusInfoContainer
              key={3}
              fillHeart={false}
              dontShowTakeIt={false}
            />
            <BusInfoContainer
              key={4}
              fillHeart={false}
              dontShowTakeIt={false}
            />
          </Slider>
        </div>
        <div className="flex justify-center">
          <NextArrow handleNextByKey={this.onKeyDown} handleNext={this.next} />
        </div>
      </div>
    );
  }
}

const NextArrow = ({ handleNext, handleNextByKey }) => {
  return (
    <div
      onKeyDown={handleNextByKey}
      onClick={handleNext}
      className="btn secondary w-16 h-16 bg-blue-500 rounded-full flex flex-col justify-center items-center boxshadow border-0 cursor-pointer"
    >
      <IoIosArrowForward className="text-primary w-12 h-12" />
    </div>
  );
};

NextArrow.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handleNextByKey: PropTypes.func.isRequired,
};

const PreviousArrow = ({ handlePrev, handlePrevByKey }) => {
  return (
    <div
      onKeyDown={handlePrevByKey}
      onClick={handlePrev}
      className="btn secondary w-16 h-16 bg-blue-500 rounded-full flex flex-col justify-center items-center boxshadow border-0 cursor-pointer"
    >
      <IoIosArrowBack className="text-primary w-12 h-12" />
    </div>
  );
};

PreviousArrow.propTypes = {
  handlePrev: PropTypes.func.isRequired,
  handlePrevByKey: PropTypes.func.isRequired,
};
