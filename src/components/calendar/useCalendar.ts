import { useState, useEffect, useRef } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredAppointments } from "../../store/slices/modalSlice";

const useCalendar = () => {
  const [dayValue, setDayValue] = useState<Dayjs | null>(null);
  const [disabledDates, setDisabledDates] = useState<Dayjs[]>([]);
  const datePickerRef = useRef<any>(null);
  const dispatch = useDispatch();

  const appointments = useSelector((state: any) => state.modal.appointment);
  const filteredAppointments = useSelector(
    (state: any) => state.modal.filteredAppointments
  );

  const simulateClearClick = () => {
    if (datePickerRef.current) {
      const buttons = datePickerRef.current.querySelectorAll("button");
      buttons.forEach((button: HTMLButtonElement) => {
        if (
          button.textContent &&
          button.textContent.toUpperCase() === "CLEAR"
        ) {
          button.click();
          //aqui utilizei o dayy para contornar um problema
          // com a atualização do redux do antigo > novo item
          // solução provisoria funcional, porem peca no UI UX
          const today = dayjs();
          setDayValue(today);
        }
      });
    }
  };

  useEffect(() => {
    const fakeApiResponse = [
      "2024-12-15",
      "2024-12-25",
      "2024-12-30",
      "2024-12-31",
    ];
    const dates = fakeApiResponse.map((date) => dayjs(date));
    setDisabledDates(dates);
  }, []);

  const shouldDisableDate = (date: Dayjs) => {
    return disabledDates.some((disabledDate) =>
      date.isSame(disabledDate, "day")
    );
  };

  const handleFilterByDay = (query: any) => {
    const queryFormatted = query.format("DD-MM-YYYY");
    const filtered = appointments.filter((appointment: any) =>
      appointment.date.includes(queryFormatted)
    );
    dispatch(setFilteredAppointments(filtered));
  };

  useEffect(() => {
    if (dayValue !== null) {
      handleFilterByDay(dayValue);
    }
  }, [dayValue]);

  return {
    dayValue,
    setDayValue,
    shouldDisableDate,
    simulateClearClick,
    datePickerRef,
    filteredAppointments,
    handleFilterByDay,
  };
};

export default useCalendar;
