import styled from "styled-components";

export const IconContainerDefault = styled.button`
  margin-right: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease;
  font-size:1.1rem;
`;
export const PencilContainer = styled(IconContainerDefault)`
    color: white;
  &:hover {
    color: #004c98;
    transform: scale(1.2);
  }
`;
export const DelContainer = styled(IconContainerDefault)`
    color: white;
  &:hover {
    color: red;
    transform: scale(1.2);
  }
`;