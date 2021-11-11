import React from 'react';
import logo from "./logo.png"
import styled from "styled-components";
import {Link} from "react-router-dom";
import { Wrapper, InputWrapper, Container, InputBox, Label, Heading, LoginBtn, LineBreak, Box, BottomLinks, LinkWrapper } from "./LoginPageStyle"

export const ForgetPasswordPage = () => {

    const Logo = styled.span`
    img{
        width:80px;
        margin:20px auto;
    }
`



    return (
        <Container>
            <Box> <Logo><img src={logo} alt="logo" /></Logo></Box>
            <Wrapper>

                <form >
                    <Heading>Reset Gab Password</Heading>
                    <InputWrapper>
                        <Label>E-mail Address</Label>
                        <InputBox type="text" />
                    </InputWrapper>
                   


                    <InputWrapper>
                        <LoginBtn type="submit" value="Reset password" />
                    </InputWrapper>



                    <LineBreak />
                    <LinkWrapper>
                        <Box><BottomLinks><Link to="/login">Login</Link></BottomLinks><BottomLinks><Link to="/sign_up">Signup</Link></BottomLinks></Box>
                        <Box><BottomLinks><Link to="/resend_confirmation">Didn't receive confirmation instructions?</Link></BottomLinks></Box>

                    </LinkWrapper>


                </form>
            </Wrapper>

        </Container>
    )
}
