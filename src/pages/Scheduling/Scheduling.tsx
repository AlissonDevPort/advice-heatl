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
import { addNewAppointment } from "../../store/modalSlice.ts";
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
  const { isOpen, handleToggleSidebar, handleCloseSidebar } = useSideBar();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [filteredAppointments, setFilteredAppointments] = useState<
    Appointment[]
  >([]);

  const handleAccept = (selectedDate: Dayjs | null) => {
    if (selectedDate) {
      openModal();
      setFormData((prev) => ({
        ...prev,
        date: selectedDate.format("YYYY-MM-DD"),
      }));
    }
  };

  const handleSubmitAppointment = (formData: any) => {
    dispatch(addNewAppointment(formData));
  };
  const appointments = useSelector((state: any) => state.modal.appointment);

  const handleMonthChange = (currentMonth: number, currentYear: number) => {
    setMonth(currentMonth);
    setYear(currentYear);
    console.log(`Mês alterado para: ${currentMonth + 1}, Ano: ${currentYear}`);
  };

  useEffect(() => {
    const filtered = appointments.filter((appointment: any) => {
      const appointmentDate = new Date(appointment.date);
      const appointmentMonth = appointmentDate.getMonth();
      const appointmentYear = appointmentDate.getFullYear();

      return appointmentMonth === month && appointmentYear === year;
    });

    setFilteredAppointments(filtered);
    console.log(filteredAppointments);
  }, [month, year, appointments]);
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
            onMonthChange={handleMonthChange}
          />
        </SecondChildren>
        <FirstChildren>
          <Costumer />
          <button onClick={openModal}>Abrir Modal</button>
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
