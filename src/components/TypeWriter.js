import React from 'react'
import Typewriter from 'typewriter-effect'
import styled from 'styled-components'


const Text = styled.h1`
position: relative;
margin-left: 40%;
font-family: 'Helvetica Neue';
font-weight: bold;
font-size: 5em;
color: #242424;
padding: 50px;
`

function Typewriters() {
    return (
        <div>
            <Text>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        dealy: 300,
                        strings: ["thank you for visiting", "have a nice day"]
                    }}
                />
            </Text>
        </div>
    )
}

export default Typewriters; 