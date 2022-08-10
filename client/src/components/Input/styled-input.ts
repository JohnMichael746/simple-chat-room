import styled from "styled-components";

export const StyledInputDiv = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #ccc;
  background: #e3e2e1;
  @media screen and (max-width: 600px) {
    height: 40px;
  }
`;

export const StyledForm = styled.form`
  width: 80%;
  height: auto;
`;

export const StyledInput = styled.textarea`
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 1px solid black;
  letter-spacing: 1px;
  font-size: 15px;
  @media screen and (max-width: 600px) {
    font-size: 13px;
    height: 20px;
  }
`;

export const StyledInputButton = styled.button`
  width: 30px;
  height: 30px;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 600px) {
    width: 20px;
    height: 20px;
  }
`;
