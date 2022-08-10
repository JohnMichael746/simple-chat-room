import styled from "styled-components";

export const StyledMsgContainer = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  padding: 10px;
  overflow-y: scroll;
  @media screen and (max-width: 600px) {
    height: calc(100vh - 90px);
  }
`;
