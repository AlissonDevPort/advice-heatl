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
  PencilContainer,
  DelContainer,
} from "./styles";

interface Appointment {
  hour: string;
  name: string;
}

interface CostumerProps {
  onEditAppointment: (index: number, updatedData: any) => void;
  onDeleteAppointment: (index: number) => void;
  appointments?: Appointment[];
}
const Costumer: React.FC<CostumerProps> = ({
  onEditAppointment,
  onDeleteAppointment,
  appointments,
}) => {
  return (
    <CostumerSection>
      {appointments?.length === 0 ? (
        <p style={{ color: "white" }}>Nenhum agendamento encontrado no dia de hoje.</p>
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
              <>
                <PencilContainer
                  onClick={() => onEditAppointment(index, value)}
                >
                  <FontAwesomeIcon
                    icon={faPencil}
                    style={{ marginRight: "8px" }}
                  />
                </PencilContainer>
                <DelContainer onClick={() => onDeleteAppointment(index)}>
                  <FontAwesomeIcon icon={faTrash} />
                </DelContainer>{" "}
              </>

            </CostumerIcons>
          </CostumerContainer>
        ))
      )}
    </CostumerSection>
  );
};

export default Costumer;
