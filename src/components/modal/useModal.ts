import { useState } from "react";

interface FormData {
  name: string;
  hour: string;
  cpf: string;
  birthDate: string;
  address: string;
  totalAmount: string;
  payment: string;
}

export const useModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    hour: "",
    cpf: "",
    birthDate: "",
    address: "",
    totalAmount: "",
    payment: "",
  });

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    formData,
    handleInputChange,
    setFormData,
  };
};
