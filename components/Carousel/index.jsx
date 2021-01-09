/* eslint-disable import/no-unresolved */
import React from 'react';
import Slider from 'react-slick';
import data from '../../mocks/data.json';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './carousel.module.css';

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <Slider className={styles.slider} {...settings}>
      {data.testimonies.map((testimony) => (
        <Slide key={testimony.name} testimony={testimony} />
      ))}
    </Slider>
  );
};

export const Slide = ({ testimony }) => {
  return (
    <div>
      <h3 className={styles.testimony}>{testimony.text} </h3>
      <p className={styles.company}>{testimony.name}</p>
    </div>
  );
};
