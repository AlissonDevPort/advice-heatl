import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  BtnHolder,
  BtnClose,
  Title,
  ConfirmSaveButton,
  ActionsBtn,
  Input,
  Select,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  formData: any;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onSubmit: (formData: any) => void;
  openModal: () => void;
  validateFields: () => boolean;
  formErrors: any;
}

const Modal: React.FC<ModalProps> = ({
  closeModal,
  formData,
  onInputChange,
  onSubmit,
  validateFields,
  formErrors
}) => {
  const handleConfirm = () => {
    const isValid = validateFields();
    if (!isValid) {
      return;
    }
    onSubmit(formData);
    closeModal();
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <BtnHolder>
          <BtnClose onClick={closeModal}>
            <FontAwesomeIcon
              icon={faXmark}
              style={{ color: "white", height: "20px" }}
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
              Nome do paciente*:
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={onInputChange}
                placeholder="Digite o nome completo"
              />
              {formErrors.name && (
                <p style={{ color: "red", fontSize: "0.875rem" }}>
                  {formErrors.name}
                </p>
              )}
            </label>

            <label>
              Hora da consulta*:
              <Input
                type="text"
                name="hour"
                value={formData.hour}
                maxLength={5}
                onChange={onInputChange}
                placeholder="Digite a hora da consulta"
              />
              {formErrors.hour && (
                <p style={{ color: "red", fontSize: "0.875rem" }}>
                  {formErrors.hour}
                </p>
              )}
            </label>

            <label>
              CPF*:
              <Input
                type="text"
                name="cpf"
                value={formData.cpf}
                maxLength={14}
                onChange={onInputChange}
                placeholder="Digite o CPF"
              />
              {formErrors.cpf && (
                <p style={{ color: "red", fontSize: "0.875rem" }}>
                  {formErrors.cpf}
                </p>
              )}
            </label>

            <label>
              Data de Nascimento*:
              <Input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={onInputChange}
              />
              {formErrors.birthDate && (
                <p style={{ color: "red", fontSize: "0.875rem" }}>
                  {formErrors.birthDate}
                </p>
              )}
            </label>

            <label>
              Endereço*:
              <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={onInputChange}
                placeholder="Digite o endereço"
              />
              {formErrors.address && (
                <p style={{ color: "red", fontSize: "0.875rem" }}>
                  {formErrors.address}
                </p>
              )}
            </label>

            <label>
              Valor a pagar*:
              <Input
                type="text"
                name="totalAmount"
                value={formData.totalAmount}
                onChange={onInputChange}
                placeholder="Digite o valor"
              />
              {formErrors.totalAmount && (
                <p style={{ color: "red", fontSize: "0.875rem" }}>
                  {formErrors.totalAmount}
                </p>
              )}
            </label>

            <label>
              Pagamento:
              <Select
                name="payment"
                value={formData.payment}
                onChange={onInputChange}
              >
                <option value="">Selecione</option>
                <option value="pix">PIX</option>
                <option value="cartao">Cartão</option>
                <option value="dinheiro">Dinheiro</option>
              </Select>
              {formErrors.payment && (
                <p style={{ color: "red", fontSize: "0.875rem" }}>
                  {formErrors.payment}
                </p>
              )}
            </label>
            <label>
              Consulta paga?:
              <Select
                name="payed"
                value={formData.payed}
                onChange={onInputChange}
              >
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </Select>
              {formErrors.payed && (
                <p style={{ color: "red", fontSize: "0.875rem" }}>
                  {formErrors.payed}
                </p>
              )}
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
