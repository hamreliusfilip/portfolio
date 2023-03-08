import styled from 'styled-components'

const Container = styled.div`
  z-index: 1; 
  text-align: left;
  margin-left: 150px;
`

const Link = styled.a`
color: #DCDCDC;
font-family: 'Helvetica Neue';
font-size: 60px;
font-weight: bold;
text-decoration: none; 

&:hover {
	color: black;
	transition: 200ms ease;
  transition: 200ms ease-out;
}
`;

const Contact = () => {

  return (
    <Container> 
      <Link href = "https://www.linkedin.com/in/filip-hamrelius/" >linkedin.</Link>
      <p></p>
      <Link href = "https://www.linkedin.com/in/filip-hamrelius/" >instagram.</Link>
      <p></p>
      <Link href = "https://www.instagram.com/filiphamrelius/" >facebook.</Link>
    </Container>
  )
}

export default Contact
