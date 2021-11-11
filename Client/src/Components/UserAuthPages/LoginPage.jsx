import React, { useContext, useState } from "react";
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
import { AuthContext } from "../../Contexts/AuthContext";
import { Redirect } from "react-router";
export const LoginPage = () => {
  const Logo = styled.span`
    img {
      width: 80px;
      margin: 20px auto;
    }
  `;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) return <Redirect to="/" />;

  return (
    <Container>
      <Box>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
      </Box>
      <Wrapper>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin({ email, password });
          }}
        >
          <Heading>Log into Gab</Heading>
          <InputWrapper>
            <Label>E-mail Address</Label>
            <InputBox
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              value={email}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Password</Label>
            <InputBox
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              value={password}
            />
          </InputWrapper>

          <InputWrapper>
            <LoginBtn type="submit" value="Log in" />
          </InputWrapper>

          <LineBreak />
          <LinkWrapper>
            <Box>
              <BottomLinks>
                <Link to="/sign_up">Signup</Link>
              </BottomLinks>
              <BottomLinks>
                <Link to="/reset_password">Forgot your password?</Link>
              </BottomLinks>
            </Box>
            <Box>
              <BottomLinks>
                <Link to="/resend_confirmation">
                  Didn't receive confirmation instructions?
                </Link>
              </BottomLinks>
            </Box>
          </LinkWrapper>
        </form>
      </Wrapper>
    </Container>
  );
};
