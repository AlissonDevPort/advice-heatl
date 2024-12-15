import styled from "styled-components";

export const ContentsContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100vh;
 
  @media (max-height: 555px) {
    height: auto !important;
  }
`;

export const FirstChildren = styled.div`
  width: 80%;
  margin-top: 85px;
  @media (min-width: 850px) {
    margin-left: 65px;
  }
`;

export const SearchAndFilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
