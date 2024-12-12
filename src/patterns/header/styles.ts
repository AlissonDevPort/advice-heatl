import styled from "styled-components";
export const NavbarContainer = styled.header`
  background-color: #0f1214;
  color: white;
  height: 55px;
  width: 100vw;
  position: fixed;
  top: 0;
  border-bottom: 1px solid rgba(61, 71, 81, 0.3);
  @media only screen and (min-width: 768px) and (max-width: 1600px) {
    height: 45px;
  }
`;
export const Content = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0px 30px 0px 30px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 120px;
  padding: 7px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    color: white;
    background-color: rgb(140, 142, 145);
  }
  @media only screen and (min-width: 319px) and (max-width: 769px) {
    font-size: 12px;
  }
`;
