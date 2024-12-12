import styled from "styled-components";
export const NavbarContainer = styled.header`
  background-color: white;
  color: black;
  height: 50px;
  //padding: 10px 20px;
  width: 100vw;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #e7e9ec;
  @media only screen and (min-width: 768px) and (max-width: 1600px) {
    height: 45px;
  }
`;
export const Content = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0px 15px 0px 15px;
`;

export const BrainBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  padding: 7px;
  color: #004c98;
  background-color: white;
  border: 1px solid #004c98;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
 ;; white-space: nowrap;
  &:hover {
    color: white;
    background-color: #004c98;
  }
  @media only screen and (min-width: 319px) and (max-width: 769px) {
    font-size: 12px;
  }
`;