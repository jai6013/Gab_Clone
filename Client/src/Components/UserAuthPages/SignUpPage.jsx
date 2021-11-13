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
const initDetail = {
  username: "",
  email: "",
  password: "",
};

export const SignUpPage = () => {
  const Logo = styled.span`
    img {
      width: 80px;
      margin: 20px auto;
    }
  `;

  const [detail, setDetail] = useState(initDetail);
  const [data, setData] = useState([]);
  const [match, setMatch] = useState(false);
  const [confirmpass, setComfirmPass] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
  };
  const handleSetData = (e) => {
    e.preventDefault();
    detail.password === confirmpass
      ? setData([...data, detail])
      : setMatch(true);
  };

  const { handleLogin, isLoggedIn } = useContext(AuthContext);

  // if (isLoggedIn) return <Redirect to="/" />;

  return (
    <Container>
      <Box>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
      </Box>
      <Wrapper>
        <form
          onSubmit={() => {
            handleSetData();
          }}
        >
          <Heading>Sign up for Gab</Heading>

          <InputWrapper>
            <Label>username*</Label>
            <InputBox
              type="text"
              value={detail.username}
              name="username"
              onChange={handleChange}
            />
            <Label>
              Only numbers, letters and underscores allowed. No spaces.
            </Label>
          </InputWrapper>

          <InputWrapper>
            <Label>E-mail address*</Label>
            <InputBox
              type="email"
              value={detail.email}
              name="email"
              pattern="[^ @]*@[^ @]*"
              onChange={handleChange}
            />
            <Label>you will be sent a confirmation e-mail</Label>
          </InputWrapper>

          <InputWrapper>
            <Label>Password*</Label>
            <InputBox
              type="password"
              value={detail.password}
              name="password"
              onChange={handleChange}
            />
            <Label>Use at least 8 characters</Label>
          </InputWrapper>

          <InputWrapper>
            <Label>Confirm password*</Label>
            <InputBox
              type="password"
              value={confirmpass}
              name="confirmpassword"
              onChange={(e) => setComfirmPass(e.target.value)}
            />
            {match ? (
              <Label style={{ color: "red" }}>password not matched !</Label>
            ) : (
              <></>
            )}
          </InputWrapper>

          <InputWrapper>
            <LoginBtn type="submit" value="Sign Up" />
          </InputWrapper>

          <LineBreak />

          <LinkWrapper>
            <Box>
              <BottomLinks>
                <Link to="/login">Login</Link>
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
