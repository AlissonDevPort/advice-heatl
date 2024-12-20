import React from "react";
import {
  CloseButton,
  ContentContainer,
  Overlay,
  SidebarContainer,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowLeft,
  faArrowRight,
  faGear,
  faHome,
  faTableList,
} from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
}

const SideBarComponent: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  onToggle,
}) => {
 
  const items = [
    {
      title: "Home",
      hr: "/",
      icon: <FontAwesomeIcon icon={faHome} />,
    },
    {
      title: "Agendamentos",
      hr: "/agendamentos",
      icon: <FontAwesomeIcon icon={faTableList} />,
    },
    {
      title: "Consultas",
      hr: "/consultas",
      icon: <FontAwesomeIcon icon={faGear} />,
    },
  ];

 

  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <SidebarContainer isOpen={isOpen}>
        <button
          onClick={onToggle}
          style={{
            marginTop: "30px",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon
            icon={isOpen ? faArrowLeft : faArrowRight}
            size="lg"
            color="white"
          />
        </button>{" "}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          {isOpen && (
            <>
              <CloseButton onClick={onClose}>
                <FontAwesomeIcon
                  icon={far.faCircleXmark}
                  color="#ffffff"
                  style={{ height: "1.5rem" }}
                />
              </CloseButton>
              <div>
                <div
                  style={{
                    marginTop: "30px",
                  }}
                >
                  {items.map((item, index) => (
                    <Link
                      to={item.hr}
                      style={{ textDecoration: "none" }}
                      key={index}
                    >
                      <ContentContainer>
                        {item.icon}
                        <span style={{ marginLeft: "10px" }}>{item.title}</span>
                      </ContentContainer>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
          {!isOpen && (
            <div>
              <div
                style={{
                  marginTop: "30px",
                }}
              >
                {items.map((item, index) => (
                  <Link
                    to={item.hr}
                    style={{ textDecoration: "none" }}
                    key={index}
                  >
                    <ContentContainer>{item.icon}</ContentContainer>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </SidebarContainer>
    </>
  );
};

export default SideBarComponent;
