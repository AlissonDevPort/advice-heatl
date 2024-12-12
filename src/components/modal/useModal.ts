import { useState } from "react";

interface FormData {
  name: string;
  cpf: string;
  birthDate: string;
  address: string;
  payment: string;
}

interface UseModalProps {
  onConfirm: (data: FormData) => void;
}

export const useModal = ({ onConfirm }: UseModalProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    cpf: "",
    birthDate: "",
    address: "",
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

  const handleConfirm = () => {
    if (
      !formData.name ||
      !formData.cpf ||
      !formData.birthDate ||
      !formData.address
    ) {
      alert("Todos os campos obrigatórios devem ser preenchidos!");
      return;
    }
    onConfirm(formData);
    closeModal();
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    formData,
    handleInputChange,
    handleConfirm,
  };
};
