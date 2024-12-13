import { useState } from "react";
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
  };
};
