import styled from "styled-components";

export const StyledNavBar = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #00accf;
`;

export const StyledNavTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;
