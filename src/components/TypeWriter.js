import React from 'react'
import Typewriter from 'typewriter-effect'
import styled from 'styled-components'


const Text = styled.h1`
position: absolute;
margin: 0 auto;
margin-left:25%;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 50px;
color: #DCDCDC;
margin-top:100px;
`

function Typewriters(){ 
    return( 

        <div> 
            <Text>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 300,
                        strings: ["thank you for visiting."]
                    }}
               />
            </Text>
        </div>

    )
}

export default Typewriters; 