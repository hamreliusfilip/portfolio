import styled from 'styled-components'

const Container = styled.div`
  z-index: 1; 
  text-align: left;
  margin-left: 20px; 
  margin-top: 10%;
  padding: 30px 10px 10px 10px;
`

const Link = styled.a`
color: black;
font-family: 'Helvetica Neue';
font-size: 60px;
font-weight: bold;

&:hover {
	color: white;
	transition: 200ms ease-in;
}
`;

const Contact = () => {

  return (
    <Container> 
      <Link href = "https://www.linkedin.com/in/filip-hamrelius/" > LINKEDIN</Link>
    </Container>
  )
}

export default Contact
