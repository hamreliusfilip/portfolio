import styled from 'styled-components'

const Container = styled.div`
  text-align: left;
  margin-left: 150px;
`

const Link = styled.a`
color: #282626;
font-family: 'Helvetica Neue';
font-size: 40px;
font-weight: bold;
text-decoration: none; 
cursor: pointer;

&:hover {
	color: red;
	transition: 200ms ease;
  transition: 200ms ease-out;
}
`;

const Contact = () => {

  return (
    <Container> 
      <Link href = "https://www.linkedin.com/in/filip-hamrelius/" >linkedin.</Link>
      <p></p>
      <Link href = "https://github.com/hamreliusfilip" >github.</Link>
    </Container>
  )
}

export default Contact
