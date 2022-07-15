import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    color:white;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex:1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 20px;
`;

const List = styled.ul`
    margin: 0px;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width:50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex:1;
    padding: 20px;
    
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width:30%
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>AMAZON BY GUPTA LOGO</Logo>
                <Desc>
                    Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce,
                    It has been referred to as "one of the most influential economic and cultural forces in the
                    world", and is one of the world's most valuable brands.
                </Desc>
                <SocialContainer>
                    <SocialIcon color='#385999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='#E4405F'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='#0077b5'>
                        <LinkedIn />
                    </SocialIcon>
                    <SocialIcon color='#55ACEE'>
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>
                    Useful Links
                </Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms and Conditions </ListItem>

                </List>

            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem> <Room style={{ marginRight: "10px" }} /> 626 ABXC Street, West Ham </ContactItem>
                <ContactItem> <Phone style={{ marginRight: "10px" }} /> +1234567890 </ContactItem>
                <ContactItem> <MailOutline style={{ marginRight: "10px" }} /> harshil@gupta.com </ContactItem>
                <Payment img src='https://image.shutterstock.com/image-photo/kiev-ukraine-august-25-2020-600w-1816131491.jpg'>

                </Payment>
            </Right>
        </Container>
    )
}

export default Footer