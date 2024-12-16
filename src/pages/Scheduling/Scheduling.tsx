import React, { useEffect } from "react";
import HeaderComponent from "../../patterns/header/HeaderPattern";
import SideBarComponent from "../../patterns/sidebar/SideBarPattern";
import { ContentsContainer, FirstChildren, SecondChildren } from "./styles";
import DoctorsAndCalendarGroup from "../../components/doctorsAndCalendarGroup/DoctorsAndCalendarGroup.tsx";
import Costumer from "../../components/costumer/Costumer.tsx";
import Modal from "../../components/modal/Modal.tsx";
import { useModal } from "../../components/modal/useModal.ts";
import useSideBar from "../../patterns/sidebar/useSideBar.ts";
import { useScheduling } from "./useScheduling.ts";
import useCalendar from "../../components/calendar/useCalendar.ts";

const Scheduling: React.FC = () => {
  const {
    isModalOpen,
    openModal,
    closeModal,
    formData,
    handleInputChange,
    setFormData,
    formErrors,
    validateFields
  } = useModal();
  const { isOpen, handleToggleSidebar, handleCloseSidebar } = useSideBar();
  const {
    onEditAppointment,
    handleAccept,
    handleSubmitAppointment,
    onDeletAppointment,
  } = useScheduling({
    setFormData: setFormData,
    closeModal: closeModal,
    openModal: openModal,
    isModalOpen: isModalOpen,
  });

  const { datePickerRef, simulateClearClick, filteredAppointments } =
    useCalendar();

  useEffect(() => {
    if (!isModalOpen) {
      simulateClearClick();
    }
  }, [isModalOpen]);

  return (
    <>
      <HeaderComponent />
      <SideBarComponent
        isOpen={isOpen}
        onClose={handleCloseSidebar}
        onToggle={handleToggleSidebar}
      />
      <ContentsContainer>
        <FirstChildren>
          <DoctorsAndCalendarGroup
            onAccept={handleAccept}
            datePickerRef={datePickerRef}
          />
        </FirstChildren>
        <SecondChildren>
          <Costumer
            onEditAppointment={onEditAppointment}
            onDeleteAppointment={onDeletAppointment}
            appointments={filteredAppointments}
          />
        </SecondChildren>
        {isModalOpen && (
          <Modal
            isModalOpen={isModalOpen}
            openModal={openModal}
            closeModal={closeModal}
            formData={formData}
            onInputChange={handleInputChange}
            onSubmit={handleSubmitAppointment}
            formErrors={formErrors}
            validateFields={validateFields}
          />
        )}
      </ContentsContainer>
    </>
  );
};

export default Scheduling;
