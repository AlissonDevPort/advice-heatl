import React from "react";
import Calendar from "../calendar/Calendar";
import DoctorsAvailable from "../doctorsAvailable/DoctorsAvailable";
import { GroupedItems } from "./styles";
import { Dayjs } from "dayjs";

interface GroupProps {
  onAccept?: (selectedDate: Dayjs | null) => void;
  datePickerRef?: React.RefObject<any>;
}

const DoctorsAndCalendarGroup: React.FC<GroupProps> = ({
  onAccept,
  datePickerRef,
}) => {
  return (
    <GroupedItems>
      <Calendar onAccept={onAccept} datePickerRef={datePickerRef} />
      <DoctorsAvailable />
    </GroupedItems>
  );
};

export default DoctorsAndCalendarGroup;
