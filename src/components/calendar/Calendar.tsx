import React from "react";
import {
  DatePicker,
  LocalizationProvider,
  StaticDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import useCalendar from "./useCalendar";

const Calendar = () => {
  const { value, setValue, shouldDisableDate } = useCalendar();
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
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
            //label="Agende aqui"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            shouldDisableDate={shouldDisableDate}
            //   slotProps={{
            //     textField: {
            //       className: "datePickerInput",
            //     },
            //   }}
          />
        </LocalizationProvider>
      </div>
    </>
  );
};

export default Calendar;