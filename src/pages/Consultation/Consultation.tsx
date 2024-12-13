import React, { useEffect } from "react";
import { Children } from "./styles";
import ReminderTable from "../../components/reminderTable/ReminderTable";
import MainContainer from "../../patterns/mainContainer/MainContainer";
import HeaderComponent from "../../patterns/header/HeaderPattern";
import SideBarComponent from "../../patterns/sidebar/SideBarPattern";
import useSideBar from "../../patterns/sidebar/useSideBar";
import SearchInput from "../../components/searchInput/SearchInput";
import useReminderTable from "../../components/reminderTable/useReminderTable";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/modal/Modal";
import { useModal } from "../../components/modal/useModal";
import { updateAppointment, addNewAppointment } from "../../store/modalSlice";

const Consultation = () => {
  const { isOpen, handleToggleSidebar, handleCloseSidebar } = useSideBar();
  const dispatch = useDispatch();
  const {
    isModalOpen,
    openModal,
    closeModal,
    formData,
    handleInputChange,
    setFormData,
  } = useModal();
  // TableInCache.splice(
  //   TableInCache.findIndex((objeto) => objeto.id === selectedId.id),
  //   1
  // );
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

  return (
    <MainContainer>
      <HeaderComponent />
      <SideBarComponent
        isOpen={isOpen}
        onClose={handleCloseSidebar}
        onToggle={handleToggleSidebar}
      />
      <Children>
        <SearchInput
          fullWidth={false}
          onChange={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
        />
        <ReminderTable
          headers={headers}
          rows={rows}
          onEditAppointment={onEditAppointment}
        />
      </Children>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmitAppointment}
        />
      )}
    </MainContainer>
  );
};

export default Consultation;
