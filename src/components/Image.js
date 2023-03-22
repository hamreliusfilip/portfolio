import React, { useState } from 'react';
import { ImagesData } from '../data/Images'
import styled from 'styled-components'

const Image = () => {

    const [viewImage, setViewImage] = useState(ImagesData[0].img);
    const [viewImageAlt, setViewImageAlt] = useState(ImagesData[0].alt);

    return (
        <Wrapper>
            <ViewImagWrapper>
                <LargeImage src={viewImage} alt={viewImageAlt} />
            </ViewImagWrapper>

            <Total>
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
z-index: 999 !important;
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