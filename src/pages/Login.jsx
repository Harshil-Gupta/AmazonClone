import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vh;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))
        ,url("https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaCUyMHJlcyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")
        center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;

`;

const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
`;

const Form = styled.form`
   display: flex;
   flex-direction: column;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
`;


const Button = styled.button`
    width: 40%;
    border:none;
    padding:15px 20px;
    background-color: teal;
    cursor:pointer;
    color:white;
    margin-bottom: 10px;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    Sign In
                </Title>
                <Form>

                    <Input placeholder="User Name" />
                    <Input placeholder="Password" />
                    <Button>Login</Button>
                    <Link>Forgot Password?</Link>
                    <Link>Create a new Account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login