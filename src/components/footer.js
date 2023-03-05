import React from "react";
import styled from 'styled-components'

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>CONTACT</Heading>
			<FooterLink href="https://www.linkedin.com/in/filip-hamrelius/">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				LINKEDIN
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;


const Box = styled.div`
padding: 80px 60px;
background: #1F1D1D;
position: absolute;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`

const Column = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`;

const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

const FooterLink = styled.a`
color: #DCDCDC;
margin-bottom: 20px;
font-family: 'Helvetica Neue';
font-size: 18px;
font-weight: bold;

&:hover {
	color: white;
	transition: 200ms ease-in;
}
`;

const Heading = styled.p`
font-size: 24px;
color: #DCDCDC;
font-family: 'Helvetica Neue';
font-weight: 900;
margin-bottom: 40px;
font-weight: bold;
`;
