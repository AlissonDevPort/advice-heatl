import {
  faCirclePlus,
  faCircleUser,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  CostumerSection,
  CostumerContainer,
  CostumerComponent,
  CostumerIcons,
} from "./styles";

const Costumer = () => {
  const items = [
    {
      hour: "08:00",
      patient: "Alisson",
      icon: <FontAwesomeIcon icon={faCircleUser} />,
    },
    {
      hour: "08:30",
      patient: "Jefferson",
      icon: <FontAwesomeIcon icon={faCircleUser} />,
    },
    {
      hour: "09:00",
      patient: "Anna",
      icon: <FontAwesomeIcon icon={faCircleUser} />,
    },

    {
      hour: "09:30",
      patient: "Bianca",
      icon: <FontAwesomeIcon icon={faCircleUser} />,
    },

    {
      hour: "10:00",
      patient: "James",
      icon: <FontAwesomeIcon icon={faCircleUser} />,
    },
    {
      hour: "10:30",
      patient: "Teste",
      icon: <FontAwesomeIcon icon={faCircleUser} />,
    },

    {
      hour: "10:30",
      patient: "Teste",
      icon: <FontAwesomeIcon icon={faCircleUser} />,
    },
    {
      hour: "10:30",
      patient: "Teste",
      icon: <FontAwesomeIcon icon={faCircleUser} />,
    },

    {
      hour: "10:30",
      patient: "Teste",
      icon: <FontAwesomeIcon icon={faCircleUser} />,
    },
    {
      hour: "10:30",
      patient: "Teste",
      icon: <FontAwesomeIcon icon={faCircleUser} />,
    },

    {
      hour: "10:30",
      patient: "Teste",
      icon: <FontAwesomeIcon icon={faCircleUser} />,
    },
    {
      hour: "10:30",
      patient: "Teste",
      icon: <FontAwesomeIcon icon={faCircleUser} />,
    },

    {
      hour: "10:30",
      patient: "Teste",
      icon: <FontAwesomeIcon icon={faCircleUser} />,
    },
  ];
  return (
    <CostumerSection>
      {items.map((value, index) => (
        <CostumerContainer key={index}>
          <CostumerComponent>
            <div>{value.hour}</div>
            <div>{value.icon}</div>
            <span>{value.patient}</span>
          </CostumerComponent>
          <CostumerIcons>
            <FontAwesomeIcon icon={faPencil} />
            <FontAwesomeIcon icon={faTrash} />
            <FontAwesomeIcon icon={faCirclePlus} />
          </CostumerIcons>
        </CostumerContainer>
      ))}
    </CostumerSection>
  );
};

export default Costumer;
