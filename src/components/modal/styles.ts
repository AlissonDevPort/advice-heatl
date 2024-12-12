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
export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
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
  background-color: white;

  display: flex;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
export const Title = styled.h2`
  margin-bottom: 20px;
  margin-top: 10px;
  color: black;
`;
export const Text = styled.p`
  margin-bottom: 10px;
  color: gray;
`;
export const CancelButton = styled.button`
  padding: 8px;
  cursor: pointer;
  color: white;
  border: 1px solid;
  border-radius: 8px;
  background-color: gray;
  margin-top: 30px;
  margin-right: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
export const ConfirmBtn = styled.button`
  padding: 8px;
  cursor: pointer;
  color: white;
  border: 1px solid;
  border-radius: 8px;
  background-color: #f60000;
  margin-top: 30px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
export const ConfirmSaveButton = styled.button`
  padding: 12px;
  cursor: pointer;
  color: white;
  border: 1px solid;
  border-radius: 8px;
  background-color: #28a745;
  margin-top: 30px;
  font-size: 17px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;


