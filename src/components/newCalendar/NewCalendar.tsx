import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { Value } from "react-calendar/dist/esm/shared/types.js";
import 'react-calendar/dist/Calendar.css';
const NewCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

   const disabledDates = [
    new Date(2024, 11, 25), 
    new Date(2024, 11, 27), 
    new Date(2024, 11, 30), 
    new Date(2024, 0, 1),   
  ];

  const tileDisabled = ({ date }: { date: Date }) => {
    // Verifica se a data está no array de datas desabilitadas
    return disabledDates.some(
      (disabledDate) =>
        disabledDate.getDate() === date.getDate() &&
        disabledDate.getMonth() === date.getMonth() &&
        disabledDate.getFullYear() === date.getFullYear()
    );
  };

  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <div style={{ backgroundColor: "#11171d"}}>
      <Calendar onChange={onChange} value={value} tileDisabled={tileDisabled}/>
    </div>
  );
};

export default NewCalendar;
