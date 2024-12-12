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
