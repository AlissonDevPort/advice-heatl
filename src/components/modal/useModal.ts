import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewAppointment } from "../../store/modalSlice";

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
  const dispatch = useDispatch();
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

  const handleConfirm = () => {
    if (
      !formData.name ||
      !formData.hour ||
      !formData.cpf ||
      !formData.birthDate ||
      !formData.address ||
      !formData.totalAmount ||
      !formData.payment
    ) {
      alert("Todos os campos obrigatórios devem ser preenchidos!");
      return;
    }

    dispatch(
      addNewAppointment({
        name: formData.name,
        hour: formData.hour,
        cpf: formData.cpf,
        birthDate: formData.birthDate,
        address: formData.address,
        totalAmount: formData.totalAmount,
        payment: formData.payment,
      })
    );

    setFormData({
      name: "",
      hour: "",
      cpf: "",
      birthDate: "",
      address: "",
      totalAmount: "",
      payment: "",
    });
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
