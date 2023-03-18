import React from 'react'
import Typewriter from 'typewriter-effect'
import styled from 'styled-components'


const Text = styled.h1`
position: relative;
margin-left: 2%;
font-family: 'Helvetica Neue';
font-weight: bold;
font-size: 2em;
color: var(--text);
padding: 30% 0px 200px 0px;

display: flex;
justify-content: center;
align-items: center;
`

function Typewriters() {
    return (
        <div>
            <Text>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        dealy: 10,
                        strings: ["hejdå.", "goodby.", "ciao.", "adios.", "au revoir.", "再见.","vale.", "до побачення.", "Tschüss.", "さようなら."]
                    }}
                />
            </Text>
        </div>
    )
}

export default Typewriters; 