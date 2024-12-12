import React from "react";
import useDoctorsAvailable from "./useDoctorsAvailable";

const DoctorsAvailable = () => {
  const { fakeApiResponse } = useDoctorsAvailable();
  return (
    <div>
      {fakeApiResponse.map((value, index) => (
        <div key={index}>{value}</div>
      ))}
    </div>
  );
};

export default DoctorsAvailable;
