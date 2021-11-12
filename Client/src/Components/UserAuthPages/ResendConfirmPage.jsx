import React from "react";
import logo from "./logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Wrapper,
  InputWrapper,
  Container,
  InputBox,
  Label,
  Heading,
  LoginBtn,
  LineBreak,
  Box,
  BottomLinks,
  LinkWrapper,
} from "./LoginPageStyle";

export const ResendConfirmPage = () => {
  const Logo = styled.span`
    img {
      width: 80px;
      margin: 20px auto;
    }
  `;

  return (
    <Container>
      <Box>
        {" "}
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
      </Box>
      <Wrapper>
        <form>
          <Heading>Resend confirmation instructions</Heading>
          <InputWrapper>
            <Label>E-mail Address</Label>
            <InputBox type="text" />
          </InputWrapper>

          <InputWrapper>
            <LoginBtn type="submit" value="Resend confirmation instructions " />
          </InputWrapper>

          <LineBreak />
          <LinkWrapper>
            <Box>
              <BottomLinks>
                <Link to="/login">Login</Link>
              </BottomLinks>
              <BottomLinks>
                <Link to="/sign_up">Signup</Link>
              </BottomLinks>
            </Box>
            <Box>
              <BottomLinks>
                <Link to="/reset_password">Forgot your password?</Link>
              </BottomLinks>
            </Box>
          </LinkWrapper>
        </form>
      </Wrapper>
    </Container>
  );
};
