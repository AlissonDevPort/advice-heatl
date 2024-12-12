import styled from "styled-components";

interface OverlayProps {
  isOpen: boolean;
}

export const Overlay = styled.div<OverlayProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;
`;

export const SidebarContainer = styled.aside<OverlayProps>`
  width: ${({ isOpen }) => (isOpen ? "230px" : "50px")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #0f1214;
  transition: width 0.5s;
  z-index: 201;
  margin-top: 53px;
  border-right: 1px solid rgba(61, 71, 81, 0.3);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;


export const ContentContainer = styled.div`
  padding-left: 20px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  height: 40px;
  color: white;
  background-color: rgb(17, 23, 29);
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgb(30, 39, 49);
  }
`;
