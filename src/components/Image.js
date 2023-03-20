import React from "react";
import styled from 'styled-components'
import Marquee from 'react-fast-marquee'

const Image = () => {
    return (
        <Wrapper>
            <Total>
                <Marquee gradientWidth='0' speed='100'>
                    <StyledIMG src="blender/1.png" />
                    <StyledIMG src="blender/4.png" />
                    <StyledIMG src="blender/2.png" />
                    <StyledIMG src="blender/3.png" />
                    <StyledIMG src="blender/5.png" />
                    <StyledIMG src="blender/1.png" />
                    <StyledIMG src="blender/2.png" />
                    <StyledIMG src="blender/3.png" />
                    <StyledIMG src="blender/4.png" />
                    <StyledIMG src="blender/5.png" />
                </Marquee>
            </Total>
        </Wrapper>
    )
}

  export default Image

const Wrapper = styled.div`
    width: 100vw;
    position: relative;
    margin-top: -10%;
`

const Total = styled.div`
  position: relative;
  overflow: scroll;
  display: flex;
  color: #DCDCDC;
  width: 100vw;
  
  &::-webkit-scrollbar {
  display: none;
}
`

const StyledIMG = styled.img`
    width:auto;
    height:50%;
    margin-left: 1%;
    border-radius: 15px;
`
