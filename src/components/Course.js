import styled from 'styled-components'

const Box = styled.div`
height: 220px;
min-width: 300px;
margin: 20px 20px 20px 20px;
text-decoration: none;
background-color: black;
border-radius: 15px;
`

const Name = styled.div`
  z-index: 500; 
  text-align: center; 
  margin-top:5%;
  font-size: 20px;
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
