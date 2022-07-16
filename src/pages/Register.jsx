import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: teal;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  opacity: 0.8;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 50%;
  margin-top: 30px;;
  border: none;
  padding: 15px 20px;
  background-color: gray;
  color: white;
  cursor: pointer;
  &:hover {
    color: gray;
    background-color: white;
  }
`;
const ButtonDiv = styled.div`
  display:flex;
  flex: 2;
  justify-content: center;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="first name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input type="password" placeholder="password"/>
                <Input type="password" placeholder="confirm password"/>
                <ButtonDiv>
                <Button>CREATE ACCOUNT</Button>
                </ButtonDiv>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login