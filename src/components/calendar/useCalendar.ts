import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";

const useCalendar = () => {
  const [dayValue, setDayValue] = useState<Dayjs | null>(null);
  const [disabledDates, setDisabledDates] = useState<Dayjs[]>([]);

  useEffect(() => {
    const fakeApiResponse = ["2024-12-15", "2024-12-25", "2024-12-30"];

    const dates = fakeApiResponse.map((date) => dayjs(date));
    setDisabledDates(dates);
  }, []);

  const shouldDisableDate = (date: Dayjs) => {
    return disabledDates.some((disabledDate) =>
      date.isSame(disabledDate, "day")
    );
  };

  return { dayValue, setDayValue, shouldDisableDate };
};

export default useCalendar;
