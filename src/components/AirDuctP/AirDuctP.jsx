import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

import { Container, NameService, TextService,WrapSlider } from './AirDuctP.styled';

import after from 'images/AirDuct1.jpg';
import before from 'images/AirDuct2.jpg';
import BeforeAfterText from "images/before-after.png";


const FIRST_IMAGE = {
  imageUrl: before,
 
  
};
const SECOND_IMAGE = {
  imageUrl: after,

};
const delimiterIconStyles = {
  width: '50px',
  height: '50px',
  backgroundSize: 'cover',
  borderRadius: 'none',
  backgroundImage: `url(${BeforeAfterText})`,

  
}
export const AirDuctP = () => {
  return (
    <>
      <Container>
        <NameService>DRYER VENT CLEANING</NameService>
        <TextService>
          Usually people don`t care about dryer cleaning, but it is very
          important thing. If your dryer has a problem with air flow , full of
          lint , moldy smell , birdnest inside or clothes taking longer to dry –
          we can help you If your dryer clean – you stay safe , cause dryer vent
          cleaning can prevent the fire of your pipe. Wich services include?
          Vent cleaning , clean the dryer inside ,fan cleaning , filter and back
          panel cleaning.
        </TextService>
        <button></button>
        <button></button>
        <WrapSlider>
        <ReactBeforeSliderComponent
          firstImage={FIRST_IMAGE}
          secondImage={SECOND_IMAGE}
          delimiterColor={'#F8821E'}
          delimiterIconStyles={delimiterIconStyles}
          width={345}
          height={500}
        />
        </WrapSlider>
        
      </Container>
    </>
  );
};
