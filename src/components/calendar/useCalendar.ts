import { useState, useEffect, useRef } from "react";
import dayjs, { Dayjs } from "dayjs";
import {  useSelector } from "react-redux";

interface Appointment {
  index: number;
  name: string;
  hour: string;
  cpf: string;
  date: string;
  birthDate: string;
  address: string;
  totalAmount: string;
  payment: string;
  payed: string;
}
const useCalendar = () => {
  const [testinho, setTestinho] = useState<Appointment[]>();
  const [dayValue, setDayValue] = useState<Dayjs | null>(null);
  const [disabledDates, setDisabledDates] = useState<Dayjs[]>([]);
  const datePickerRef = useRef<any>(null);

  const simulateClearClick = () => {
    if (datePickerRef.current) {
      const buttons = datePickerRef.current.querySelectorAll("button");
      buttons.forEach((button: HTMLButtonElement) => {
        if (
          button.textContent &&
          button.textContent.toUpperCase() === "CLEAR"
        ) {
          button.click();
        }
      });
    }
  };

  useEffect(() => {
    const fakeApiResponse = ["2024-12-15", "2024-12-25", "2024-12-30"];
    const dates = fakeApiResponse.map((date) => dayjs(date));
    setDisabledDates(dates);
  }, []);

  const shouldDisableDate = (date: Dayjs) => {
    return disabledDates.some((disabledDate) =>
      date.isSame(disabledDate, "day")
    );
  };

  const appointments = useSelector((state: any) => state.modal.appointment);

  const handleFilterByDay = (query: any) => {
    const testinho123 = query.format("DD-MM-YYYY")
    const filtered = appointments.filter((appointment: any) =>
      appointment.date.includes(testinho123)
    );
    setTestinho(filtered);
    console.log(filtered);
    console.log(testinho);
  };

  useEffect(() => {
    if (dayValue !== null) {
      handleFilterByDay(dayValue && dayValue);
    }
  }, [dayValue]);

  return {
    dayValue,
    setDayValue,
    shouldDisableDate,
    simulateClearClick,
    datePickerRef,
  };
};

export default useCalendar;
