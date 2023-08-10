import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';
import{ButtonSlider,TopText,Container,TextSlider} from './Slider.styled'

import Slide1 from "images/pexels-life1.png";
import Slide2 from "images/second.jpg";
import Slide3 from "images/third.jpg";
import Slide4 from "images/naruto.png"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';




export default function MySlider() {
  return (
    <>
    
      <Swiper
        spaceBetween={40}
        centeredSlides={true}
        autoplay={{
          delay: 200000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

   
        <SwiperSlide> 
          <img src={Slide1} alt='Slide1'/>
          <TopText>AIR DUCT & DRYER VENT CLEANING SERVICE</TopText>
          <TextSlider>Optional text about itOptional text about itOptional text about itOptional text about itOptional text about itOptional text about </TextSlider>
        <ButtonSlider>Book Us</ButtonSlider>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} alt='Slide2'/>
        <ButtonSlider>Book Us</ButtonSlider>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} alt='Slide3'/>
        <ButtonSlider>Book Us</ButtonSlider>
        </SwiperSlide>

   
        
      </Swiper>
      
    </>
  );
}