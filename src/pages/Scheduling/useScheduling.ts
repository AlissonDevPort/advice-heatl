import { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  addNewAppointment,
  deleteAppointment,
  updateAppointment,
} from "../../store/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";

interface SchedulingProps {
  setFormData: (data: any) => void;
  closeModal: () => void;
  openModal: () => void;
  isModalOpen: boolean;
}

interface Appointment {
  hour: string;
  name: string;
}

interface ReduxState {
  modal: any;
  appointments?: Appointment[];
}

export const useScheduling = ({
  setFormData,
  closeModal,
  openModal,
  isModalOpen,
}: SchedulingProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const dispatch = useDispatch();
  const appointments = useSelector(
    (state: ReduxState) => state.modal.appointment
  );
  const handleAccept = (selectedDate: Dayjs | null) => {
    if (selectedDate) {
      setFormData((prev: any) => ({
        ...prev,
        date: selectedDate.format("DD-MM-YYYY"),
      }));
      openModal();
      setIsEditing(false);
    }
  };

  const handleSubmitAppointment = (formData: any) => {
    if (isEditing) {
      dispatch(updateAppointment({ index: formData.index, data: formData }));
      toast.success("Consulta alterada com sucesso");
    } else {
      dispatch(addNewAppointment(formData));
      toast.success("Consulta criada com sucesso");
    }
    closeModal();
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

  const onEditAppointment = (_index: number, updatedData: any) => {
    setIsEditing(true);
    setFormData(updatedData);
    openModal();
  };

  const onDeletAppointment = (index: number) => {
    dispatch(deleteAppointment(index));
    toast.success("Consulta deletada com sucesso");
  };

  return {
    onEditAppointment,
    handleAccept,
    handleSubmitAppointment,
    isModalOpen,
    appointments,
    onDeletAppointment,
  };
};
