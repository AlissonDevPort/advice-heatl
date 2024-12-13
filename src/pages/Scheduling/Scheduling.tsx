import React, { useCallback, useEffect, useState } from "react";
import HeaderComponent from "../../patterns/header/HeaderPattern";
import MainContainer from "../../patterns/mainContainer/MainContainer";
import SideBarComponent from "../../patterns/sidebar/SideBarPattern";
import { ContentsContainer, FirstChildren, SecondChildren } from "./styles";
import DoctorsAndCalendarGroup from "../../components/doctorsAndCalendarGroup/DoctorsAndCalendarGroup.tsx";
import Costumer from "../../components/costumer/Costumer.tsx";
import Modal from "../../components/modal/Modal.tsx";
import { useModal } from "../../components/modal/useModal.ts";
import useSideBar from "../../patterns/sidebar/useSideBar.ts";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewAppointment,
  updateAppointment,
} from "../../store/modalSlice.ts";
import NewCalendar from "../../components/newCalendar/newCalendar.tsx";
import useCalendar from "../../components/calendar/useCalendar.ts";
interface Appointment {
  date: string;
  name: string;
}
const Scheduling: React.FC = () => {
  const dispatch = useDispatch();
  const {
    isModalOpen,
    openModal,
    closeModal,
    formData,
    handleInputChange,
    setFormData,
  } = useModal();
  const {dayValue,setDayValue} = useCalendar()
  const { isOpen, handleToggleSidebar, handleCloseSidebar } = useSideBar();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [year, setYear] = useState<number>(new Date().getFullYear());

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleAccept = (selectedDate: Dayjs | null) => {
    if (selectedDate) {
      setFormData((prev) => ({
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
    } else {
      dispatch(addNewAppointment(formData));
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

  const appointments = useSelector((state: any) => state.modal.appointment);

  const onEditAppointment = (index: number, updatedData: any) => {
    setIsEditing(true);
    setFormData(updatedData);
    openModal();
  };

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
          />
          {/* <NewCalendar/> */}
        </SecondChildren>
        <FirstChildren>
          <Costumer onEditAppointment={onEditAppointment} />
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
