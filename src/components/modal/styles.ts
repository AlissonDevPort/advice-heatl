import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 5px;
`;

export const ModalContainer = styled.div`
  background-color: #11171d;
  color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 70%;
  overflow-y: auto;
  @media (min-width: 320px) {
    width: 80%;
  }
  @media (min-width: 768px) {
    width: 49vw;
  }
`;
export const BtnHolder = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 10px;
`;
export const ActionsBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const BtnClose = styled.button`
  border: none;
  padding: 8px;
  background-color: #182845;

  display: flex;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
export const Title = styled.h2`
  margin-bottom: 10px;
  margin-top: 10px;
  color: white;
`;

export const ConfirmSaveButton = styled.button`
  padding: 10px;
  cursor: pointer;
  color: white;
  border: 1px solid;
  border-radius: 8px;
  background-color: #28a745;
  margin-top: 15px;
  font-size: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
