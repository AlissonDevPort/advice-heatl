import React from "react";
import { Content, IconContainer, NavbarContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import LOGO_WITH_SUBTITLE from "../../assets/logo.png";

const HeaderComponent:React.FC = () => {
  return (
    <>
      <NavbarContainer>
        <Content>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={LOGO_WITH_SUBTITLE} alt="" style={{ height: "50px" }} />
          </div>
          <IconContainer>
            <FontAwesomeIcon
              icon={faCircleUser}
              style={{ height: "30px", marginRight: "10px" }}
            />
          </IconContainer>
        </Content>
      </NavbarContainer>
    </>
  );
};

export default HeaderComponent;
