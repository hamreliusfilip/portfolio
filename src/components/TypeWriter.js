import React from 'react'
import Typewriter from 'typewriter-effect'
import styled from 'styled-components'


const Text = styled.h1`
position: absolute;
margin-left: 400px;
margin-top: 600px;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 200px;
color: #282626;
`

function Typewriters(){ 
    return( 

        <div> 
            <Text>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        strings: ["filip hamrelius"]
                    }}
               />
            </Text>
        </div>

    )
}

export default Typewriters; 