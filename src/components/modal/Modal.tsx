import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  BtnHolder,
  BtnClose,
  Title,
  ConfirmSaveButton,
  ActionsBtn,
} from "./styles.ts";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  formData: {
    name: string;
    cpf: string;
    birthDate: string;
    address: string;
    payment: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  onClose,
  formData,
  handleInputChange,
  handleConfirm,
}) => {
  return (
    <>
      {isModalOpen && (
        <ModalOverlay>
          <ModalContainer>
            <BtnHolder>
              <BtnClose onClick={onClose}>
                <FontAwesomeIcon
                  icon={faXmark}
                  style={{ color: "gray", height: "20px" }}
                />
              </BtnClose>
            </BtnHolder>
            <Title>Adicionar Consulta</Title>
            <div
              style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <label>
                Nome Completo*:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Digite o nome completo"
                  style={{ width: "100%" }}
                />
              </label>

              <label>
                CPF*:
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleInputChange}
                  placeholder="Digite o CPF"
                  style={{ width: "100%" }}
                />
              </label>

              <label>
                Data de Nascimento*:
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  style={{ width: "100%" }}
                />
              </label>

              <label>
                Endereço*:
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Digite o endereço"
                  style={{ width: "100%" }}
                />
              </label>

              <label>
                Pagamento:
                <select
                  name="payment"
                  value={formData.payment}
                  onChange={handleInputChange}
                  style={{ width: "100%" }}
                >
                  <option value="">Selecione</option>
                  <option value="pix">PIX</option>
                  <option value="cartao">Cartão</option>
                  <option value="dinheiro">Dinheiro</option>
                </select>
              </label>
            </div>

            <ActionsBtn>
              <ConfirmSaveButton onClick={handleConfirm}>
                Concluir
              </ConfirmSaveButton>
            </ActionsBtn>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};

export default Modal;
