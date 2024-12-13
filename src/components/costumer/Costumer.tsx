import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  CostumerSection,
  CostumerContainer,
  CostumerComponent,
  CostumerIcons,
} from "./styles";


interface Appointment {
  hour: string;
  name: string;
}

interface CostumerProps {
  onEditAppointment: (index: number, updatedData: any) => void;
  appointments?: Appointment[];
}
const Costumer: React.FC<CostumerProps> = ({ onEditAppointment,appointments }) => {
  
  
  return (
    <CostumerSection>
      {appointments?.length === 0 ? (
        <p style={{ color: "white" }}>Nenhum agendamento encontrado.</p>
      ) : (
        appointments?.map((value: any, index: number) => (
          <CostumerContainer key={index}>
            <CostumerComponent>
              <div>{value.hour}</div>
              <div>
                <FontAwesomeIcon icon={faCircleUser} />
              </div>
              <span>{value.name}</span>
            </CostumerComponent>
            <CostumerIcons>
              <FontAwesomeIcon
                icon={faPencil}
                onClick={() => onEditAppointment(index, value)}
              />
              <FontAwesomeIcon icon={faTrash} />
            </CostumerIcons>
          </CostumerContainer>
        ))
      )}
    </CostumerSection>
  );
};

export default Costumer;
