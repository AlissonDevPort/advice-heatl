import React from "react";
import Calendar from "../calendar/Calendar";
import DoctorsAvailable from "../doctorsAvailable/DoctorsAvailable";
import { GroupedItems } from "./styles";
import { Dayjs } from "dayjs";

interface GroupProps {
  onAccept?: (selectedDate: Dayjs | null) => void;
  onMonthChange?: (currentMonth: number, currentYear: number) => void;
}

const DoctorsAndCalendarGroup: React.FC<GroupProps> = ({
  onAccept,
  onMonthChange,
}) => {
  return (
    <GroupedItems>
      <Calendar onAccept={onAccept} onMonthChange={onMonthChange} />
      <DoctorsAvailable />
    </GroupedItems>
  );
};

export default DoctorsAndCalendarGroup;
