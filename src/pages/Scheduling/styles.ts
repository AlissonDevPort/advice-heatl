import styled from "styled-components";

export const ContentsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 850px) {
    flex-direction: row;
    height: 100vh;
  }
  @media (max-height: 850px) {
    height: auto !important;
  }
`;

export const FirstChildren = styled.div`
  width: 80%;
  margin-top: 85px;
  margin-left:5px;
  @media (min-width: 850px) {
    //margin-left: 65px;
  }
`;

export const SecondChildren = styled.div`
  margin-right:10px;
  width: 80%;
  @media (min-width: 850px) {
    margin-top: 85px;
  }
`;
