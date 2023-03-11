import React from 'react'
import Typewriter from 'typewriter-effect'
import styled from 'styled-components'


const Text = styled.h1`
position: absolute;
margin: 0 auto;
width: 280px;
margin-left:5%;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 50px;
color: black;
margin-top:200px;
`

function Typewriters(){ 
    return( 

        <div> 
            <Text>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        dealy: 300,
                        strings: ["a portfolio by filip hamrelius."]
                    }}
               />
            </Text>
        </div>

    )
}

export default Typewriters; 