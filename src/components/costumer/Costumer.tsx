import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
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

interface ReduxState {
  modal: any;
  appointments: Appointment[];
}

const Costumer: React.FC = () => {
  const appointments = useSelector(
    (state: ReduxState) => state.modal.appointment
  );

  return (
    <CostumerSection>
      {appointments?.length === 0 ? (
        <p style={{ color: "white" }}>Nenhum agendamento encontrado.</p>
      ) : (
        appointments?.map((value, index) => (
          <CostumerContainer key={index}>
            <CostumerComponent>
              <div>{value.hour}</div>
              <div>
                <FontAwesomeIcon icon={faCircleUser} />
              </div>
              <span>{value.name}</span>
            </CostumerComponent>
            <CostumerIcons>
              <FontAwesomeIcon icon={faPencil} />
              <FontAwesomeIcon icon={faTrash} />
              <FontAwesomeIcon icon={faCirclePlus} />
            </CostumerIcons>
          </CostumerContainer>
        ))
      )}
    </CostumerSection>
  );
};

export default Costumer;
