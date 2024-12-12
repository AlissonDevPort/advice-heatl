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
              backgroundColor: "#ababab",
              input: { color: "white" },
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
                color: "#424242",
                "&:hover": {
                  color: "#b3b3b3",
                  backgroundColor: "#202020",
                },
              },
              ".Mui-selected": {
                backgroundColor: "#202020 !important",
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
