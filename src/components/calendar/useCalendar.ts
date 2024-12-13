import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";

const useHeader = () => {
  const [value, setValue] = useState<Dayjs | null>(null);
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

  return { value, setValue, shouldDisableDate };
};

export default useHeader;
