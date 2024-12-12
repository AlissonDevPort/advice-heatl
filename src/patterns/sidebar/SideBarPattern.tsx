import React, { useState } from "react";
import {
  CloseButton,
  ContentContainer,
  Overlay,
  SidebarContainer
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowLeft,
  faArrowRight,
  faBrain,
  faClose,
  faGear,
  faHome,
  faKey,
  faListCheck,
  faPeopleGroup,
  faPlug,
  faRobot,
  faTableList,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { faChartBar, far } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import useSideBar from "./useSideBar";

interface SidebarProps {
  onClose: () => void;
}

const SideBarComponent: React.FC<SidebarProps> = ({ onClose }) => {
  const { isOpen, setIsOpen, handleToggleSidebar } = useSideBar();

  const navigate = useNavigate();
  const items = [
    {
      title: "Home",
      hr: "/",
      icon: <FontAwesomeIcon icon={faHome} />,
    },
    {
      title: "Consultas",
      hr: "/consultas",
      icon: <FontAwesomeIcon icon={faGear} />,
    },
    {
      title: "Agendamentos",
      hr: "/agendamentos",
      icon: <FontAwesomeIcon icon={faTableList} />,
    },
  ];

  const logout = () => {
    //  navigate("/");
  };

  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <SidebarContainer isOpen={isOpen}>
        <button
          onClick={handleToggleSidebar}
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
                    <ContentContainer>
                      {item.icon}
                    </ContentContainer>
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
