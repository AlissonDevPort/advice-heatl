import React, { useCallback } from "react";
import HeaderComponent from "../../patterns/header/HeaderPattern";
import MainContainer from "../../patterns/mainContainer/MainContainer";
import SideBarComponent from "../../patterns/sidebar/SideBarPattern";
import { ContentsContainer, FirstChildren, SecondChildren } from "./styles";
import DoctorsAndCalendarGroup from "../../components/doctorsAndCalendarGroup/DoctorsAndCalendarGroup.tsx";
import Costumer from "../../components/costumer/Costumer.tsx";
import Modal from "../../components/modal/Modal.tsx";
import { useModal } from "../../components/modal/useModal.ts";
import useSideBar from "../../patterns/sidebar/useSideBar.ts";

const Scheduling: React.FC = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { isOpen, handleToggleSidebar, handleCloseSidebar } = useSideBar();

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
          <DoctorsAndCalendarGroup />
        </SecondChildren>
        <FirstChildren>
          <Costumer />
          <button onClick={openModal}>Abrir Modal</button>

          {isModalOpen && (
            <Modal
              isModalOpen={isModalOpen}
              openModal={openModal}
              closeModal={closeModal}
            />
          )}
        </FirstChildren>
      </ContentsContainer>
    </MainContainer>
  );
};

export default Scheduling;
