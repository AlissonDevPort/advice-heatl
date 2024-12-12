import React from "react";
import Calendar from "../calendar/Calendar";
import DoctorsAvailable from "../doctorsAvailable/DoctorsAvailable";

const DoctorsAndCalendarGroup = () => {
  return (
    <div>
      <Calendar />
      <DoctorsAvailable />
    </div>
  );
};

export default DoctorsAndCalendarGroup;
