import React from 'react'
import styled from 'styled-components'
import Footer from './footer'
import Hello from './hello'

const Dashboard = () => {
  return (

    <Container>

      <Hello />

      <Wrapper2>
        <Ellipse>
          <Name>
            FILIP HAMRELIUS
          </Name>
        </Ellipse>
      </Wrapper2>

    </Container>

  )
}

export default Dashboard

const Container = styled.div`
width: 100%;
min-height: 100vh;
background-color: #DCDCDC;
justify-content: space-evenly;
`

const Wrapper2 = styled.div`
  position: absolute;
  width: 1500px;
  height: 1500px;
  margin-left: 90%;
  top: 5%;
  margin: 10px;
`
const Ellipse = styled.div `
position: absolute;
width: 1200px;
height: 1200px;
left: 1800px;
margin-top:200px;

background: #1F1D1D;
`
const Name = styled.h2`
position: absolute;
margin-left: -2%;
margin-top: 30%;
font-family: 'Helvetica Neue';
font-weight: 900;
font-size: 209px;
color: #DCDCDC;
`



const Text2 = styled.p`
color: #DCDCDC;
line-height: 24px;
font-size: 20px;
width: 500px;
margin-top: 100 px;
color: #1F1D1D;
padding: 30px;
font-weight: 800;
`
const Text = styled.h2`
  color: #DCDCDC;
  line-height: 24px;
  font-size: 100px;
  padding: 30px;
`
