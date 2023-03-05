import styled from 'styled-components'

const Box = styled.div`
height: 220px;
min-width: 300px;
margin: 16px -5px 15px 30px;
box-shadow: 0px 0px 15px rgba(33, 33, 33, 0.2);
border-radius: 14px;
background-color: #1F1D1D;
font-family: 'Helvetica Neue';
color: #1F1D1D;
text-decoration: none;
`

const Name = styled.div`
  z-index: 1; 
  text-align: center; 
  font-size: 30px;
  font-family: 'Helvetica Neue';
  font-weight: 800;
  color: #DCDCDC;
  padding: 30px 10px 10px 10px;
`

const Course = ({ courseName }) => {

  return (
      <Box>
        <Name>{courseName}</Name>
      </Box>
  )
}

export default Course
