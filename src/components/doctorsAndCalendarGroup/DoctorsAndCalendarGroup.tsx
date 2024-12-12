import React from "react";
import Calendar from "../calendar/Calendar";
import DoctorsAvailable from "../doctorsAvailable/DoctorsAvailable";
import { GroupedItems } from "./styles";

const DoctorsAndCalendarGroup = () => {
  return (
    <GroupedItems>
      <Calendar />
      <DoctorsAvailable />
    </GroupedItems>
  );
};

export default DoctorsAndCalendarGroup;
