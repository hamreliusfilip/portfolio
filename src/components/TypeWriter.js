import React from 'react'
import Typewriter from 'typewriter-effect'
import styled from 'styled-components'

const Wrapper = styled.div`
position: absolute;
width: 1200px;
height: 1200px;
left: 1800px;
margin-top:200px;

background: #DCDCDC;
`
const Text = styled.h1`
position: absolute;
margin-left: -2%;
margin-top: 30%;
font-family: 'Helvetica Neue';
font-weight: 900;
font-size: 209px;
color: #1F1D1D;
`

function Typewriters(){ 
    return( 

        <Wrapper> 
            <Text>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 200,
                        strings: ["FILIP HAMRELIUS"]
                    }}
               />
            </Text>
        </Wrapper>

    )
}

export default Typewriters; 