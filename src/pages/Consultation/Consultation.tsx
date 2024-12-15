import React from "react";
import {
  ContentsContainer,
  FirstChildren,
  SearchAndFilterContainer,
} from "./styles";
import ReminderTable from "../../components/reminderTable/ReminderTable";
import HeaderComponent from "../../patterns/header/HeaderPattern";
import SideBarComponent from "../../patterns/sidebar/SideBarPattern";
import useSideBar from "../../patterns/sidebar/useSideBar";
import SearchInput from "../../components/searchInput/SearchInput";
import Modal from "../../components/modal/Modal";
import { useModal } from "../../components/modal/useModal";
import useConsultation from "./useConsultation";

const Consultation: React.FC = () => {
  const { isOpen, handleToggleSidebar, handleCloseSidebar } = useSideBar();
  const {
    isModalOpen,
    openModal,
    closeModal,
    formData,
    handleInputChange,
    setFormData,
  } = useModal();

  const {
    onEditAppointment,
    handleSubmitAppointment,
    onDeletAppointment,
    headers,
    rows,
  } = useConsultation({
    setFormData: setFormData,
    closeModal: closeModal,
    openModal: openModal,
    isModalOpen: isModalOpen,
  });

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
          <ReminderTable
            children={
              <SearchAndFilterContainer>
                <SearchInput fullWidth={false} />
              </SearchAndFilterContainer>
            }
            headers={headers}
            rows={rows}
            onEditAppointment={onEditAppointment}
            onDeleteAppointment={onDeletAppointment}
            shouldCloneSearch={true}
          />
        </FirstChildren>
      </ContentsContainer>
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
    </>
  );
};

export default Consultation;
