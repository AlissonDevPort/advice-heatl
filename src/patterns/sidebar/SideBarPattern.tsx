import React from "react";
import {
  CloseButton,
  ContentContainer,
  LeaveContainer,
  Overlay,
  SidebarContainer,
  UserContainer,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import LOGO_WITH_SUBTITLE from "/vite.svg";

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

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBarComponent:React.FC<SidebarProps > = ({ isOpen, onClose }) => {
  //const navigate = useNavigate();
  const items = [
    {
      title: "Home",
      hr: "/home",
      icon: <FontAwesomeIcon icon={faHome} />,
    },
    {
      title: "Chat",
      hr: "/chat",
      icon: <FontAwesomeIcon icon={far.faComment} />,
    },
    {
      title: "I.A's",
      hr: "/ias",
      icon: <FontAwesomeIcon icon={faBrain} />,
    },
    {
      title: "API keys",
      hr: "/keys",
      icon: <FontAwesomeIcon icon={faKey} />,
    },
    {
      title: "Equipe",
      hr: "/team",
      icon: <FontAwesomeIcon icon={faPeopleGroup} />,
    },
    {
      title: "Integração",
      hr: "/chat/list",
      icon: <FontAwesomeIcon icon={faPlug} />,
    },
    {
      title: "Usuário",
      hr: "/user/config",
      icon: <FontAwesomeIcon icon={faGear} />,
    },
  ];

  const logout = () => {
  //  navigate("/");
  };

  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <SidebarContainer isOpen={isOpen}>
        <FontAwesomeIcon icon={faArrowRight}/>
        {isOpen && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              height: "100vh",
            }}
          >
            <>
              <CloseButton onClick={onClose}>
                <FontAwesomeIcon
                  icon={far.faCircleXmark}
                  color="#004c98"
                  style={{ height: "1.5rem" }}
                />
              </CloseButton>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "15px",
                  }}
                >
                  <img
                    //src={LOGO_WITH_SUBTITLE}
                    alt=""
                    style={{ height: "70px" }}
                  />
                </div>
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
            <div>
              <UserContainer>
                <FontAwesomeIcon
                  icon={far.faUser}
                  style={{
                    height: "1.2rem",
                    marginRight: "10px",
                  }}
                />
              </UserContainer>

              <LeaveContainer onClick={logout}>
                <p>Sair do sistema</p>
              </LeaveContainer>
            </div>
          </div>
        )}
      </SidebarContainer>
    </>
  );
};

export default SideBarComponent;
