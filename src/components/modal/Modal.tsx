import React from "react";
import { useModal } from "./useModal";
import {
  ModalOverlay,
  ModalContainer,
  BtnHolder,
  BtnClose,
  Title,
  ConfirmSaveButton,
  ActionsBtn,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const { formData, handleInputChange,handleConfirm } = useModal();

  return (
    <ModalOverlay>
      <ModalContainer>
        <BtnHolder>
          <BtnClose onClick={closeModal}>
            <FontAwesomeIcon
              icon={faXmark}
              style={{ color: "gray", height: "20px" }}
            />
          </BtnClose>
        </BtnHolder>
        <Title>Adicionar Consulta</Title>

        <div>
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
              Hora*:
              <input
                type="text"
                name="hour"
                value={formData.hour}
                onChange={handleInputChange}
                placeholder="Digite a hora da consulta"
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
              Valor a pagar*:
              <input
                type="text"
                name="totalAmount"
                value={formData.totalAmount}
                onChange={handleInputChange}
                placeholder="Digite o valor"
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
        </div>

        <ActionsBtn>
          <ConfirmSaveButton onClick={handleConfirm}>
            Concluir
          </ConfirmSaveButton>
        </ActionsBtn>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
