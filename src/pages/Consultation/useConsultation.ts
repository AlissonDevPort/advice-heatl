import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAppointment, updateAppointment } from "../../store/modalSlice";

interface ConsultationProps {
  setFormData: (data: any) => void;
  closeModal: () => void;
  openModal: () => void;
  isModalOpen: boolean;
}

const useConsultation = ({
  setFormData,
  openModal,
  isModalOpen,
  closeModal,
}: ConsultationProps) => {
  const dispatch = useDispatch();
  const appointments = useSelector((state: any) => state.modal.appointment);
  const headers = [
    { key: "name", label: "Nome" },
    { key: "cpf", label: "CPF" },
    { key: "address", label: "Endereço" },
    { key: "birthDate", label: "Data de Nascimento" },
    { key: "date", label: "Data" },
    { key: "hour", label: "Hora" },
    { key: "totalAmount", label: "Valor Total" },
    { key: "payment", label: "Pagamento" },
    { key: "payed", label: "Pago" },
    { key: "actions", label: "Ações" },
  ];
  const rows = appointments.map((appointment: any) => ({
    index: appointment.index,
    name: appointment.name,
    cpf: appointment.cpf,
    address: appointment.address,
    birthDate: appointment.birthDate,
    date: appointment.date,
    payment: appointment.payment,
    payed: appointment.payed,
    hour: appointment.hour,
    totalAmount: appointment.totalAmount,
  }));

  const handleSubmitAppointment = (formData: any) => {
    dispatch(updateAppointment({ index: formData.index, data: formData }));
    closeModal();
  };

  const onEditAppointment = (index: number, updatedData: any) => {
    setFormData(updatedData);
    openModal();
  };

  const onDeletAppointment = (index: number) => {
    dispatch(deleteAppointment(index));
  };

  const clearFormData = () => {
    setFormData({
      name: "",
      address: "",
      birthDate: "",
      cpf: "",
      hour: "",
      payment: "",
      totalAmount: "",
      payed: "",
    });
  };

  useEffect(() => {
    if (!isModalOpen) {
      clearFormData();
    }
  }, [isModalOpen]);
  return {
    headers,
    rows,
    onEditAppointment,
    handleSubmitAppointment,
    isModalOpen,
    appointments,
    onDeletAppointment
  };
};

export default useConsultation;
