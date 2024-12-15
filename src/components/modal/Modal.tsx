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
}

const Modal: React.FC<ModalProps> = ({
  closeModal,
  formData,
  onInputChange,
  onSubmit,
}) => {
  const handleConfirm = () => {
    if (
      !formData.name ||
      !formData.hour ||
      !formData.cpf ||
      !formData.birthDate ||
      !formData.address ||
      !formData.totalAmount ||
      !formData.payment ||
      !formData.payed
    ) {
      toast.warning("Preencha corretamente os campos", {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
            </label>

            <label>
              Data de Nascimento*:
              <Input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={onInputChange}
              />
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
