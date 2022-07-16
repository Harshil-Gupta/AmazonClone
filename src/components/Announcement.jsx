import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`



const Announcement = () => {
  return (
    <Container>
        Message about deals and offers! 150000% off!
    </Container>
  )
}

export default Announcement