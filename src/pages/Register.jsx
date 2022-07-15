import React from 'react'
import styled from 'styled-components';

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
    width: 40%;
    background-color: white;
`;

const Form = styled.form`
   display: flex;
   flex-wrap : wrap;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin:20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border:none;
    padding:15px 20px;
    background-color: teal;
    cursor:pointer;
    color:white;
`;


const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    Create an Account
                </Title>
                <Form>
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="User Name" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Agreement>
                        By creating an account, I consent to
                        processing of my personal data in accordance
                        with <b>PRIVACY POLICY</b>.
                    </Agreement>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register