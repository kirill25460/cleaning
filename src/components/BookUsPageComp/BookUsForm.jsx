import React, { useRef } from 'react';
import {
  Container,
  WrapInput,
  WrapFor3Inputs,
  Wrap,
  TxtExp,
  InputName,
  InputReview,
  SharePic,
  InputFileReview,
  MainInput,
  InputContainer,
  SvgClip,
  SvgTg,
  SubBtn,
  InputPhone,
  SharePicDesc
} from './BookUsForm.styled';
import man from 'images/BookUsMan.png';
import Notiflix from 'notiflix'

export const BookUsForm = ({ onInput, inputs }) => {
  const inputRef = useRef(null);

  const handleArrowClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      Notiflix.Notify.success('Photos added');
    }else{
      Notiflix.Notify.failure('Photos didn`t added');
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const title = form.elements.title.value;
    const number = form.elements.number.value;
    const bookus = form.elements.bookus.value;
    const photo = form.elements.photo.value;
    if(title !== "" && number !== "" && bookus !== "" && photo !== ""){
      Notiflix.Notify.success('Rewiew send');
    }else{
      Notiflix.Notify.failure('Rewiew didn`t send');
    }

    console.log(title, number, bookus, photo);
    form.reset();
  };

  return (
    <>
      <Container>
        <Wrap>
          <TxtExp>LEAVE YOUR TASK AND WE WILL CALL YOU</TxtExp>
          <WrapFor3Inputs onSubmit={handleSubmit}>
            <WrapInput>
              <InputName
                type="text"
                name="title"
                id="title"
                // value={inputs.title}
                placeholder="Name"
              ></InputName>
              <InputPhone
                type="tel"
                name="number"
                id="number"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                // value={inputs.title}
                placeholder="Phone number"
              />
            </WrapInput>

            <InputReview
              type="text"
              name="bookus"
              id="bookus"
              // value={inputs.review}
              placeholder="Write your task here..."
            ></InputReview>
            <MainInput>
              <InputContainer>
                <InputFileReview
                  ref={inputRef}
                  type="file"
                  name="photo"
                  id="photo"
                  onChange={handleFileChange}
                  // value={inputs.review}
                />
                <SvgClip onClick={handleArrowClick} />
                <SubBtn type="submit">
                  <SvgTg />
                </SubBtn>
              </InputContainer>
            </MainInput>
          </WrapFor3Inputs>
        </Wrap>
        <SharePic src={man} alt="man" />
        <SharePicDesc src={man} alt="desc" />
      </Container>
    </>
  );
};