import styled from "styled-components";

type StyledMsgDivProps = {
  isReverse: boolean;
};

export const StyledMsgDiv = styled.div<StyledMsgDivProps>`
  width: 100%;
  height: auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: ${(props) => (props.isReverse ? "row-reverse" : "row")};
  font-family: "Roboto", sans-serif;
`;

export const StyledMsgBox = styled.div`
  width: auto;
  max-width: 50%;
  height: auto;
  background: #5ee4ff;
  padding: 5px 10px;
  margin: 0 10px;
  border-radius: 10px;
  @media and (max-width: 600px) {
    max-width: 60%;
  }
`;

export const StyledMsgTxt = styled.p`
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1.3;
  white-space: pre-wrap;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const StyledNameTxt = styled.div`
    width: auto;
    max-width: 100px;
    overflow-hidden;
    letter-spacing: 1px;
    font-size: 12px;
    @media screen and (max-width: 600px) {
        font-size: 9px;
    }
`;
