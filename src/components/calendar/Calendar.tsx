import React from "react";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import useCalendar from "./useCalendar";
import { Dayjs } from "dayjs";
import "dayjs/locale/pt-br";

interface CalendarProps {
  onAccept?: (selectedDate: Dayjs | null) => void;
  datePickerRef?: React.RefObject<any>;
}

const Calendar: React.FC<CalendarProps> = ({ onAccept, datePickerRef }) => {
  const { dayValue, setDayValue, shouldDisableDate } = useCalendar();
  const handleAccept = (newValue: Dayjs | null) => {
    if (onAccept) {
      onAccept(newValue);
    }
  };

  return (
    <>
      <div
        ref={datePickerRef}
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
                color: "#ffffff !important",
                "&:hover": {
                  color: "#ffffff !important",
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
            slotProps={{
              actionBar: {
                actions: ["today", "clear", "accept"],
              },
              day: {
                sx: {
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#696969",
                  },
                  "&:disabled": {
                    color: " #c0c1c2",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#1976d2",
                  },
                },
              },
            }}
          />
        </LocalizationProvider>
      </div>
    </>
  );
};

export default Calendar;
