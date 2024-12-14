import React from "react";
import { Children, SearchAndFilterContainer } from "./styles";
import ReminderTable from "../../components/reminderTable/ReminderTable";
import MainContainer from "../../patterns/mainContainer/MainContainer";
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
    <MainContainer>
      <HeaderComponent />
      <SideBarComponent
        isOpen={isOpen}
        onClose={handleCloseSidebar}
        onToggle={handleToggleSidebar}
      />
      <Children>
        <SearchAndFilterContainer>
          <SearchInput fullWidth={false} onChange={() => console.log("")} />
        </SearchAndFilterContainer>
        <ReminderTable
          headers={headers}
          rows={rows}
          onEditAppointment={onEditAppointment}
          onDeleteAppointment={onDeletAppointment}
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
