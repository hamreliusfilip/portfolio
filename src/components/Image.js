import React, { useState, useRef } from 'react';
import { ImagesData } from '../data/Images'
import styled from 'styled-components'

import arrow from '../loggor/arrow.svg'

const Image = () => {

    const ref1 = useRef(0);
    const [scrollLeft1, setScrollLeft1] = useState(0);

    const [viewImage, setViewImage] = useState(ImagesData[0].img);
    const [viewImageAlt, setViewImageAlt] = useState(ImagesData[0].alt);

    const handleScroll1 = (scrollOffset) => {
        ref1.current.scrollLeft += scrollOffset;
        setScrollLeft1(ref1.current.scrollLeft);
      };

    return (
        <Wrapper>
            <ViewImagWrapper>
                <LargeImage src={viewImage} alt={viewImageAlt} />
            </ViewImagWrapper>

            <ButtonWrapperLeft disabled={scrollLeft1 === 0} onClick={() => handleScroll1(-180)}>
                <ImageLeft src={arrow} />
            </ButtonWrapperLeft>
            <Total ref={ref1}>
                {ImagesData.map((image) => (
                    <StyledIMG
                        key={image.key}
                        src={image.img}
                        alt={image.alt}
                        onClick={() => {
                            setViewImage(image.img);
                            setViewImageAlt(image.alt);
                        }} />
                ))}
            </Total>
            <ButtonWrapperRight disabled={scrollLeft1 === ref1.current.scrollWidth - ref1.current.clientWidth} onClick={() => handleScroll1(180)}>
                <ImageRight src={arrow} />
            </ButtonWrapperRight>
        </Wrapper>
    )
}
export default Image

const Total = styled.div`
position: relative;
align: center;
width: 100vw;
overflow: scroll;
display: flex;

&::-webkit-scrollbar {
    display: none;
    scroll-behavior: smooth;
}
`
const Wrapper = styled.div`
width: 100vw;
position: relative;
padding: 0 0 70px 0;

`
const StyledIMG = styled.img`     
position: relative;
z-index: 800;
margin-left: 2.5%;
border-radius: 15px;
height: 14%;
width: 14%;
cursor: pointer;

@media (max-width: 600px) {
    height: 25%;
    width: 25%;
    border-radius:10px;
}
`
const ViewImagWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top:5%;
`
const LargeImage = styled.img`
height: 50%;
width: 50%;

margin-bottom: 5%;
border-radius: 15px;

@media (max-width: 600px) {
    height: 95%;
    width: 95%;
}
`
const ButtonWrapperLeft = styled.button`
all: unset;
position: absolute;
top: 0;
left: 0;
z-index: 999!important;
background-color: white; 
opacity: 0;
height: 20%;
margin-top: 32.5%;
margin-left: 10px;
margin-right: 10px;
border-radius: 15px;
cursor: pointer;

&:hover {
  opacity: 0.2;
  transition: 0.5s ease-in-out;
}
`
const ButtonWrapperRight = styled.button`
all: unset;
position: absolute;
top: 0;
right: 0;
bottom: 0;
z-index: 999!important;
background-color: white; 
opacity: 0;
height: 20%;
margin-top: 32.5%;
margin-left: 10px;
margin-right: 10px;
border-radius: 15px;
cursor: pointer;

&:hover {
  opacity: 0.2;
  transition: 0.5s ease-in-out;
}
`
const ImageLeft = styled.img`
  right:0;
  height: 20%;
  transform: scaleX(-1);
`
const ImageRight = styled.img`
  left: 0;
  height: 20%;
  cursor: pointer;
`