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
  background-color: #f1f1f1;
  transition: width 0.5s;
  z-index: 201;
  margin-top: 50px;
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
export const LeaveContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #004c98;
  color: white;
  cursor: pointer;
`;
export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px 10px 0px;
  border-top: 1px solid #e7e9ec;
  margin-top: 10px;
  height: 30px;
  color: #004c98;
  background-color: white;
  // cursor: pointer;
`;
export const ContentContainer = styled.div`
  padding-left: 20px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  height: 40px;
  color: #004c98;
  background-color: #f1f1f1;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    color: white;
    background-color: #004c98;
  }
`;
