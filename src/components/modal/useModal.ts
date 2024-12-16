import { useEffect, useState } from "react";
import { formatCpf, formatHour } from "../../utils/formatterInputs";

interface FormData {
  name: string;
  hour: string;
  cpf: string;
  birthDate: string;
  address: string;
  totalAmount: string;
  payment: string;
  payed: string;
}

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    hour: "",
    cpf: "",
    birthDate: "",
    address: "",
    totalAmount: "",
    payment: "",
    payed: "",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [formErrors, setFormErrors] = useState<FormData>({
    name: "",
    hour: "",
    cpf: "",
    birthDate: "",
    address: "",
    totalAmount: "",
    payment: "",
    payed: "",
  });
  
  const validateFields = () => {
    const errors: FormData = {
      name: "",
      hour: "",
      cpf: "",
      birthDate: "",
      address: "",
      totalAmount: "",
      payment: "",
      payed: "",
    };
  
    if (formData.name.trim().length === 0) {
      errors.name = "O campo 'Nome do paciente' está vazio ou inválido.";
    }
  
    if (formData.hour.length < 5) {
      errors.hour = "O campo 'Hora da consulta' deve ser no formato EX: 11:30.";
    }
  
    if (formData.cpf.length < 14) {
      errors.cpf = "O campo 'CPF' deve ser no formato EX:12345678910120.";
    }
  
    if (!formData.birthDate) {
      errors.birthDate = "O campo 'Data de Nascimento' é obrigatório.";
    }
  
    if (!formData.address) {
      errors.address = "O campo 'Endereço' é obrigatório.";
    }
  
    if (!formData.totalAmount) {
      errors.totalAmount = "O campo 'Valor a pagar' é obrigatório.";
    }
  
    if (!formData.payment) {
      errors.payment = "O campo 'Pagamento' é obrigatório.";
    }
  
    if (!formData.payed) {
      errors.payed = "O campo 'Consulta paga?' é obrigatório.";
    }
  
    setFormErrors(errors);
    return Object.values(errors).every((error) => error === "");
  };

  useEffect(()=>{
    validateFields()
  },[formData])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "hour") {
      formattedValue = formatHour(value);
    } else if (name === "cpf") {
      formattedValue = formatCpf(value);
    }
    setFormData((prev) => ({ ...prev, [name]: formattedValue }));
  };

  const editAppointment = (appointment: {
    name: string;
    hour: string;
    cpf: string;
    birthDate: string;
    address: string;
    totalAmount: string;
    payment: string;
    payed: string;
  }) => {
    setFormData({
      name: appointment.name,
      hour: appointment.hour,
      cpf: appointment.cpf,
      birthDate: appointment.birthDate,
      address: appointment.address,
      totalAmount: appointment.totalAmount,
      payment: appointment.payment,
      payed: appointment.payed,
    });
    openModal();
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    formData,
    handleInputChange,
    editAppointment,
    setFormData,
    formErrors,
    validateFields
  };
};
