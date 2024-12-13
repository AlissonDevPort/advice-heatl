import React from "react";
import {
  DatePicker,
  LocalizationProvider,
  StaticDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import useCalendar from "./useCalendar";
import { Dayjs } from "dayjs";
import "dayjs/locale/pt-br";
interface CalendarProps {
  onAccept?: (selectedDate: Dayjs | null) => void;
  onMonthChange?: (currentMonth: number, currentYear: number) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onAccept, onMonthChange }) => {
  const { dayValue, setDayValue, shouldDisableDate } = useCalendar();

  const handleAccept = (newValue: Dayjs | null) => {
    if (onAccept) {
      onAccept(newValue);
    }
  };

  const handleMonthChange = (date: Dayjs) => {
    const currentMonth = date.month();
    const currentYear = date.year();
    if (onMonthChange) {
      onMonthChange(currentMonth, currentYear);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
          <StaticDatePicker
            sx={{
              color: "white",
              backgroundColor: "#11171d",
              input: { color: "white !important" },
              fieldset: { borderColor: "lightgray" },
              "&:hover fieldset": {
                borderColor: "lightgray",
              },
              "&.Mui-focused fieldset": {
                borderColor: "lightgray",
              },
              ".MuiDayPicker-day": {
                backgroundColor: "#e0e0e0",
                "&:hover": {
                  backgroundColor: "#d3d3d3",
                },
              },
              ".MuiDayPicker-daySelected": {
                backgroundColor: "#bdbdbd",
              },
              ".MuiButton-text": {
                color: "#ffffff",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "#202020",
                },
              },
              ".MuiTypography-root": {
                color: "white !important",
              },
              ".MuiDayPicker-weekContainer .MuiTypography-root": {
                color: "white !important",
              },
              ".MuiPickersCalendarHeader-root .MuiTypography-root": {
                color: "white !important",
              },
              ".css-4k4mmf-MuiButtonBase-root-MuiPickersDay-root": {
                color: "white !important",
              },
              ".css-4k4mmf-MuiButtonBase-root-MuiPickersDay-root.Mui-disabled:not(.Mui-selected)":
                {
                  color: "#636363 !important",
                },
              svg: {
                color: "white",
              },
            }}
            orientation="portrait"
            value={dayValue}
            onChange={(newValue) => {
              setDayValue(newValue);
            }}
            shouldDisableDate={shouldDisableDate}
            onAccept={handleAccept}
            onMonthChange={handleMonthChange}
            slotProps={{
              actionBar: {
                actions: ["today", "clear", "accept"],
                
              },
              
            }}
          />
        </LocalizationProvider>
      </div>
    </>
  );
};

export default Calendar;
