import React, { useEffect, useRef } from "react";
import HeaderComponent from "../../patterns/header/HeaderPattern";
import MainContainer from "../../patterns/mainContainer/MainContainer";
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
  } = useModal();
  const { isOpen, handleToggleSidebar, handleCloseSidebar } = useSideBar();
  const {
    onEditAppointment,
    handleAccept,
    handleSubmitAppointment,
    appointments,
    onDeletAppointment,
  } = useScheduling({
    setFormData: setFormData,
    closeModal: closeModal,
    openModal: openModal,
    isModalOpen: isModalOpen,
  });

  const { datePickerRef, simulateClearClick } = useCalendar();

  useEffect(() => {
    if (!isModalOpen) {
      simulateClearClick();
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
      <ContentsContainer>
        <SecondChildren>
          <DoctorsAndCalendarGroup
            onAccept={handleAccept}
            datePickerRef={datePickerRef}
          />
        </SecondChildren>
        <FirstChildren>
          <Costumer
            onEditAppointment={onEditAppointment}
            onDeleteAppointment={onDeletAppointment}
            appointments={appointments}
          />

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
        </FirstChildren>
      </ContentsContainer>
    </MainContainer>
  );
};

export default Scheduling;
