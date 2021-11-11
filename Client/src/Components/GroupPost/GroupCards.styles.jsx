import styled from "styled-components";


export const JoinBtn = styled.button`
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.primary};
  background: #ffffff;
  width: 83px;
  height: 29px;
  border-radius: 25px;
  margin: 10px 10px 0 10px;
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.primary};
    color: #ffffff;
  }
`;