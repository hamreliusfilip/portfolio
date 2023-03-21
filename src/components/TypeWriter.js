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
padding: 15% 0px 200px 0px;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 600px) {
    font-size: 1em;
    padding: 25% 0px 200px 0px;
  }
`
function Typewriters() {
    return (
        <div>
            <Text>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        dealy: 5,
                        strings: ["Tack för ditt besök.", "Thank you for your visit.", "ご訪問ありがとうございます.", "Gracias por tu visita.", "Merci pour votre visite.", "Danke für Ihren Besuch.","感谢您的光临."]
                    }}
                />
            </Text>
        </div>
    )
}
export default Typewriters; 