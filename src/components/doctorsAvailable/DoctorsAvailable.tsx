import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Doctor, DoctorContainer, DoctorSection } from "./styles";

const DoctorsAvailable: React.FC = () => {
  const items = [
    {
      doctorName: "Alisson",
      icon: <FontAwesomeIcon icon={faCircleUser} />,
    },
    {
      doctorName: "Jefferson",
      icon: <FontAwesomeIcon icon={faCircleUser} />,
    },
    {
      doctorName: "Anna",
      icon: <FontAwesomeIcon icon={faCircleUser} />,
    },

    {
      doctorName: "Bianca",
      icon: <FontAwesomeIcon icon={faCircleUser} />,
    },

    {
      doctorName: "James",
      icon: <FontAwesomeIcon icon={faCircleUser} />,
    },
    {
      doctorName: "Teste",
      icon: <FontAwesomeIcon icon={faCircleUser} />,
    },
  ];
  return (
    <DoctorSection>
      {items.map((value, index) => (
        <DoctorContainer key={index}>
          <Doctor>
            <div>{value.icon}</div>
            <span>{value.doctorName}</span>
          </Doctor>
        </DoctorContainer>
      ))}
    </DoctorSection>
  );
};

export default DoctorsAvailable;
